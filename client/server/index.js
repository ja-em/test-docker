import express from 'express'
import proxy from 'express-http-proxy'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.get('/', (req, res) => res.send('hey mama'))
app.use(proxy('http://192.168.1.37:4000'))

export default {
  path: '/services',
  handler: app,
}
