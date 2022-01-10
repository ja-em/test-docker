<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      :right="$vuetify.rtl"
      app
      mini-variant-width="80"
      style="background-color: #222d32"
    >
      <HeaderDrawerHeader />
      <div class="px-2">
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            class="white--text"
            @click="$emit('drewertitle', item.title)"
          >
            <v-list-item-action>
              <v-icon small color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="$t(item.title)" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <template #append>
        <HeaderAppbarsEnd :mini-variant="mini" />
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'DefaultDrawer',
  data() {
    return {
      props: {
        invertaccount: {
          type: Boolean,
          default: false,
        },
      },
      items: [
        {
          icon: 'fas fa-tachometer-alt ',
          title: 'Drawer.dashboard',
          to: '/dashboard.php',
        },
        {
          icon: 'fas fa-user',
          title: 'โปรไฟล์',
          to: '/profile.php',
        },
        {
          icon: 'fab fa-android',
          title: 'อุปกรณ์',
          to: '/device.php',
        },
        {
          icon: 'fas fa-sticky-note',
          title: 'เทมเพลต',
          to: '/templates.php',
        },
        {
          icon: 'fas fa-address-card',
          title: 'รายชื่อผู้ติดต่อ',
          to: '/contacts.php',
        },
        {
          icon: 'fas fa-envelope',
          title: 'ข้อความ ',
          to: '/messages.php',
        },
        {
          icon: 'fas fa-paper-plane',
          title: 'ส่งข้อความ',
          to: '/sender.php',
        },
        {
          icon: 'fas fa-phone',
          title: 'USSD',
          to: '/ussd.php',
        },
        {
          icon: 'fas fa-envelope',
          title: 'ระบบตอบกลับอัตโนมัติ',
          to: '/auto-responder.php',


        },
        {
          icon: 'fas fa-code',
          title: 'API',
          to: '/8',

        },
        // {
        //   icon: 'fas fa-code',
        //   title: 'API',
        //   to: '/8',
        // },
        {
          icon: 'fas fa-money-bill-alt',
          title: 'สมาชิกแบบมีรายจ่าย',
          to: '/subscriptions.php',
        },
        {
          icon: 'fas fa-table',
          title: 'แพ็คเกจ',
          to: '/plans.php',
        },
        {
          icon: 'fas fa-users',
          title: 'จัดการผู้ใช้',
          to: '/manage-users.php',
        },
        {
          icon: 'fas fa-cog',
          title: 'การตั้งค่า',
          to: '/settings.php',
        },
      ],
    }
  },
  computed: {
    ...sync('app', ['drawer', 'mini']),
  },
}
</script>
