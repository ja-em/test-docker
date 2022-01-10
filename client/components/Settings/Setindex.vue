<template>
  <div>
    <v-card>
      <v-tabs
        grow
        color="blue darken-2"
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tab>General</v-tab>
        <v-tab>SMTP</v-tab>
        <v-tab>Email</v-tab>
        <v-tab>Registrations</v-tab>
        <v-tab>Message</v-tab>
        <v-tab>Payment Gateway</v-tab>
        <v-tab-item class="ma-6 mt-2">
          <SettingsGeneral />
        </v-tab-item>
        <v-tab-item class="ma-6 mt-2">
          <SettingsSMTP />
        </v-tab-item>
        <v-tab-item class="ma-6 mt-2">
          <SettingsEmail />
        </v-tab-item>
        <v-tab-item class="ma-6 mt-2">
          <SettingsRegistration />
        </v-tab-item>
        <v-tab-item class="ma-6 mt-2">
          <SettingsMessage />
        </v-tab-item>
        <v-tab-item class="ma-6 mt-2">
          <SettingsPayment />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SetIndex',
}
</script>

<style></style>
