<template>
  <div>
    <v-app-bar
      app
      absolute
      class="v-bar--underline"
      :clipped-left="$vuetify.rtl"
      :clipped-right="!$vuetify.rtl"
      height="70"
      flat
      style="background-color: #3c8dbc"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

      <v-btn
        class="ml-3 mr-4 hidden-sm-and-down"
        fab
        text
        small
        @click="mini = !mini"
      >
        <v-icon color="white">{{
          mini ? 'mdi-format-list-bulleted' : 'mdi-dots-vertical'
        }}</v-icon>
      </v-btn>

      <v-toolbar-title
        class="font-weight-light text-h5 white--text"
        v-text="$t(drawertitleto)"
      />
      <v-spacer />
      <HeaderSettings />
      <HeaderAccount />
    </v-app-bar>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'AppBars',
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
    drawertitleto: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    ...sync('app', ['drawer', 'mini']),
  },

  created() {
    // console.log(this.drawertitleto);
  },
}
</script>

<style></style>
