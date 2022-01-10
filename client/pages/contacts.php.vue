<template>
  <div>
    <ContactsCreateContactList />
    <ContactsContactList />
    <ContactsSendMessage />
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  middleware: 'signInIsRequired',
}
</script>
