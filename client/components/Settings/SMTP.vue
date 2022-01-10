<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">SMTP</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="mt-3 font-weight-bold body-2">From name</label>
          <v-text-field
            type="text"
            required
            placeholder="From name"
            outlined
            dense
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">From email address</label>
          <v-text-field
            type="text"
            required
            placeholder="From email address"
            outlined
            dense
          ></v-text-field>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">SMTP</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Enabled</label>

          <v-select
            v-model="enabled"
            :items="Enabled"
            required
            dense
            outlined
            class="font-weight-light body-2"
          >
          </v-select>

          <label class="font-weight-bold body-2">Hostname</label>
          <v-text-field
            type="text"
            required
            dense
            :disabled="!enabled"
            outlined
          ></v-text-field>
          <label class="font-weight-bold body-2">Port</label>
          <v-text-field
            type="text"
            required
            dense
            :disabled="!enabled"
            outlined
          ></v-text-field>
          <label class="font-weight-bold body-2">Username</label>
          <v-text-field
            type="text"
            required
            dense
            :disabled="!enabled"
            outlined
          ></v-text-field>
          <label class="font-weight-bold body-2">Password</label>
          <v-text-field
            type="text"
            required
            dense
            :disabled="!enabled"
            outlined
          ></v-text-field>
          <label class="font-weight-bold body-2">Debug </label>
          <v-select
            :items="Debug"
            :disabled="!enabled"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SMTP',
  components: {},
  data: () => ({
    enabled: false,
    Enabled: [
      { text: 'Yes', value: true },
      { text: 'No', value: false },
    ],

    Debug: ['OFF', 'Client', 'Server', 'Low Level', 'LowLevel'],
  }),
  methods: {
    handleImages(files) {
      console.log(files)
    },
  },
}
</script>
<style lang="scss">
@import './settings-style.scss';
</style>
