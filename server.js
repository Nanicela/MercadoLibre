const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 3001; //Line 3
const cors = require('cors');
const axios = require("axios");
const corsOptions = {
  origin: '*',
  credentials: false
}
app.use(cors(corsOptions));


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


// create a GET route
app.get('/express_backend', (req, res, next) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});


app.get('/search', async (req, res, next) => { //Line 9

  await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${req.query.keyword}&limit=4`).then(resp => {

    console.log(resp.data);

    res.send({ success: resp.data }); //Line 10

  });
});