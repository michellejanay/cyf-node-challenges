const express = require('express')
const cors = require('cors')
const stratford = require('./data/Stratford.json')
const heathrow = require('./data/Heathrow.json')
const harrow = require('./data/Harrow.json')
const app = express()

const cities = [stratford, heathrow, harrow]

app.use(express.json())
app.use(cors())

const routes = {
  '/:city/pharmacies': 'returns pharmacies list for stratford',
  '/:city/colleges': 'returns colleges list for stratford',
  '/:city/doctors': 'returns doctors list for stratford',
  '/:city/hospitals': 'returns hospitals list for stratford',
}

app.get('/', (req, res) => {
  res.send(routes)
})

app.get('/pharmacies', (req, res) => {
  res.send(stratford.pharmacies)
})

app.get('/colleges', (req, res) => {
  res.send(stratford.colleges)
})

app.get('/doctors', (req, res) => {
  res.send(stratford.doctors)
})

app.get('/hospitals', (req, res) => {
  res.send(stratford.hospitals)
})

// if city !exist send error
// else return the information

// app.get(':city/pharmacies', (req, res) => {
//   //const selectedCity = req.params.city
//   //check if it's included cities
//   const city = req.params.city

//   if (!cities.includes(city)) {
//     res.status(401).send('City not found')
//   }

//   const filteredCity = cities.filter((ct) => ct === city)

//   res.send(filteredCity)
// })

// app.get(':city/colleges', (req, res) => {
//   res.send(stratford.colleges)
// })

// app.get(':city/doctors', (req, res) => {
//   res.send(stratford.doctors)
// })

// app.get(':city/hospitals', (req, res) => {
//   res.send(stratford.hospitals)
// })

// app.get(':city/:category', () => {
//   // //param for city
//   // //param for catagory
//   // const city = req.params.city
//   // const catagory = req.params.city
// })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
