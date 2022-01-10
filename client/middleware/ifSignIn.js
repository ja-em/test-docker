export default (context) => {
  const { loggedIn } = context.store.state.auth

  if (loggedIn) {
    // eslint-disable-next-line unicorn/error-message
    context.app.router.push('/dashboard.php')
  }
}
