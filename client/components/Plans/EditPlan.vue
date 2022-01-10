<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <v-btn
          small
          color="red lighten-2 white--text"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <!-- <p v-text="$t(planstitleto)" /> -->
          {{ $t(planstitleto) }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 font-weight-light indigo white--text"
          >Edit Plan</v-card-title
        >
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
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
            <label class="shrink mt-1 ml-9 mb-1">Enabled</label>
            <v-select
              :rules="requiredRules"
              :items="Enabled"
              menu-props="auto"
              outlined
              filled
              dense
              prepend-icon="fa fa-check-square "
              class="input"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red darken-1 white--text" @click="dialog = false">
            <v-icon small>mdi-close</v-icon>Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="light-blue darken-2 white--text"
            @click="dialog = false"
          >
            <i class="fa fa-save"></i>&nbsp; save changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'EditPlan',
  props: {
    planstitleto: {
      type: String,
      default: '',
    },
    drawertitleto: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      dialog: false,
      valid: false,
      Devices: false,
      MaxContacts: false,
      Credits: false,
      requiredRules: [(v) => !!v || 'This field is required'],
      Enabled: ['Yes', 'No'],
    }
  },
  created() {
    console.log(this.planstitleto)
  },
}
</script>
