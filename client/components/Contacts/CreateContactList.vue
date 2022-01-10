<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <p class="text-h6">Create Contacts List</p>
      <p class="text-subtitle-2 font-weight-bold my-1">
        Name of the Contacts List
      </p>

      <v-text-field
        outlined
        dense
        prepend-inner-icon="fas fa-address-card"
        placeholder="Name of the Contacts List"
      >
      </v-text-field>

      <v-btn
        class="text-capitalize white--text font-weight-regular my-3"
        color="#3d9ab1f6"
      >
        <v-icon>mdi-content-save-outline</v-icon>
        Create
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CreateContactListComponent',
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
</style>
