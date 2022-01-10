<template>
  <FormsLogin />
</template>

<script>
export default {
  name: 'LogIn',
  layout: 'login',
  middleware: 'ifSignIn',
}
</script>

<style></style>
