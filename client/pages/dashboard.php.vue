<template>
  <DashboardHome />
</template>

<script>
// import socket from 'socket.io-client'
export default {
  name: 'IndexPage',
  middleware: 'signInIsRequired',
  created() {},
}
</script>
