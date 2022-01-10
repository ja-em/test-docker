<template>
  <div>
    <div></div>

    <v-container>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" lg="3" md="6" sm="12">
          <v-card height="155" :color="item.color" elevation="8">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5 font-weight-light white--text"
                  v-text="item.value"
                />

                <v-card-subtitle
                  class="text-h6 font-weight-light white--text"
                  v-text="$t(item.title)"
                />
              </div>
              <v-avatar class="ma-3 mt-n3" size="125" tile>
                <ion-icon :name="item.icon"></ion-icon>
              </v-avatar>
            </div>
            <v-card-actions class="modal mt-n3">
              <v-btn text block class="white--text" :to="item.to">
                {{ $t('saasLanding.moreinfo') }}
                <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DashboardHome',
  data: () => ({
    items: [
      {
        value: '6',
        color: '#f39c12',
        icon: 'timer-outline',
        title: 'saasLanding.Pending',
        to: '/messages.php',
      },
      {
        value: '6',
        color: '#0089db',
        icon: 'calendar-clear',
        title: 'saasLanding.Scheduled',
        to: '/messages.php',
      },
      {
        value: '6',
        color: '#00c0ef ',
        icon: 'sync',
        title: 'saasLanding.Queued',
        to: '/messages.php',
      },
      {
        value: '6',
        color: '#00ca6d',
        icon: 'checkmark-done',
        title: 'saasLanding.Sent',
        to: '/messages.php',
      },
      {
        value: '6',
        color: '#dd4b39 ',
        icon: 'remove-circle-outline',
        title: 'saasLanding.Failed',
        to: '/messages.php',
      },
      {
        value: '6',
        color: '#0073b7 ',
        icon: 'mail-unread-outline',
        title: 'saasLanding.Received',
        to: '/messages.php',
      },
      {
        value: '6',
        color: '#f39c12 ',
        icon: 'timer',
        title: 'saasLanding.PendingUSSDRequests',
        to: '/ussd.php',
      },
      {
        value: '6',
        color: '#00a65a ',
        icon: 'checkmark-done',
        title: 'saasLanding.PenSentUSSDRequestsding',
        to: '/ussd.php',
      },
      {
        value: '6',
        color: '#9491c4 ',
        icon: 'card-outline',
        title: 'saasLanding.AvailableCredits',
        to: '/ussd.php',
      },
      {
        value: '6',
        color: '#D81B60 ',
        icon: 'newspaper-outline',
        title: 'saasLanding.ActiveSubscriptions',
        to: '/ussd.php',
      },
      {
        value: '6',
        color: '#111  ',
        icon: 'cash-outline',
        title: 'saasLanding.Earnings',
        to: '/ussd.php',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
@import './dashboard-style.scss';

ion-icon {
  font-size: 68px;
}
ion-icon {
  color: rgb(255, 255, 255);
}
ion-icon:hover {
  color: rgb(186, 198, 209);
  transform: scale(1.3);
  transform-origin: 50% 50%;
  -webkit-font-smoothing: antialiased;
}
</style>
