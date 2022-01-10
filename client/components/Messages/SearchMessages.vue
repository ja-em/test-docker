<template>
  <v-card class="mx-auto card" outlined>
    <v-card-title>
      <v-icon large left>mdi-email-search </v-icon>
      <span class="text-h6 font-weight-light">Search Messages</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="4">
            <v-subheader>Select User</v-subheader>
            <v-select
              v-model="selectUsers"
              :items="ItemSelectUser"
              label="All Users"
              :rules="[(v) => !!v || 'User is required']"
              outlined
              dense
              prepend-inner-icon="mdi-account
"
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-subheader>Select Device</v-subheader>
            <v-select
              v-model="selectDevice"
              :items="ItemSelectDevice"
              item-text="model"
              item-value="id"
              :rules="[(v) => !!v || 'Device is required']"
              label="Select Device"
              outlined
              dense
              prepend-inner-icon="mdi-cellphone-link"
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-subheader>Status</v-subheader>
            <v-select
              v-model="selectStatus"
              :items="ItemSelectStatus"
              :rules="[(v) => !!v || 'Status is required']"
              label="Select Status"
              outlined
              dense
              prepend-inner-icon="mdi-tag"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-n7">
          <v-col cols="12" md="4">
            <v-subheader>Mobile Number</v-subheader>
            <v-text-field
              v-model="MobileNumber"
              :counter="10"
              :rules="[(v) => !!v || 'Mobile Number is required']"
              label="Mobile Number"
              outlined
              dense
              prepend-inner-icon="mdi-cellphone"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-subheader>Start Date</v-subheader>
            <v-text-field
              label="Start Date"
              required
              outlined
              dense
              prepend-inner-icon="mdi-calendar"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-subheader>End Date</v-subheader>
            <v-text-field
              label="End Date"
              required
              outlined
              dense
              prepend-inner-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-subheader>Message</v-subheader>
        <v-textarea
          outlined
          name="input-7-4"
          label="Message"
          value=""
          prepend-inner-icon="mdi-android-messages"
        ></v-textarea>
      </v-form>
    </v-card-text>
    <v-card-actions class="mt-n5">
      <v-btn color="primary">
        <v-icon right depressed small> mdi-comment-search </v-icon>Search</v-btn
      >
      <v-btn color="green">
        <v-icon right depressed small> mdi-file-export </v-icon>Export</v-btn
      >
      <v-btn color="warning">
        <v-icon right depressed small> mdi-send-outline </v-icon>ReSend</v-btn
      >
      <v-btn depressed color="red">
        <v-icon small> mdi-close-thick </v-icon>
        Remove
      </v-btn>
    </v-card-actions>

    <v-divider></v-divider>

    <v-card-text class="py-0">
      <v-row>
        <v-col cols="12" md="10">
          <v-chip class="ma-2" color="pink" label text-color="white">
            <v-icon left> mdi-calendar-clock </v-icon>
            Mon, 03 Jan 2022
          </v-chip>
        </v-col>

        <v-col cols="12" md="2">
          <v-checkbox
            v-model="SelectCheckboxAll"
            label="Select all"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-timeline align-top dense>
        <v-timeline-item color="pink" small>
          <v-card>
            <v-card-title class="light-blue darken-1">
              <div class="mb-n5 mt-n5">
                <v-checkbox
                  v-model="SelectCheckbox"
                  color="red"
                  value="red"
                  label="AIS"
                  x-small
                ></v-checkbox>
              </div>
            </v-card-title>
            <v-card-text class="pt-3">
              สุดฮิต! เน็ต384Kbps+โทรAIS 05.00-17.00น. ทั้งวัน 22บ.
              สมัคร*777*35#
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SearchMessages',
  data() {
    return {
      valid: true,
      MobileNumber: null,
      SelectCheckboxAll: null,
      SelectCheckbox: null,
      selectUsers: null,
      selectDevice: null,
      selectStatus: null,
      ItemSelectStatus: [
        'All',
        'Pending',
        'Queued',
        'Sent',
        'Failed',
        'Received',
      ],
      ItemSelectDevice: [],
      ItemSelectUser: [],
    }
  },
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
</style>
