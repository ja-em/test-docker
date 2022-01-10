<template>
  <div>
    <Ussd :devices="devices" @sendUssdRequest="sendUssdRequest" />
    <UssdTableUssd ref="tableUssd" :ussds="ussds" :users="users" />
  </div>
</template>

<script>
export default {
  name: 'UssdS',
  middleware: 'signInIsRequired',
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get('/device')
      const resUssd = await $axios.$get('/ussd')
      const resUser = await $axios.$get('/user')
      // console.log(resUssd.data)
      const devices = res.data
      const ussds = resUssd.data
      const users = resUser.data
      return { devices, ussds, users }
    } catch (e) {
      console.error(e.response.data)
    }
  },
  created() {},
  methods: {
    sendUssdRequest(data) {
      // console.log(data)
      this.$refs.tableUssd.unshiftTableItems(data)
    },
  },
}
</script>
