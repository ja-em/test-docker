<template>
  <div>
    <v-list-item
      class="justify-space-between pb-3"
      style="background-color: #3c8dbc"
    >
      <v-list-item-avatar>
        <v-img :src="require('@/assets/vmd.svg')" />
      </v-list-item-avatar>

      <v-list-item-content class="pl-2">
        <v-list-item-title class="text-h6">
          <strong class="mr-1 font-weight-medium white--text" v-text="title" />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="mr-1 font-weight-light white--text Caption">{{
          user
            ? user.name
            : 'RUKSMS                                                                                                                                                                                                                                                                                       '
        }}</v-list-item-title>
        <v-list-item-subtitle class="mr-1 font-weight-light white--text Caption"
          ><a href="profile.php" class="user-name Caption white--text"
            ><i class="fa fa-circle text-success mr-1"></i>Online</a
          ></v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
// Utilities

export default {
  name: 'DefaultDrawerHeader',
  data() {
    return {
      title: 'RUKSMS',
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>
<style lang="scss" scoped>
.user-panel > .info > p {
  font-weight: 600;
  margin-bottom: 9px;
}
.user-panel > .info > a {
  color: #fff;
}
.text-success {
  color: #3c763d;
}
.user-panel > .info > a {
  text-decoration: none;
  padding-right: 5px;
  margin-top: 3px;
  font-size: 11px;
}
.user-panel > .info > a > .fa,
.user-panel > .info > a > .ion,
.user-panel > .info > a > .glyphicon {
  margin-right: 3px;
}
</style>
