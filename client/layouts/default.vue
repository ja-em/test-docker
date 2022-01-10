<template>
  <v-app dark>
    <HeaderAppbars :drawertitleto="drawertitleto" />
    <HeaderDrawer @drewertitle="drewertitle" />
    <v-main style="background-color: #a3a8b1">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <HeaderFooter />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawertitleto: '',
    }
  },
  methods: {
    drewertitle(title) {
      // console.log(title);
      this.drawertitleto = title
    },
  },
}
</script>
