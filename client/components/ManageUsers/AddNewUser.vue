<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <v-card-title>
        <p class="text-h6">Add New User</p>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row class="mt-n7">
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">Name</v-subheader>
              <v-text-field
                placeholder="Name"
                outlined
                dense
                prepend-inner-icon="mdi-account"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7">
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">Email</v-subheader>
              <v-text-field
                placeholder="Email"
                outlined
                dense
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7">
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">Confirm Email</v-subheader>
              <v-text-field
                placeholder="Confirm Email"
                outlined
                dense
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7" align="center">
            <v-checkbox v-model="maxDevices" x-small class="ml-6"></v-checkbox>
            <label class="font-weight-bold">Max Devices</label>
            <v-col cols="12" md="12">
              <v-text-field
                placeholder="Max Devices"
                :disabled="!maxDevices"
                outlined
                dense
                filled
                prepend-inner-icon="mdi-android"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7" align="center">
            <v-checkbox v-model="maxContacts" x-small class="ml-6"></v-checkbox>
            <label class="font-weight-bold">Max Contacts</label>
            <v-col cols="12" md="12">
              <v-text-field
                placeholder="Max Contacts"
                :disabled="!maxContacts"
                outlined
                dense
                filled
                prepend-inner-icon="mdi-contacts"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7" align="center">
            <v-checkbox v-model="Credits" x-small class="ml-6"></v-checkbox>
            <label class="font-weight-bold">Credits</label>
            <v-col cols="12" md="12">
              <v-text-field
                placeholder="Credits"
                :disabled="!Credits"
                outlined
                dense
                filled
                prepend-inner-icon="mdi-credit-card"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7" align="center">
            <v-checkbox v-model="ExpiryDate" x-small class="ml-6"></v-checkbox>
            <label class="font-weight-bold">Expiry Date</label>
            <v-col cols="12" md="12">
              <v-text-field
                placeholder="Expiry Date"
                :disabled="!ExpiryDate"
                outlined
                dense
                filled
                prepend-inner-icon="mdi-clock-time-three"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-capitalize white--text font-weight-regular mr-2"
          color="#3d9ab1f6"
        >
          <v-icon>mdi-account-plus</v-icon>
          Create User
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AddNewUserComponent',
  data() {
    return {
      valid: true,
      maxDevices: false,
      maxContacts: false,
      Credits: false,
      ExpiryDate: false,
    }
  },
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
</style>
