<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Auto retry failed messages</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="mt-3 font-weight-bold body-2">Max retries </label>
          <v-text-field
            type="number"
            required
            placeholder="Site name"
            outlined
            dense
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">
            Retry time interval
          </label>
          <v-select
            :items="time"
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
        <div class="panel-title">Message footer for demo users</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Enabled</label>
          <v-select
            :items="Enabled"
            required
            dense
            outlined
            class="font-weight-light body-2"
          ></v-select>
          <label class="font-weight-bold body-2">Max Contacts</label>
          <v-text-field type="text" required dense outlined></v-text-field>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Message',
  data: () => ({
    Enabled: ['Yes', 'No'],
    time: [
      '15 minutes',
      '30 minutes',
      '1 hour',
      '6hour',
      '12 hour',
      '1 day',
      '',
    ],
  }),
}
</script>
<style lang="scss">
@import './settings-style.scss';
</style>
