<template>
  <div>
    <Sender />
  </div>
</template>

<script>
export default {
  name: 'SenderMessage',
  middleware: 'signInIsRequired',
  created() {},
}
</script>
