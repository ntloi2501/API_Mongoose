const express = require ('express')
const cors = require ('cors')
const app = express()
const mongoose = require ('mongoose')
var bodyParser = require('body-parser')
const morgan = require ('morgan')
const dotenv = require ('dotenv') 

dotenv.config()
//connert db
const dbURI =(process.env.MONGODB_URL)
// Sử dụng phương thức connect mới với Promise
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Code của bạn ở đây
  })
  .catch(err => {
    console.error('Erro to MongoDB:', err);
  });

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

// app.get('/api', (req, res) => {
//     res.status(200).json('Welcome to NodeJS')
// })



app.listen(5000, () => {
    console.log("server is running on ...")
})