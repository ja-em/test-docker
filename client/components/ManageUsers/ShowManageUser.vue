<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <v-row class="mx-3 mt-4">
        <v-col md="8">
          <p class="text-h6">Manage Users</p>
        </v-col>
        <v-col md="4" class="d-flex justify-end">
          <v-btn depressed color="error" class="text-capitalize mr-2">
            <v-icon left>mdi-close-thick</v-icon>
            Remove
          </v-btn>
        </v-col>
      </v-row>

      <v-card-text>
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
                  <span>10</span>
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
            <v-text-field outlined dense></v-text-field>
          </v-col>
        </v-row>

        <v-row class="text-center mt-n5">
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkboxAll"></v-checkbox>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Name</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Email</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Total Messages</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Connected Devices</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Max Devices</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Max Contacts</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Credits</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Expiry Date</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Delay</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Date Added</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Last Login</p>
          </v-col>
        </v-row>

        <v-row
          v-for="user in dataUser"
          :key="user.name"
          class="ma-0 text-center"
          style="height: 50px"
        >
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkbox"></v-checkbox>
          </v-col>
          <v-col md="1">
            {{ user.name }}
          </v-col>
          <v-col md="1">
            {{ user.email }}
          </v-col>
          <v-col md="1">
            {{ user.totalMessage }}
          </v-col>
          <v-col md="1">
            {{ user.conDevice }}
          </v-col>
          <v-col md="1">
            {{ user.maxDevice }}
          </v-col>
          <v-col md="1">
            {{ user.maxContact }}
          </v-col>
          <v-col md="1">
            {{ user.credit }}
          </v-col>
          <v-col md="1">
            {{ user.expiryDate }}
          </v-col>
          <v-col md="1">
            {{ user.delay }}
          </v-col>
          <v-col md="1">
            {{ user.dateAdd }}
          </v-col>
          <v-col md="1">
            {{ user.lastLogin }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ShowManageUserComponent',
  data() {
    return {
      checkbox: null,
      checkboxAll: null,
      dataUser: [
        {
          name: 'test',
          email: 'test@gmail.com',
          totalMessage: 'message',
          conDevice: 'connect',
          maxDevice: '3',
          maxContact: '3',
          credit: 'aaa',
          expiryDate: '08/01/2566',
          delay: 'aaa',
          dateAdd: '08/01/2565',
          lastLogin: '08/01/2565',
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
