<template>
  <div>
    <v-card class="mx-auto card" max-width="" outlined>
      <v-card-text>
        <v-row>
          <v-col md="9">
            <p class="text-h6">Manage templates</p>
          </v-col>

          <v-col md="3" class="d-flex justify-end">
            <v-btn depressed color="primary" class="text-capitalize mr-2">
              <v-icon left>mdi-plus-thick</v-icon>
              Add template
            </v-btn>
            <v-btn depressed color="error" class="text-capitalize">
              <v-icon left>mdi-close-thick</v-icon>
              Remove
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="my-2">
          <v-col md="9">
            <span>Show</span>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  style="border: 1px"
                  class="mx-1 text-lowercase button"
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

          <v-col md="1"> <p class="text-right">Search:</p> </v-col>
          <v-col md="2">
            <v-text-field outlined dense></v-text-field>
          </v-col>
        </v-row>

        <v-row class="ma-0 text-center">
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkboxAll"></v-checkbox>
          </v-col>
          <v-col md="5">
            <p class="font-weight-black">Name</p>
          </v-col>
          <v-col md="5">
            <p class="font-weight-black">Message</p>
          </v-col>
        </v-row>

        <v-row
          v-for="template in templates"
          :key="template.name"
          class="text-center"
        >
          <v-col md="1" class="d-flex justify-end">
            <v-checkbox v-model="checkbox"></v-checkbox>
          </v-col>

          <v-col md="5">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template #activator="{ on, attrs }">
                <p class="template" v-bind="attrs" v-on="on">
                  {{ template.name }}
                </p>
              </template>
              <v-card>
                <v-card-title
                  class="text-h6 font-weight-light indigo white--text"
                >
                  Add template
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col md="12">
                        <p class="text-subtitle-2 font-weight-bold my-1">
                          Name
                        </p>
                        <v-text-field
                          outlined
                          placeholder="Name"
                          prepend-inner-icon="mdi-note"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col md="12">
                        <p class="text-subtitle-2 font-weight-bold my-1">
                          Message
                        </p>
                        <v-textarea
                          outlined
                          placeholder="Message"
                          prepend-inner-icon="mdi-android-messages"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col md="4">
                        <li>Encoding: GSM_7BIT</li>
                        <li>Length: 4</li>
                        <li>Messages: 1</li>
                        <li>Per Message: 160</li>
                        <li>Remaining: 156</li>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-space-between">
                  <v-btn
                    class="text-capitalize red darken-1 white--text"
                    @click="dialog = false"
                  >
                    <v-icon left>mdi-close-thick</v-icon>
                    Close
                  </v-btn>

                  <v-btn
                    class="text-capitalize white--text"
                    color="#3d9ab1f6"
                    @click="dialog = false"
                  >
                    <v-icon>mdi-content-save-outline</v-icon>
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>

          <v-col md="5">
            {{ template.message }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TemplatesComponent',
  data() {
    return {
      checkboxAll: null,
      checkbox: null,
      dialog: false,
      templates: [
        {
          name: 'test',
          message: 'test',
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
.button {
  width: 100px;
}
.template {
  color: #3d9ab1f6;
  text-decoration: none;
}
.template:hover {
  color: #7fc9dbf6;
  text-decoration: none;
}
</style>
