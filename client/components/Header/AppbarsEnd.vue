<template>
  <div>
    <v-divider class="mx-3 mb-2" />
    <div class="pa-4 mx-auto text-center">
      <v-btn block class="text-none" color="secondary" href>
        <v-icon>mdi-download</v-icon>
        <span v-if="!miniVariant">Download App</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppbarsEnd',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
