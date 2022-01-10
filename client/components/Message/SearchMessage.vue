<template>
  <div>
    <v-card class="mx-auto my-4 pa-4 card" outlined>
      <p class="text-subtitle-1">Search Messages</p>

      <label for="selectUser" class="text-subtitle-2 font-weight-bold my-1"
        >Select User</label
      >
      <label for="selectUser" class="text-subtitle-2 font-weight-bold my-1"
        >Select Device</label
      >
      <label for="selectUser" class="text-subtitle-2 font-weight-bold my-1"
        >Status</label
      >
      <v-row>
        <v-col class="d-flex" cols="12" md="4">
          <v-select
            :items="users"
            placeholder="All Users"
            prepend-icon="fas fa-user"
            dense
            outlined
            filled
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" md="4">
          <v-select
            :items="users"
            placeholder="All Devices"
            prepend-icon="mdi-android"
            dense
            outlined
            filled
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" md="4">
          <v-select
            :items="users"
            placeholder="All"
            prepend-icon="mdi-tag"
            dense
            outlined
            filled
          ></v-select>
        </v-col>
      </v-row>

      <v-btn
        class="text-capitalize white--text font-weight-regular"
        color="#3d9ab1f6"
      >
        <v-icon>mdi-content-save-outline</v-icon>
        Save
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['All Users', 'ruksms(developer@devfong.co.th)'],
    }
  },
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
</style>
