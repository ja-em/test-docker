export default (context) => {
  const { loggedIn } = context.store.state.auth

  if (!loggedIn) {
    // eslint-disable-next-line unicorn/error-message
    const error = new Error()
    error.message = 'กรุณาเข้าสู่ระบบ'
    error.statusCode = 401
    throw error
  }
}
