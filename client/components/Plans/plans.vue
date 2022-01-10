<template>
  <div>
    <v-expansion-panels :loading="loading" elevation="2">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="7"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row no-gutters>
            <v-col cols="12" sm="4">
              <v-sheet
                color="teal"
                height="40"
                width="120"
                class="d-flex justify-center rounded-xl"
                elevation="10"
              >
                <v-icon color class="mr-1 white--text"
                  >mdi-plus-box-outline</v-icon
                >
                <h3 class="box-title font-weight-light mt-3 white--text">
                  Add Plan
                </h3>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="4"></v-col>
            <v-col cols="12" sm="4"></v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card class="mx-auto" max-width="1400" flat :loading="loading">
            <v-card-title> </v-card-title>
            <v-card-text class="font-weight-light">
              <v-form ref="form" v-model="valid" lazy-validation>
                <label class="shrink mt-1 ml-9 mb-1">Name</label>
                <v-text-field
                  :rules="requiredRules"
                  required
                  filled
                  outlined
                  dense
                  prepend-icon="fas fa-address-card"
                  class="input"
                ></v-text-field>

                <v-checkbox
                  v-model="Devices"
                  hide-details
                  class="shrink mt-1 ml-9 mb-1"
                  label="Max Devices"
                ></v-checkbox>
                <v-text-field
                  outlined
                  filled
                  type="number"
                  dense
                  prepend-icon="fab fa-android "
                  :disabled="!Devices"
                  class="input"
                ></v-text-field>
                <v-checkbox
                  v-model="MaxContacts"
                  hide-details
                  class="shrink mt-1 ml-9 mb-1"
                  label="MaxContacts"
                ></v-checkbox>
                <v-text-field
                  outlined
                  filled
                  type="number"
                  dense
                  prepend-icon="fa fa-address-book"
                  :disabled="!MaxContacts"
                  class="input"
                ></v-text-field>
                <v-checkbox
                  v-model="Credits"
                  hide-details
                  class="shrink mt-1 ml-9 mb-1"
                  label="Credits"
                ></v-checkbox>
                <v-text-field
                  outlined
                  filled
                  type="number"
                  dense
                  prepend-icon="fa fa-credit-card"
                  :disabled="!Credits"
                  class="input"
                ></v-text-field>
                <label class="shrink mt-1 ml-9 mb-1">Price</label>
                <v-text-field
                  :rules="requiredRules"
                  outlined
                  filled
                  type="number"
                  dense
                  prepend-icon="fas fa-money-bill-alt"
                  class="input"
                ></v-text-field>
                <label class="shrink mt-1 ml-9 mb-1">Currency</label>
                <v-select
                  :rules="requiredRules"
                  :items="Currency"
                  menu-props="auto"
                  outlined
                  filled
                  dense
                  prepend-icon="fas fa-dollar-sign"
                  class="input"
                ></v-select>
                <label class="shrink mt-1 ml-9 mb-1">Frequency</label>
                <v-text-field
                  :rules="requiredRules"
                  outlined
                  filled
                  dense
                  prepend-icon="far fa-clock "
                ></v-text-field>
                <label class="shrink mt-1 ml-9 mb-1">Frequency Unit</label>
                <v-select
                  :rules="requiredRules"
                  :items="Unit"
                  menu-props="auto"
                  outlined
                  filled
                  dense
                  prepend-icon="far fa-clock "
                  class="input"
                ></v-select>

                <v-checkbox
                  v-model="TotalCycles"
                  hide-details
                  class="shrink mt-1 ml-9 mb-1"
                  label="TotalCycles"
                ></v-checkbox>
                <v-text-field
                  outlined
                  filled
                  type="number"
                  dense
                  prepend-icon="far fa-credit-card "
                  :disabled="!TotalCycles"
                  class="input"
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" @click="reserve">
                <i class="fas fa-edit"></i>&nbsp;Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: 'PlansPages',
  data: () => ({
    loading: false,
    valid: true,
    Devices: false,
    MaxContacts: false,
    Credits: false,
    TotalCycles: false,
    selection: 1,
    requiredRules: [(v) => !!v || 'This field is required'],
    Currency: ['THB-Thai baht', 'USD-United States dolla'],
    Unit: ['Day', 'Weel', 'Month', 'Year'],
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './plans-style.scss';
</style>
