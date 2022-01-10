<template>
  <div>
    <v-card class="mx-auto mb-5 card" max-width="" outlined>
      <v-card-text>
        <v-row>
          <v-col md="12">
            <p class="text-h6">Payments</p>
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

          <v-col md="1">
            <p class="text-right">Search:</p>
          </v-col>
          <v-col md="2">
            <v-text-field outlined class="search" dense></v-text-field>
          </v-col>
        </v-row>

        <v-row class="ma-0 text-center">
          <v-col md="1">
            <p class="font-weight-black">Payment ID</p>
          </v-col>
          <v-col md="1">
            <p class="font-weight-black">Status</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Amount</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Transaction Fee</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Subscription ID</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Payment Method</p>
          </v-col>
          <v-col md="2">
            <p class="font-weight-black">Date Added</p>
          </v-col>
        </v-row>

        <v-row
          v-for="payment in dataPayment"
          :key="payment.id"
          class="ma-0 text-center"
          style="height: 50px"
        >
          <v-col md="1">
            {{ payment.id }}
          </v-col>
          <v-col md="1">
            <v-chip small :class="`${payment.status} white--text caption`">
              {{ payment.status }}
            </v-chip>
          </v-col>
          <v-col md="2">
            {{ payment.amount }}
          </v-col>
          <v-col md="2">
            {{ payment.transaction }}
          </v-col>
          <v-col md="2">
            {{ payment.subscriptionID }}
          </v-col>
          <v-col md="2">
            {{ payment.paymentMethod }}
          </v-col>
          <v-col md="2">
            {{ payment.dateAdded }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PaymentComponent',
  data() {
    return {
      dataPayment: [
        {
          id: '1234',
          status: 'Beginner',
          amount: '2,549',
          transaction: '50',
          subscriptionID: '1234',
          paymentMethod: 'aaa',
          dateAdded: '05/01/2565',
        },
        {
          id: '1234',
          status: 'Platinum',
          amount: '100,299',
          transaction: '300',
          subscriptionID: '1234',
          paymentMethod: 'aaa',
          dateAdded: '05/01/2565',
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
