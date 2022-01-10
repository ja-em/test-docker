<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">PayPal</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="mt-3 font-weight-bold body-2"> Enabled </label>
          <v-select
            :items="Enabled"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
          <label class="mt-3 font-weight-bold body-2">Credentials type</label>
          <v-select
            :items="type"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
          <label class="mt-3 font-weight-bold body-2">Client ID</label>
          <v-text-field
            type="text"
            required
            placeholder="Site name"
            outlined
            dense
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">Secret</label>
          <v-text-field
            type="text"
            required
            placeholder="Site name"
            outlined
            dense
          ></v-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Email',
  data: () => ({
    Enabled: ['Yes', 'No'],
    type: ['Sandbox', 'Live'],
  }),
}
</script>
<style lang="scss">
@import './settings-style.scss';
</style>
