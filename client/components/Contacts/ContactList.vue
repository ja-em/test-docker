<template>
  <div>
    <v-card class="mx-auto card" max-width="" outlined>
      <v-card-text>
        <v-row>
          <v-col md="8">
            <!-- dropdown menu -->
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  class="mr-3 text-lowercase"
                  dense
                  outlined
                  filled
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>[1] ruksms</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>[1] ruksms</v-list-item>
              </v-list>
            </v-menu>
          </v-col>

          <v-col md="4" class="d-flex justify-end">
            <v-btn depressed color="primary" class="text-capitalize mr-2">
              <v-icon left>mdi-square-edit-outline</v-icon>
              Edit List
            </v-btn>
            <v-btn depressed color="primary" class="text-capitalize mr-2">
              <v-icon left>mdi-refresh</v-icon>
              Refresh
            </v-btn>
            <v-btn depressed color="error" class="text-capitalize mr-2">
              <v-icon left>mdi-trash-can-outline</v-icon>
              Remove List
            </v-btn>
            <v-btn depressed color="success" class="text-capitalize">
              <v-icon left>mdi-export</v-icon>
              Export
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="my-2">
          <v-col md="9">
            <span>Show</span>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  class="mx-1"
                  dense
                  outlined
                  filled
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>10 </span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>10</v-list-item>
                <v-list-item>25</v-list-item>
                <v-list-item>50</v-list-item>
                <v-list-item>100</v-list-item>
              </v-list>
            </v-menu>
            <span>entries</span>
          </v-col>

          <v-col md="1">
            <p class="text-right">Search:</p>
          </v-col>
          <v-col md="2">
            <v-text-field outlined class="search" dense></v-text-field>
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkbox"></v-checkbox>
          </v-col>
          <v-col md="4">
            <p class="font-weight-black">Name</p>
          </v-col>
          <v-col md="3">
            <p class="font-weight-black">Mobile Number</p>
          </v-col>
          <v-col md="4">
            <p class="font-weight-black">Subscribed</p>
          </v-col>
        </v-row>

        <v-row
          v-for="contactList in dataContactList"
          :key="contactList.name"
          class="ma-0 text-center"
          style="height: 50px"
        >
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkbox"></v-checkbox>
          </v-col>
          <v-col md="4">
            {{ contactList.name }}
          </v-col>
          <v-col md="3">
            {{ contactList.mobileNumber }}
          </v-col>
          <v-col md="4">
            {{ contactList.subscribed }}
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col md="12">
            <v-btn depressed color="error" class="text-capitalize mr-2">
              <v-icon left>mdi-close-thick</v-icon>
              Remove
            </v-btn>
            <v-btn depressed color="primary" class="text-capitalize mr-2">
              <v-icon left>mdi-arrow-right-thick</v-icon>
              Move
            </v-btn>
            <v-btn depressed color="warning" class="text-capitalize mr-2">
              <v-icon left>mdi-card-account-details</v-icon>
              Change Subscription
            </v-btn>
            <v-btn depressed color="primary" class="text-capitalize mr-2">
              <v-icon left>mdi-plus-thick</v-icon>
              Add Contact
            </v-btn>
            <v-btn depressed color="success" class="text-capitalize">
              <v-icon left>mdi-import</v-icon>
              Import Contacts
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ContactListComponent',
  data() {
    return {
      checkbox: true,
      dataContactList: [
        {
          name: 'ruksms',
          mobileNumber: '0899999999',
          subscribed: 'aaaa',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
</style>
