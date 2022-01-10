<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <v-row class="mx-3 mt-4">
        <v-col md="8">
          <p class="text-h6">Responses</p>
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
            <v-text-field outlined class="search" dense></v-text-field>
          </v-col>
        </v-row>

        <v-row class="text-center mt-n5">
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkboxAll"></v-checkbox>
          </v-col>
          <v-col md="3">
            <p class="font-weight-black">Message</p>
          </v-col>
          <v-col md="3">
            <p class="font-weight-black">Response</p>
          </v-col>
          <v-col md="3">
            <p class="font-weight-black">Respond if</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Enabled</p>
          </v-col>
        </v-row>

        <v-row
          v-for="respons in dataRespons"
          :key="respons.id"
          class="ma-0 text-center"
          style="height: 50px"
        >
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkbox"></v-checkbox>
          </v-col>
          <v-col md="3">
            {{ respons.message }}
          </v-col>
          <v-col md="3">
            {{ respons.result }}
          </v-col>
          <v-col md="3">
            {{ respons.respondIF }}
          </v-col>
          <v-col md="2">
            {{ respons.enabled }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ShowResponseComponent',
  data() {
    return {
      checkbox: null,
      checkboxAll: null,
      dataRespons: [
        {
          message: 'ruksms',
          result: 'result',
          respondIF: 'Exact match (Case Insensitive)',
          enabled: 'enabled',
        },
        {
          message: 'ruksms',
          result: 'result',
          respondIF: 'Exact match (Case Insensitive)',
          enabled: 'enabled',
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
