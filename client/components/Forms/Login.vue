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
        <v-card class="mx-auto" max-width="550">
          <v-card-title class="d-flex justify-center">
            <span class="text-h6 font-weight-light">
              {{ $t('common.logintitle') }}
            </span>
          </v-card-title>
          <v-card-text class="text-h5 font-weight-bold">
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
                <v-col cols="12" sm="12" class="px-3">
                  <v-text-field
                    v-model="password"
                    :label="$t('common.login_password')"
                    :rules="[(v) => !!v || 'Password is required']"
                    color="secondary"
                    type="password"
                    class="input font-weight-light"
                    name="email"
                    filled
                    required
                  />
                </v-col>
              </v-row>
              <div class="form-helper">
                <div class="form-control-label font-weight-light">
                  <v-checkbox
                    v-model="checkbox"
                    :label="$t('common.login_remember')"
                    color="secondary"
                    @change="saveToLocalStorage"
                  />
                </div>
                <v-btn
                  small
                  class="button-link"
                  text
                  :href="routerLink.saas.reset"
                  >{{ $t('common.login_forgot') }}</v-btn
                >
              </div>
              <div class="btn-area">
                <v-btn
                  :disabled="!valid"
                  large
                  block
                  color="secondary"
                  @click="handleSubmit"
                  >{{ $t('common.login') }}</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="d-flex flex-row justify-center">
            <p class="text-h6 font-weight-light mb-1">
              {{ $t('common.login_createde') }}
            </p>
            <v-btn
              :href="routerLink.saas.register"
              class="font-weight-light mb-1"
              text
            >
              <v-icon class="icon signArrow">mdi-arrow-right</v-icon>
              {{ $t('common.login_create') }}
            </v-btn>
          </v-card-actions>
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
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      checkbox: false,
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
  },
  created() {
    const account = localStorage.getItem('account')
    if (account) {
      const user = JSON.parse(account)
      this.checkbox = true
      this.email = user.email
      this.password = user.password
    } else {
      this.checkbox = false
      this.email = ''
      this.password = ''
    }
    // console.log(JSON.parse(account))
  },
  methods: {
    async handleSubmit() {
      try {
        const obj = {
          email: this.email,
          password: this.password,
        }
        console.log(obj)
        await this.$auth.loginWith('local', { data: obj })
        this.$toast.success('เข้าสู่ระบบสำเร็จ', {
          position: 'top-right',
          timeout: 2543,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: false,
          closeButton: 'button',
        })
        this.$router.push('/dashboard.php')
      } catch (e) {
        // console.error(e.response.data)
        this.$toast.error(e.response.data.error.message)
      }
    },
    saveToLocalStorage() {
      console.log(this.checkbox)
      if (this.checkbox) {
        localStorage.setItem(
          'account',
          JSON.stringify({
            email: this.email,
            password: this.password,
          })
        )
      } else {
        localStorage.removeItem('account')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './form-style';
</style>
