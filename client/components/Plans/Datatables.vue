<template>
  <v-card elevation="24">
    <v-card-title>
      <h3 class="box-title font-weight-light">Plan</h3>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        outlined
        dense
        class="font-weight-light mt-3"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="font-weight-light"
      @planstitle="planstitle"
      @click:row="handleClick"
    >
      <template #[`item.name`]="{ item }">
        <!-- <PlansEditPlan@click="$emit('planstitle', item.name)"/> -->
        <PlansEditPlan :planstitleto="item.name" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'DataTables',
  data() {
    return {
      search: '',
      titleConfirm: '',
      planstitleto: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Max Devices', value: 'Devices' },
        { text: 'Max Contacts', value: 'MaxContacts' },
        { text: 'Creditts', value: 'Creditts' },
        { text: 'Price', value: 'Price' },
        { text: 'Billing Cycle', value: 'Billing' },
        { text: 'Total Cycles', value: 'Total' },
      ],
      desserts: [
        {
          name: 'FrozenYogurt',
          Devices: 159,
          MaxContacts: 6.0,
          Creditts: 24,
          Price: 4.0,
          Billing: '1%',
          Total: '1%',
        },
        {
          name: 'Icecreamsandwich',
          Devices: 159,
          MaxContacts: 6.0,
          Creditts: 24,
          Price: 4.0,
          Billing: '1%',
          Total: '1%',
        },
        {
          name: 'Eclair',
          Devices: 159,
          MaxContacts: 6.0,
          Creditts: 24,
          Price: 4.0,
          Billing: '1%',
          Total: '1%',
        },
      ],
    }
  },
  methods: {
    handleClick(value) {
      // console.log(value)
      this.$emit('openDrawer', value)
    },
    planstitle(name) {
      console.log(name)
      this.planstitleto = name
    },
  },
}
</script>
