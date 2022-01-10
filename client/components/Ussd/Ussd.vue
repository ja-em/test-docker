<template>
  <v-card class="mx-auto" max-width="1400" outlined>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="7"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>
      <v-icon large left>mdi-email-sync </v-icon>
      <span class="text-h6 font-weight-light">Send USSD request</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-subheader>USSD Request</v-subheader>
        <v-text-field
          v-model.lazy="ussdRequest"
          :rules="[(v) => !!v || 'USSD Request is required']"
          label="USSD Request"
          required
          outlined
          prepend-inner-icon="mdi-cellphone-nfc"
        ></v-text-field>
        <v-subheader>Device</v-subheader>
        <v-select
          v-model="selectDevice"
          :items="deviceEnabled"
          item-text="model"
          item-value="id"
          :rules="[(v) => !!v || 'Device is required']"
          label="Select"
          outlined
          prepend-inner-icon="mdi-cellphone-link
"
          @change="initialSims"
        ></v-select>

        <v-subheader>SIM</v-subheader>
        <v-select
          v-model="selectSim"
          :items="sims"
          :loading="selectSimLoading"
          label="Select"
          outlined
          prepend-inner-icon="mdi-sim"
        ></v-select>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="!valid" color="primary" @click="sendUssdRequest">
        <v-icon right depressed small> mdi-send-outline </v-icon>Send</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'UssdS',

  props: {
    devices: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    deviceEnabled: [],
    loading: false,
    selectDevice: null,
    valid: true,
    selectSim: null,
    sims: [],
    selectSimLoading: false,
    ussdRequest: '',
  }),
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  created() {
    // console.log(this.user)
    this.initialData()
  },
  methods: {
    initialData() {
      this.deviceEnabled = this.devices.filter((d) => d.enabled === 1)
      // console.log(this.selectDevice)
      if (this.deviceEnabled.length !== 0) {
        this.selectDevice = this.deviceEnabled[0].id
        this.initialSims()
      }
    },
    initialSims() {
      this.selectSimLoading = true
      this.sims = []
      if (this.selectDevice) {
        const device = this.devices.find((d) => d.id === this.selectDevice)
        let timer
        const items = []
        if (device) {
          // console.log(device)
          device.sims.map((s) =>
            items.push({
              text: `ซิม ${s.slot + 1} [${s.name}]`,
              value: s.slot,
              disabled: !s.enabled,
            })
          )
          timer = setTimeout(() => {
            this.sims = items
            this.selectSim = this.sims[0].value
            clearTimeout(timer)
            this.selectSimLoading = false
          }, 500)
        } else {
          this.sims = []
          this.selectSimLoading = false
        }
      }
    },
    async sendUssdRequest() {
      try {
        const obj = {
          request: this.ussdRequest,
          userID: this.user.id,
          deviceID: this.selectDevice,
          simSlot: this.selectSim,
        }
        const res = await this.$axios.$post('/ussd/send-request', obj)
        // console.log(res)
        this.$emit('sendUssdRequest', res.data)
        this.ussdRequest = ''
        this.$toast.success('ส่ง USSD สำเร็จ')
        this.$refs.form.resetValidation()
      } catch (e) {
        console.error(e.response.data)
      }
    },
  },
}
</script>

<style></style>
