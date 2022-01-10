<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <v-card-title>
        <p class="text-h6">Send a message to Contacts List</p>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">Contacts List</v-subheader>
              <v-select
                :items="contactsList"
                placeholder="Contacts List"
                prepend-inner-icon="mdi-contacts"
                dense
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="mt-n7">
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">
                Device
                <v-icon color="#3d9ab1f6" style="cursor: pointer"
                  >mdi-plus-box</v-icon
                >
                <v-icon color="#3d9ab1f6" style="cursor: pointer"
                  >mdi-minus-box</v-icon
                >
              </v-subheader>
              <v-autocomplete
                v-model="selectDevice"
                :items="ItemSelectDevice"
                :rules="[(v) => !!v || 'Device is required']"
                label="Device"
                outlined
                dense
                chips
                small-chips
                multiple
                prepend-inner-icon="mdi-cellphone-link"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row class="mt-n7" align="center">
            <v-checkbox v-model="schedule" x-small class="ml-6"></v-checkbox>
            <label class="text-subtitle-2 font-weight-bold mx-2">
              Schedule
            </label>
            <v-icon>mdi-information</v-icon>
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

          <v-row>
            <label class="text-subtitle-2 font-weight-bold ml-6 mr-2"
              >Type</label
            >
            <v-icon>mdi-information</v-icon>
            <v-col cols="12" md="12">
              <v-select
                :items="selectType"
                placeholder="Type"
                dense
                outlined
                prepend-inner-icon="mdi-email"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <label class="text-subtitle-2 font-weight-bold mx-6"
              >Template</label
            >
            <v-col cols="12" md="12">
              <v-select
                :items="selectTemplate"
                placeholder="Template"
                dense
                outlined
                prepend-inner-icon="mdi-page-layout-header-footer"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <label class="text-subtitle-2 font-weight-bold mx-6">Message</label>
            <v-col cols="12" md="12">
              <v-textarea
                outlined
                placeholder="Message"
                prepend-inner-icon="mdi-android-messages"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-capitalize white--text font-weight-regular mr-2"
          color="#3d9ab1f6"
        >
          <v-icon>mdi-send-outline </v-icon>
          Send
        </v-btn>
        <v-btn
          class="text-capitalize white--text font-weight-regular"
          color="primary"
        >
          <v-icon>mdi-link-variant</v-icon>
          Add Unsubscribe Link
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SendMessageComponent',
  data() {
    return {
      valid: true,
      contactsList: ['ruksms'],
      schedule: false,
      selectDevice: null,
      ItemSelectDevice: [
        'Iphone 13S [1] | SIM #1 [AIS]',
        'Iphone 14S [2] | SIM #1 [True]',
        'Iphone 15S [3] | SIM #1 [DTAC]',
      ],
      selectType: ['SMS', 'MMS'],
      selectTemplate: ['None'],
    }
  },
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
</style>
