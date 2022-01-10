<template>
  <div>
    <MessagesSearchMessages />
  </div>
</template>

<script>
export default {
  name: 'SearchMessages',
  middleware: 'signInIsRequired',
  created() {},
}
</script>
