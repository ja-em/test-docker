<template>
  <div>
    <ProfileChangePassword />
    <ProfileSettings />
  </div>
</template>

<script>
export default {
  name: 'ProFile',
  middleware: 'signInIsRequired',
  created() {},
}
</script>
