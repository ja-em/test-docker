<template>
  <v-row align="center" justify="center" class="mx-5">
    <v-card
      elevation="15"
      class="mx-auto rounded-xl"
      color="error"
      dark
      width="100%"
      max-width="500"
    >
      <v-card-title>
        <v-icon large left> mdi-alert </v-icon>
        <span class="text-h4 font-weight-light">{{ error.statusCode }}</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
        {{ error.message }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar>
            <v-img class="elevation-6" alt="" src="/v.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>RUKSMS</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-btn icon fab>
              <v-icon class="mr-1" @click="$router.push('/dashboard.php')">
                mdi-home
              </v-icon></v-btn
            >
            <v-btn icon fab @click="$router.go(-1)">
              <v-icon class="mr-1"> mdi-skip-previous </v-icon></v-btn
            >
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'login',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {}
  },
  head() {
    const title = this.error.statusCode + ' ERROR'
    return {
      title,
    }
  },
  created() {
    console.table(this.error)
    let timer
    if (parseInt(this.error.statusCode) === 401) {
      timer = setTimeout(() => {
        this.$router.push('/')
        clearTimeout(timer)
      }, 2000)
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
