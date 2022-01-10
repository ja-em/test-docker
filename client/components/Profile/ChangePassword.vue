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
      <v-icon large left>mdi-lock-reset</v-icon>

      <div class="box-header with-border">
        <h3 class="box-title font-weight-light">Change Password</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <label for="currentPasswordInput" class="font-weight-bold body-2"
          >Current Password</label
        >
        <v-text-field
          v-model.trim="CurrentPassword"
          :counter="10"
          required
          outlined
          dense
          :rules="[(v) => comparePassword(v)]"
        ></v-text-field>

        <label for="newPasswordInput" class="font-weight-bold body-2"
          >New Password</label
        >
        <v-text-field
          v-model.trim="NewPassword"
          :counter="10"
          :rules="[(v) => !!v || 'New password is required']"
          required
          outlined
          dense
        ></v-text-field>
        <label for="confirmPasswordInput" class="font-weight-bold body-2"
          >Confirm Password</label
        >
        <v-text-field
          v-model.trim="ConfirmPassword"
          :counter="10"
          :rules="[
            (v) => !!v || 'Confirm password is required',
            (v) => passwordMatchResult(v),
          ]"
          required
          outlined
          dense
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn
        :disabled="!valid"
        :loading="loading"
        color="blue darken-1"
        class="white--text"
        @click="updatePassword"
      >
        <i class="fas fa-edit"></i>&nbsp;Change Password
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import bcrypt from 'bcryptjs'

export default {
  name: 'ChangePassword',
  data: () => ({
    loading: false,
    valid: true,
    selection: 1,
    nameRules: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    CurrentPassword: '',
    NewPassword: '',
    ConfirmPassword: '',
  }),
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  created() {
    // console.log(this.user)
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    comparePassword(v) {
      const compare = bcrypt.compareSync(
        this.CurrentPassword,
        this.user.password
      )

      this.compareResult = false
      return compare ? true : 'Password incorrect'
    },
    passwordMatchResult() {
      if (this.NewPassword !== this.ConfirmPassword) {
        return "Password doesn't match"
      } else {
        return true
      }
    },
    async updatePassword() {
      try {
        this.loading = true
        this.$refs.form.validate()
        const obj = {
          currentPassword: this.CurrentPassword,
          newPassword: this.ConfirmPassword,
        }
        // console.log(obj)
        const res = await this.$axios.$put(
          '/user/update-password/' + this.user.id,
          obj
        )
        this.$auth.setUser(res.data)
        this.$toast.success('update password complete')
        this.ConfirmPassword = ''
        this.CurrentPassword = ''
        this.NewPassword = ''
        this.$refs.form.resetValidation()
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
