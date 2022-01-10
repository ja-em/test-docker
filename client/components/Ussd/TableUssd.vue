<template>
  <v-card class="mx-auto mt-5" max-width="1400" outlined>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="ma-2">
        <v-col sm="6" md="6">
          <v-select
            v-model="selectUser"
            :items="itemsUser"
            label="Select"
            data-vv-name="select"
            required
            outlined
            dense
            prepend-inner-icon="mdi-account"
            @change="filterUssdByUser"
          ></v-select>
        </v-col>
        <v-col sm="6" md="6" align="end">
          <v-btn
            :disabled="selectedUssd.length === 0"
            :loading="resendBtnLoading"
            depressed
            color="primary"
            @click="resendUssd"
          >
            <v-icon small> mdi-send-outline </v-icon>
            Resend
          </v-btn>
          <v-btn
            :disabled="selectedUssd.length === 0"
            :loading="deleteBtnLoading"
            depressed
            color="red"
            @click="deleteUssd"
          >
            <v-icon small> mdi-close-thick </v-icon>
            Remove
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <!-- <v-divider class="mt-n5"></v-divider> -->

    <v-data-table
      v-model="selectedUssd"
      show-select
      :headers="headers"
      :items="tableItems"
      :search="search"
      item-key="ID"
      hide-default-footer
    >
      <template #top="{ pagination, options, updateOptions }">
        <v-divider class="mt-n5"></v-divider>
        <v-row>
          <v-col>
            <v-text-field
              v-model="search"
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
      <template #[`item.userID`]="{ item }">
        <v-chip color="green" dark>
          {{ findEmailByUserId(item.userID) }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    ussds: {
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
      selectUser: 'all',
      headers: [
        { text: 'Request', value: 'req' },
        { text: 'Response', value: 'res' },
        { text: 'Sent At', value: 'sentAt' },
        { text: 'Response At', value: 'resAt' },
        { text: 'Device', value: 'device' },
        { text: 'SIM', value: 'sim' },
      ],
      tableItems: [],
      selectedUssd: [],
      valid: true,

      search: '',
      resendBtnLoading: false,
      deleteBtnLoading: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    itemsUser() {
      // console.log(this.user)
      let items
      if (this.user.isAdmin === 1) {
        items = this.users.map((u) => {
          const obj = { text: `${u.name} ( ${u.email} )`, value: u.id }
          return obj
        })
        items.unshift({ text: 'All Users', value: 'all' })
      } else {
        items = this.users.map((u) => {
          const obj = { text: `${u.name} ( ${u.email} )`, value: u.id }
          return obj
        })
      }

      return items
    },
  },
  created() {
    this.$nuxtSocket({ channel: '/' }).on('updateUssd', (data) =>
      this.updateUssd(data)
    )
    // console.log(this.ussds)
    // console.log(this.users)
    this.selectUser = this.user.id
    this.initialTableItems(this.ussds)
    // this.initialDataForItemsUser()
  },
  methods: {
    initialTableItems(ussds) {
      this.tableItems = []
      if (ussds.length > 0) {
        const ussdReverse = ussds.reverse()
        ussdReverse.map((u) =>
          this.tableItems.push({
            ID: u.ID,
            deviceID: u.deviceID?.id,
            userID: u.userID.id,
            simSlot: u.simSlot,
            req: u.request,
            res: u.response,
            sentAt: u.sendDate,
            resAt: u.responseDate,
            device: u.deviceID?.model,
            sim: u.deviceID?.sims[u.simSlot].carrier,
          })
        )
      }
    },
    updateUssd(data) {
      console.log(data)
      const index = this.tableItems.findIndex((t) => t.ID === data.ID)
      if (index !== -1) {
        this.tableItems[index].res = data.response
        this.tableItems[index].resAt = data.responseDate
      }
      // console.log(index)
    },
    async deleteUssd() {
      // console.log(this.selectedUssd)
      try {
        this.deleteBtnLoading = true
        const idForDelete = this.selectedUssd.map((s) => s.ID)
        // console.log(idForDelete)
        const res = await this.$axios.$post('/ussd/delete', {
          selectedUssd: idForDelete,
        })
        this.initialTableItems(res.data)
        this.deleteBtnLoading = false
        this.$toast.success(`ลบ USSD สำเร็จ`)
        this.selectedUssd = []
      } catch (e) {
        console.error(e)
        this.deleteBtnLoading = false
      }
    },
    unshiftTableItems(data) {
      this.tableItems.unshift({
        ID: data.ID,
        deviceID: data.deviceID.id,
        userID: data.userID.id,
        simSlot: data.simSlot,
        req: data.request,
        res: data.response,
        sentAt: data.sendDate,
        resAt: data.responseDate,
        device: data.deviceID.model,
        sim: data.deviceID.sims[data.simSlot].carrier,
      })
    },
    ussdRequest(obj) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise((resolve, reject) => {
        this.$axios
          .$post('/ussd/send-request', obj)
          .then((res) => {
            setTimeout(() => resolve(res.data), 1500)
          })
          .catch((e) => {
            console.error('in promise >>' + e.response.data)
            reject(e.response.data)
          })
      })
    },

    async resendUssd() {
      this.resendBtnLoading = true
      // console.log(this.selectedUssd)
      if (this.selectedUssd.length > 0) {
        for (let i = 0; i < this.selectedUssd.length; i++) {
          try {
            const obj = {
              request: this.selectedUssd[i].req,
              userID: this.user.id,
              deviceID: this.selectedUssd[i].deviceID,
              simSlot: this.selectedUssd[i].simSlot,
            }

            // console.log(obj)
            if (this.selectedUssd[i].deviceID) {
              const ussd = await this.ussdRequest(obj)
              this.unshiftTableItems(ussd)
              this.$toast.success(`ส่ง ${this.selectedUssd[i].req} สำเร็จ`)
            } else {
              this.$toast.error(`device not found`)
            }
          } catch (e) {
            console.error(e)
          }
        }
      }
      this.selectedUssd = []
      this.resendBtnLoading = false
    },
    filterUssdByUser() {
      // console.log(this.selectUser)
      if (this.selectUser === 'all') {
        this.headers.push({
          text: 'User',
          value: 'userID',
        })
      } else {
        this.headers = this.headers.filter((h) => h.value !== 'userID')
      }
    },
    findEmailByUserId(id) {
      // console.log(id)

      const user = this.users.find((u) => u.id === id)
      if (!user) {
        return 'not found'
      }
      return user.email
    },
  },
}
</script>

<style></style>
