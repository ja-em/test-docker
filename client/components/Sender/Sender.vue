<template>
  <v-card class="mx-auto card" outlined>
    <v-card-title>
      <v-icon large left>mdi-email-send </v-icon>
      <span class="text-h6 font-weight-light">Send Message</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="12">
            <v-subheader>Select Device</v-subheader>
            <v-autocomplete
              v-model="selectDevice"
              :items="ItemSelectDevice"
              :rules="[(v) => !!v || 'Device is required']"
              label="Select Device"
              outlined
              dense
              chips
              small-chips
              multiple
              prepend-inner-icon="mdi-cellphone-link"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row class="mt-n7">
          <v-col cols="12" md="12">
            <v-subheader>Mobile Number</v-subheader>
            <v-text-field
              label="Mobile Number"
              :rules="[(v) => !!v || 'Mobile Number is required']"
              outlined
              dense
              prepend-inner-icon="mdi-cellphone"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-n7" align="center">
          <v-checkbox v-model="schedule" x-small class="ml-6"></v-checkbox>
          <v-subheader
            >Schedule
            <span class="ml-1"><v-icon>mdi-information</v-icon></span>
          </v-subheader>
          <v-col cols="12" md="12">
            <v-text-field
              placeholder="Schedule"
              :disabled="!schedule"
              outlined
              dense
              filled
              prepend-inner-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-n7">
          <v-subheader class="ml-4"
            >Prioritize
            <span class="ml-1"><v-icon>mdi-information</v-icon></span>
          </v-subheader>
          <v-col cols="12" md="12">
            <v-select
              :items="prioritize"
              placeholder="Prioritize"
              prepend-inner-icon="mdi-contacts"
              dense
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-n7">
          <v-subheader class="ml-4"
            >Type
            <span class="ml-1"><v-icon>mdi-information</v-icon></span>
          </v-subheader>
          <v-col cols="12" md="12">
            <v-select
              :items="type"
              placeholder="Type"
              prepend-inner-icon="mdi-contacts"
              dense
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-n7">
          <v-col cols="12" md="12">
            <v-subheader>Template</v-subheader>
            <v-select
              :items="template"
              placeholder="Template"
              outlined
              dense
              prepend-inner-icon="mdi-cellphone"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-n7">
          <v-col cols="12" md="12">
            <v-subheader>Message</v-subheader>
            <v-textarea
              outlined
              placeholder="Message"
              prepend-inner-icon="mdi-android-messages"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions class="mt-n5">
      <v-btn color="primary">
        <v-icon right depressed small> mdi-send-outline </v-icon>Send</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SenderMessage',
  data() {
    return {
      valid: true,
      selectDevice: null,
      ItemSelectDevice: [
        'Iphone 13S [1] | SIM #1 [AIS]',
        'Iphone 14S [2] | SIM #1 [True]',
        'Iphone 15S [3] | SIM #1 [DTAC]',
      ],
      schedule: false,
      prioritize: ['No', 'Yes'],
      type: ['SMS', 'MMS'],
      template: ['None'],
    }
  },
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
</style>
