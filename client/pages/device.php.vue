<template>
  <DeviceHome :devices="devices" :users="users" />
</template>

<script>
export default {
  name: 'DevicePage',
  middleware: 'signInIsRequired',
  async asyncData({ $axios }) {
    try {
      const resDevice = await $axios.$get('/device')
      const resUser = await $axios.$get('/user')
      const devices = resDevice.data

      const users = resUser.data
      return { devices, users }
    } catch (e) {
      console.error(e.response.data)
    }
  },
}
</script>
