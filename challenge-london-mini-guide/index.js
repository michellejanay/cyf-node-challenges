const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const routes = {
  '/pharmacies': 'returns pharmacies list for stratford',
  '/colleges': 'returns colleges list for stratford',
  '/doctors': 'returns doctors list for stratford',
  '/hospitals': 'returns hospitals list for stratford',
}

app.get('/', (req, res) => {
  res.send(routes)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
