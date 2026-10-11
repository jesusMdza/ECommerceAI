import 'dotenv/config'
import express from 'express'

const app = express()
const port = Number(process.env.PORT ?? 3000)

app.get('/', (_request, response) => {
  response.type('text/plain').send('Welcome to the aicommerce api.')
})

app.listen(port, () => {
  console.log(`aicommerce API listening on port ${port}`)
})
