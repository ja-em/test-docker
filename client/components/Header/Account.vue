<template>
  <v-menu
    v-model="open"
    :close-on-content-click="closeOnContentClick"
    transition="slide-y-transition"
    offset-y
    nudge-top="-6"
    bottom
    class="menu-setting"
  >
    <template #activator="{ on }">
      <div class="setting">
        <v-btn fab text small class="ma-3" v-on="on">
          <v-icon
            :class="{ invert: invert, active: open }"
            class="icon"
            color="white"
            >mdi-account</v-icon
          >
        </v-btn>
      </div>
    </template>
    <div class="popover violeta-var">
      <v-list class="mode-menu">
        <v-list-item-content class="justify-center mt-2">
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="white--text text-h5">{{ initials }}</span>
            </v-avatar>
            <h5 class="mt-2">{{ user ? user.name : 'RUKSMS ' }}</h5>
          </div>
        </v-list-item-content>
      </v-list>

      <v-divider />
      <v-list :tile="false" class="lang-menu">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              v-for="(item, index) in menuList"
              :key="index"
              class="lang-opt"
            >
              <v-btn
                :href="item.url"
                text
                block
                @click="setOffset(item.offset)"
              >
                {{ $t('saasLanding.header_' + item.name) }}
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-menu>
</template>

<script>
import navMenu from './menu'
let counter = 0
function createData(name, url, offset, icon) {
  counter += 1
  return {
    id: counter,
    name,
    icon,
    url,
    offset,
  }
}
export default {
  name: 'DefaultAccount',

  data: () => ({
    open: false,
    invert: false,
    closeOnContentClick: false,
    // user: {
    //     initials: 'JD',
    //     fullName: 'John Doe',
    // },
    menuList: [
      // eslint-disable-next-line no-undef
      createData(navMenu[0], 'mdi-apps', '#' + navMenu[0]),
      // eslint-disable-next-line no-undef
      createData(navMenu[1], '#' + navMenu[1]),
    ],
  }),
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    initials() {
      const txt = this.user ? this.user.name : 'RUKSMS'
      const txt2 = [...txt]
      const txt3 = txt2[0] + txt[1]
      const txt4 = txt3.toUpperCase()
      return txt4
    },
  },
}
</script>

<style lang="scss" scoped>
@import './header-style.scss';
</style>
