<template>
  <v-card
    class="mx-auto box box-primary"
    max-width="1400"
    outlined
    :loading="loading"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="7"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>
      <v-icon large left>mdi-cog</v-icon>

      <div class="box-header with-border">
        <h4 class="box-title font-weight-light">Settings</h4>
      </div>
    </v-card-title>
    <v-form ref="formSetting" v-model="valid">
      <div class="box-body">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">General</div>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="ml-9 mt-3 font-weight-bold body-2">Name</label>
              <v-text-field
                v-model="userName"
                required
                prepend-icon="mdi-account"
                dense
                outlined
              ></v-text-field>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">Messages</div>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="mt-3 ml-9 font-weight-bold body-2"
                >Delay Between Messages (0-120)</label
              >
              <v-text-field
                v-model.number="delay"
                required
                prepend-icon="mdi-clock-time-eight-outline"
                dense
                outlined
              ></v-text-field>
              <div>
                <v-checkbox
                  v-model="enabled"
                  hide-details
                  class="shrink mt-3 ml-9 font-weight-bold body-2"
                  label="Send received messages to email"
                ></v-checkbox>
              </div>

              <v-text-field
                v-model="email"
                type="email"
                outlined
                dense
                prepend-icon="mdi-share"
                :rules="emailRules"
                :disabled="!enabled"
              ></v-text-field>
            </div>
          </div>
        </div>
      </div>
      <!-- /.box-body -->
    </v-form>
    <v-card-actions>
      <v-btn
        :loading="loading"
        :disabled="!valid"
        color="deep-purple lighten-2"
        @click="updateUser"
      >
        <i class="fa fa-save"></i>&nbsp;Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SettingsProfile',
  data: () => ({
    valid: true,
    loading: false,
    enabled: true,
    selection: 1,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    userName: '',
    delay: '',
  }),
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  created() {
    this.userName = this.user.name
    this.delay = this.user.delay
    this.enabled = this.user.smsToEmail === 1
    this.email = this.user.receivedSmsEmail
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    async updateUser() {
      try {
        this.loading = true
        const obj = {
          name: this.userName,
          delay: this.delay,
          receivedSmsEmail: this.email,
          smsToEmail: this.enabled ? 1 : 0,
        }
        const res = await this.$axios.$put('/user/' + this.user.id, obj)
        this.$auth.setUser(res.data)
        this.$toast.success('update setting complete')
        this.$refs.formSetting.resetValidation()
        this.loading = false
      } catch (e) {
        this.loading = false
        console.error(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './profile-style.scss';
</style>
