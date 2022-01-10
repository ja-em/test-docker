<template>
  <div>
    <div class="head d-flex justify-end">
      <HeaderSettings class="d-flex justify-end" />
    </div>

    <div class="d-flex flex-row justify-center text-h4 font-weight-light mb-6">
      <v-img
        src="https://ruksms.com/_nuxt/static/images/RUK-sms-Logo-2.png"
        large
        left
        max-height="50"
        max-width="50"
      ></v-img>
      <p class="mt-2">{{ $t('common.login_or') }}</p>
    </div>
    <v-row>
      <v-col cols="12" sm="8" class="mx-auto boxlogin">
        <v-card class="mx-auto" max-width="550" dark>
          <v-btn :href="routerLink.saas.login" icon class="backtohome mt-1">
            <i class="ion-ios-home-outline" />
            <i class="ion-ios-arrow-thin-left" />
          </v-btn>
          <v-card-title class="text-h6 d-flex justify-center">
            <span class="font-weight-light">
              {{ $t('common.reset') }}
            </span>
          </v-card-title>
          <v-card-text class="text-h6 font-weight-bold">
            <v-form ref="form" v-model="valid">
              <v-row class="spacing3">
                <v-col cols="12" sm="12" class="px-3">
                  <v-text-field
                    v-model="email"
                    :label="$t('common.login_email')"
                    :rules="emailRules"
                    color="secondary"
                    class="input font-weight-light"
                    name="email"
                    filled
                    required
                  />
                </v-col>
              </v-row>
              <div class="form-helper">
                <div class="form-control-label font-weight-light">
                  <v-btn small text href="#">{{ $t('common.login') }}</v-btn>
                </div>
                <v-btn small color="info" href="#">{{
                  $t('common.reset_password')
                }}</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import routerLink from '~/static/text/link'
export default {
  name: 'RegisTers',
  data() {
    return {
      routerLink,
      valid: true,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './form-style';
</style>
