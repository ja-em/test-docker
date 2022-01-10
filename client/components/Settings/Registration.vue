<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Default settings for new users</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="mt-3 font-weight-bold body-2">Delay</label>
          <v-text-field
            type="text"
            required
            placeholder="Site name"
            outlined
            dense
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">
            Request a delivery report for each message sent by the user (Only
            SMS)
          </label>
          <v-select
            :items="OnlySMS"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
          <label class="mt-3 font-weight-bold body-2"
            >Auto retry failed messages</label
          >
          <v-select
            :items="OnlySMS"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">New user limitations ( 0 → Unlimited )</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Delay</label>
          <v-text-field type="number" required dense outlined></v-text-field>
          <label class="font-weight-bold body-2">Max Contacts</label>
          <v-text-field type="number" required dense outlined></v-text-field>
          <label class="font-weight-bold body-2">Max Contacts</label>
          <v-text-field type="number" required dense outlined></v-text-field>
          <label class="font-weight-bold body-2">Max Contacts</label>
          <v-select
            :items="MaxContacts"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">reCaptcha</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Enabled</label>
          <v-select
            :items="OnlySMS"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
          <label class="font-weight-bold body-2">Secret key</label>
          <v-text-field type="number" required dense outlined></v-text-field>
          <label class="font-weight-bold body-2">Site key</label>
          <v-text-field type="number" required dense outlined></v-text-field>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Email',
  data: () => ({
    OnlySMS: ['Yes', 'No'],
    MaxContacts: ['Never', '7Days', '15Days', '30Days'],
  }),
}
</script>
<style lang="scss">
@import './settings-style.scss';
</style>
