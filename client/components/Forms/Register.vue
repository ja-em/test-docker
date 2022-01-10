<template>
  <div>
    <div class="head d-flex justify-end">
      <HeaderSettings class="d-flex justify-end" />
    </div>

    <div class="d-flex flex-row justify-center text-h5 font-weight-light mb-6">
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
        <v-card class="mx-auto" max-width="600" dark>
          <v-btn :href="routerLink.saas.login" icon class="backtohome mt-1">
            <i class="ion-ios-home-outline" />
            <i class="ion-ios-arrow-thin-left" />
          </v-btn>
          <v-card-title class="d-flex justify-center">
            <span class="text-h6 font-weight-light">{{
              $t('common.register')
            }}</span>
          </v-card-title>
          <v-card-text class="text-h5 font-weight-light">
            <v-form ref="form" v-model="valid">
              <v-row class="spacing3">
                <v-col cols="12" sm="12" class="px-3">
                  <v-text-field
                    v-model="name"
                    :label="$t('common.register_name')"
                    :rules="requiredRules"
                    color="secondary"
                    class="input"
                    name="name"
                    filled
                    required
                  />
                </v-col>
                <v-col cols="12" sm="12" class="px-3">
                  <v-text-field
                    v-model="email"
                    :label="$t('common.register_email')"
                    :rules="emailRules"
                    color="secondary"
                    class="input"
                    name="email"
                    filled
                    required
                  />
                </v-col>
                <v-col cols="12" md="6" class="px-3">
                  <v-text-field
                    v-model="password"
                    :label="$t('common.register_password')"
                    :rules="requiredRules"
                    color="secondary"
                    type="password"
                    class="input"
                    name="email"
                    filled
                    required
                  />
                </v-col>
                <v-col cols="12" md="6" class="px-3">
                  <v-text-field
                    v-model="confirmPassword"
                    :label="$t('common.register_confirm')"
                    :rules="passwordRules"
                    color="secondary"
                    type="password"
                    class="input"
                    name="confirm"
                    filled
                    required
                  />
                </v-col>
              </v-row>
              <div class="btn-area">
                <div class="form-helper">
                  <div class="form-control-label">
                    <v-checkbox
                      v-model="checkbox"
                      :label="$t('common.form_terms')"
                      :rules="requiredRules"
                      color="secondary"
                      required
                    />
                    <span>
                      <a href="#" class="link">
                        {{ $t('common.form_privacy') }}
                      </a>
                    </span>
                  </div>
                </div>
                <v-btn
                  large
                  color="secondary"
                  class="font-weight-light"
                  @click="handleSubmit"
                >
                  {{ $t('common.register') }}
                </v-btn>
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
  name: 'LogIn',
  data() {
    return {
      routerLink,
      valid: true,
      email: '',
      name: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [(v) => !!v || 'This field is required'],
      passwordRules: [
        (v) => !!v || 'This field is required',
        (v) => v === this.password || 'Passwords do not match',
      ],
      checkbox: false,
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
