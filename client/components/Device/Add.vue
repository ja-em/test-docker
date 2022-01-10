<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Add Device </v-card-title>
        <v-card-subtitle class="grey lighten-2"
          >You can follow below steps to add your Android phone in the
          system.</v-card-subtitle
        >
        <v-card-text>
          1.Download the latest version of Android app from here. It is better
          if you download it directly into your phone.
        </v-card-text>
        <v-card-text class="text-center">
          <qrcode-vue :value="value" size="300" level="H" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'AddDeviceDialog',
  components: {
    QrcodeVue,
  },

  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    value() {
      // window.location.origin
      const obj = {
        server: 'http://192.168.1.37:3000',
        key: this.user.apiKey,
      }
      return JSON.stringify(obj)
    },
  },
}
</script>
