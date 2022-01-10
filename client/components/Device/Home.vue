<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <p class="text-h6">Device Settings</p>
      <p class="text-subtitle-2 font-weight-bold my-1">Primary Device</p>

      <v-select
        v-model="selectPrimaryDevice"
        :items="deviceItems"
        item-text="name"
        item-value="ID"
        label="Select"
        data-vv-name="select"
        required
        outlined
        dense
        prepend-inner-icon="mdi-account"
      ></v-select>

      <v-btn
        class="text-capitalize white--text font-weight-regular"
        color="#3d9ab1f6"
        @click="updatePrimaryDevice"
      >
        <v-icon>mdi-content-save-outline</v-icon>
        Save
      </v-btn>
    </v-card>

    <v-card class="mx-auto card" max-width="" outlined>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row class="ma-2">
          <v-col sm="6" md="6">
            <v-select
              v-model="selectUser"
              :items="userItems"
              :disabled="user.isAdmin === 0"
              label="Select"
              data-vv-name="select"
              required
              outlined
              dense
              prepend-inner-icon="mdi-account"
            ></v-select>
          </v-col>
          <v-col sm="6" md="6" align="end">
            <v-btn
              depressed
              color="primary"
              @click="$refs.deviceAdd.dialog = true"
            >
              <v-icon small>mdi-plus </v-icon>
              Add Device
            </v-btn>
            <v-btn
              :disabled="selectDevice.length === 0"
              depressed
              color="red"
              @click="deleteDevice"
            >
              <v-icon small> mdi-close-thick </v-icon>
              Remove
            </v-btn>
          </v-col>
        </v-row>
      </v-form>

      <!-- <v-divider class="mt-n5"></v-divider> -->

      <v-data-table
        v-model="selectDevice"
        show-select
        :headers="headers"
        :items="deviceItems"
        :search="search"
        item-key="ID"
        hide-default-footer
      >
        <template #top="{ pagination, options, updateOptions }">
          <v-divider class="mt-n5"></v-divider>
          <v-row>
            <v-col>
              <v-text-field
                v-model.lazy="search"
                class="ml-4"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
            <v-col>
              <v-data-footer
                style="border: none"
                first-icon="mdi-arrow-collapse-left"
                :pagination="pagination"
                :options="options"
                items-per-page-text="$vuetify.dataTable.itemsPerPageText"
                @update:options="updateOptions"
              />
            </v-col>
          </v-row>
        </template>
        <template #[`item.deviceStatus`]="{ item }">
          <v-chip
            :color="item.deviceStatus === 'Connected' ? 'green' : 'red'"
            dark
          >
            {{ item.deviceStatus }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
    <DeviceAdd ref="deviceAdd" />
  </div>
</template>

<script>
export default {
  name: 'DeviceComponent',

  props: {
    devices: {
      type: Array,
      default: () => [],
    },

    users: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      valid: true,
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Device Model', value: 'deviceModel' },
        { text: 'Android Version', value: 'androidVersion' },
        { text: 'App Version', value: 'appVersion' },
        { text: 'Total Message', value: 'totalMessage' },
        { text: 'Device Status', value: 'deviceStatus' },
      ],
      deviceItems: [],
      selectUser: null,
      selectPrimaryDevice: null,
      selectDevice: [],
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    userItems() {
      return this.users.map((u) => {
        const obj = { text: `${u.name} ( ${u.email} )`, value: u.id }
        this.selectUser = this.user.id
        this.selectPrimaryDevice = this.user.primaryDeviceID
        return obj
      })
    },
  },
  created() {
    console.log(this.users)
    this.$nuxtSocket({ channel: '/' }).on('updateDevice', (data) =>
      this.updateDevice(data)
    )

    this.initialDeviceItems()
  },
  methods: {
    initialDeviceItems() {
      const filterDevice = this.devices.filter((d) => d.userID === this.user.ID)
      console.log(filterDevice)
      filterDevice.reverse().map((d) =>
        this.deviceItems.push({
          ID: d.ID,
          androidId: d.androidId,
          name: `${d.model} [${d.ID}]`,
          deviceModel: d.model,
          androidVersion: d.androidVersion,
          appVersion: d.appVersion,
          totalMessage: 0,
          deviceStatus: d.enabled ? 'Connected' : 'Disconnected',
        })
      )
    },

    updateDevice(data) {
      if (data.type === 'newDevice') {
        console.log(data)
        this.deviceItems.unshift({
          ID: data.device.ID,
          androidId: data.device.androidId,
          name: `${data.device.model} [${data.device.ID}]`,
          deviceModel: data.device.model,
          androidVersion: data.device.androidVersion,
          appVersion: data.device.appVersion,
          totalMessage: 0,
          deviceStatus: data.device.enabled ? 'Connected' : 'Disconnected',
        })
      } else {
        this.updateDeviceStatus(data)
      }
      this.$refs.deviceAdd.dialog = false
    },
    updateDeviceStatus(data) {
      console.log(data)
      const index = this.deviceItems.findIndex(
        (d) => d.androidId === data.androidId
      )
      console.log(index)
      if (index !== -1) {
        const status = data.type === 'signIn' ? 'Connected' : 'Disconnected'
        this.deviceItems[index].deviceStatus = status
      }
    },
    async updatePrimaryDevice() {
      // console.log(this.selectPrimaryDevice)
      try {
        await this.$axios.$put('/user/' + this.user.id, {
          primaryDeviceID: this.selectPrimaryDevice,
        })
        this.$toast.success('แก้ไขอุปกรณ์เริ่มต้นสำเร็จ')
      } catch (e) {
        console.error(e.response.data)
      }
    },
    deleteDevice() {
      console.log(this.selectDevice)
    },
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
.devices {
  color: #3d9ab1f6;
  text-decoration: none;
}
.devices:hover {
  color: #7fc9dbf6;
  text-decoration: none;
}
.v-chip.Connected {
  background: #00b646;
}
.v-chip.Disconnected {
  background: #b60000;
}
.search {
  height: 40px;
}
.btnClose {
  border: 1px #7e7e7e solid;
}
</style>
