<template>
  <div>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      :toolbar-attributes="{ color: '#d7e0e2' }"
      class="text--white"
    >
    </tiptap-vuetify>
  </div>
</template>

<script>
// import the component and the necessary extensions

import {
  TiptapVuetify,
  Heading,
  Image,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  CodeBlock,
} from 'tiptap-vuetify'
// import TextColor from '@/plugins/textColor'

export default {
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      // TextColor,
      History,
      Blockquote,
      Link,
      Underline,
      Image,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3, 4, 5],
          },
        },
      ],

      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
      CodeBlock,
    ],

    // starting editor's content
    content: `
     สวัสดี %user%,

ยินดีต้อนรับสู่the %app% แผงธุรการ.

การลงทะเบียนของคุณได้รับการยืนยันแล้วและตอนนี้คุณสามารถเข้าถึง %app% แผงธุรการ.

เข้าสู่ระบบของคุณ:
Server: %server%
Email: %userEmail%
Password: %password%
คุณต้องดาวน์โหลดแอป Android จาก here และป้อนข้อมูลข้างต้นเพื่อเริ่มต้นหากคุณไม่ทราบวิธีการ Sideload Apps จากนั้นคุณสามารถติดตาม คำแนะนำเกี่ยวกับแอปที่ใช้งาน.

คุณสามารถลงชื่อเข้าใช้โดยใช้ข้อมูลรับรองที่ระบุไว้ข้างต้นหรือคุณสามารถใช้ปุ่ม "ลงชื่อเข้าใช้การใช้ QR" และสแกนรหัส QR ในไฟล์แนบเพื่อลงชื่อเข้าใช้โดยอัตโนมัติ.

คุณมี %credits%. คุณสามารถส่งข้อความโดยใช้ %devices%. คุณสามารถเก็บ %contacts%. เครดิตของคุณใช้ได้จนกว่า %expiryDate%. หากคุณต้องการเปลี่ยนข้อ จำกัด ใด ๆ เหล่านี้โปรดติดต่อ %adminEmail%.

ความนับถือ,
%admin%
    `,
  }),
  created() {
    this.$vuetify.rtl = false
  },
}
</script>
