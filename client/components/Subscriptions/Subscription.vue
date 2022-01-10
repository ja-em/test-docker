<template>
  <div>
    <v-card class="mx-auto mb-5 card" max-width="" outlined>
      <v-card-text>
        <v-row>
          <v-col md="9">
            <p class="text-h6">Subscriptions</p>
          </v-col>

          <v-col md="3" class="d-flex justify-end">
            <v-btn depressed color="primary" class="text-capitalize">
              <v-icon left>mdi-plus-thick</v-icon>
              Create Subscription
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="my-2">
          <v-col md="9">
            <span>Show</span>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  style="border: 1px"
                  class="mx-1 text-lowercase button"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>10 </span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>10</v-list-item>
                <v-list-item>25</v-list-item>
                <v-list-item>50</v-list-item>
                <v-list-item>100</v-list-item>
              </v-list>
            </v-menu>
            <span>entries</span>
          </v-col>

          <v-col md="1"> <p class="text-right">Search:</p> </v-col>
          <v-col md="2">
            <v-text-field outlined class="search" dense></v-text-field>
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col md="1">
            <p class="font-weight-black">User</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">ID</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Plan</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Subscribed Date</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Renew Date</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Cycles Completed</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Renews until</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Payment Method</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Status</p>
          </v-col>
        </v-row>

        <v-row
          v-for="subscription in dataSubsciption"
          :key="subscription.id"
          class="ma-0 text-center"
          style="height: 50px"
        >
          <v-col md="1">
            {{ subscription.user }}
          </v-col>
          <v-col md="1">
            {{ subscription.id }}
          </v-col>
          <v-col md="1">
            {{ subscription.plan }}
          </v-col>
          <v-col md="2">
            {{ subscription.subDate }}
          </v-col>
          <v-col md="1">
            {{ subscription.renewDate }}
          </v-col>
          <v-col md="2">
            {{ subscription.cyclesCompleted }}
          </v-col>
          <v-col md="1">
            {{ subscription.renewUntil }}
          </v-col>
          <v-col md="2">
            {{ subscription.paymentMethod }}
          </v-col>

          <v-col md="1">
            <v-chip small :class="`${subscription.status} white--text caption`">
              {{ subscription.status }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionComponent',
  data() {
    return {
      dataSubsciption: [
        {
          user: 'thipnapa1',
          id: '1234',
          plan: 'aaa',
          subDate: '05/01/2565',
          renewDate: '05/01/2565',
          cyclesCompleted: 'aaa',
          renewUntil: '05/01/2566',
          paymentMethod: 'aaa',
          status: 'Beginner',
        },
        {
          user: 'thipnapa2',
          id: '1234',
          plan: 'aaa',
          subDate: '05/01/2565',
          renewDate: '05/01/2565',
          cyclesCompleted: 'aaa',
          renewUntil: '05/01/2566',
          paymentMethod: 'aaa',
          status: 'Bronze',
        },
        {
          user: 'thipnapa3',
          id: '1234',
          plan: 'aaa',
          subDate: '05/01/2565',
          renewDate: '05/01/2565',
          cyclesCompleted: 'aaa',
          renewUntil: '05/01/2566',
          paymentMethod: 'aaa',
          status: 'Silver',
        },
        {
          user: 'thipnapa4',
          id: '1234',
          plan: 'aaa',
          subDate: '05/01/2565',
          renewDate: '05/01/2565',
          cyclesCompleted: 'aaa',
          renewUntil: '05/01/2566',
          paymentMethod: 'aaa',
          status: 'Gold',
        },
        {
          user: 'thipnapa5',
          id: '1234',
          plan: 'aaa',
          subDate: '05/01/2565',
          renewDate: '05/01/2565',
          cyclesCompleted: 'aaa',
          renewUntil: '05/01/2566',
          paymentMethod: 'aaa',
          status: 'Platinum',
        },
        {
          user: 'thipnapa6',
          id: '1234',
          plan: 'aaa',
          subDate: '05/01/2565',
          renewDate: '05/01/2565',
          cyclesCompleted: 'aaa',
          renewUntil: '05/01/2566',
          paymentMethod: 'aaa',
          status: 'Diamond',
        },
        {
          user: 'thipnapa7',
          id: '1234',
          plan: 'aaa',
          subDate: '05/01/2565',
          renewDate: '05/01/2565',
          cyclesCompleted: 'aaa',
          renewUntil: '05/01/2566',
          paymentMethod: 'aaa',
          status: 'Trial',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  border-top: 4px solid #1592b1f6;
}
.button {
  width: 100px;
}
.search {
  height: 40px;
}
.v-chip {
  min-width: 70px;
  justify-content: center;
}
.v-chip.Beginner {
  background: #00b646;
}
.v-chip.Bronze {
  background: #ff9100;
}
.v-chip.Silver {
  background: #acabab;
}
.v-chip.Gold {
  background: #daa520;
}
.v-chip.Platinum {
  background: #e57373;
}
.v-chip.Diamond {
  background: #5c6bc0;
}
.v-chip.Trial {
  background: #64b5f6;
}
</style>
