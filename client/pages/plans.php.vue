<template>
  <div>
    <plans class="mb-3" />
    <PlansDatatables class="mb-3" />
  </div>
</template>

<script>
export default {
  name: 'PlansPages',
  middleware: 'signInIsRequired',
}
</script>

<style></style>
