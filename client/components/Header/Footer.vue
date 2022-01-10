/* eslint-disable vue/multi-word-component-names */
<template>
  <v-footer :absolute="!fixed" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: 'TodoFooter',
  // ...
  data() {
    return {
      fixed: true,
    }
  },
}
</script>

<style></style>
