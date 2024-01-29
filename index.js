const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios');

const app = express()

const CorsOptions = {
    origin: '*',
    credential: true,
    optionSuccessStatus: 200,
}

app.use(cors(CorsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.send("Home")
})

function triggerWebsite() {
    const websiteURL = 'https://jrytdl.netlify.app/';
    axios.get(websiteURL)
      .then(response => {
        console.log('Website triggered successfully.');
      })
      .catch(error => {
        console.error('Error triggering website. Error:', error.message);
      });
  }
setInterval(triggerWebsite, 600000);


const port = 4000
const server = app.listen(port, () => {
    console.log(`Backend Run on Port: ${port}`)
})






