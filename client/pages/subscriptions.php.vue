<template>
  <div>
    <SubscriptionsSubscription />
    <SubscriptionsPayment />
  </div>
</template>

<script>
export default {
  name: 'SubscriptionsPage',
  middleware: 'signInIsRequired',
}
</script>
