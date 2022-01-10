<template>
  <v-app>
    <nuxt />
  </v-app>
</template>
<script>
export default {
  name: 'LoginLayouts',
}
</script>

<style lang="scss" scoped>
v-app {
  .theme--dark & {
    color: $palette-indigo-light;
  }
  .theme--light & {
    color: $palette-grey-dark;
  }
}
</style>
