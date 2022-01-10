<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <v-card-title>
        <p class="text-h6">Add Response</p>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row class="mt-n7">
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">Message</v-subheader>
              <v-text-field
                placeholder="Message"
                outlined
                dense
                prepend-inner-icon="mdi-android-messages"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mt-n7">
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">Response</v-subheader>
              <v-textarea
                outlined
                placeholder="Response"
                prepend-inner-icon="mdi-reply-all"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row class="mt-n7">
            <v-col cols="12" md="12">
              <v-subheader class="font-weight-bold">Respond if</v-subheader>
              <v-select
                :items="respondIF"
                placeholder="Respond if"
                dense
                outlined
                prepend-inner-icon="mdi-reply-all"
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-capitalize white--text font-weight-regular mr-2"
          color="#3d9ab1f6"
        >
          <v-icon>mdi-plus-thick</v-icon>
          Add Response
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AddResponseComponent',
  data() {
    return {
      valid: true,
      respondIF: [
        'Exact match (Case Insensitive)',
        'Exact match (Case Sensitive)',
        'Contains the message',
        'Matches the regular expression',
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
