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
    const response = resp.data
    const items = []
    for (const position in response.results) {
      const prod = response.results[position]
      items.push({
        "id": prod.id,
        "title": prod.title,
        "price": {
          "currency": prod.currency_id,
          "amount": prod.price,
          "decimals": 0
        },
        "picture": prod.thumbnail,
        "condition": prod.condition,
        "free_shipping": prod.shipping.free_shipping,
        "address": prod.address,
        "country_id": prod.seller_address.country.id,
        "category_id": prod.category_id
      })
    }
    let categories = response.available_filters.filter(function (nickname) { return nickname.id == 'category'; })
    if(categories.length === 0){
      categories = response.filters.filter(function (nickname) { return nickname.id == 'category'; });
    }
    let category = {}
    for(const position in categories){
      category = categories[position].values
    }
    const result = {
      author: {
        name: "Daniela",
        lastname: "Olea"
      },
      categories: category,
      items: items
    }
    res.send(result); //Line 10
  });
});


app.get('/details', async (req, res, next) => { //Line 9
  let item = {}
  let description = ""
  await axios.get(`https://api.mercadolibre.com/items/${req.query.id}/description`).then(resp => {
    description = resp.data.plain_text
  });
  await axios.get(`https://api.mercadolibre.com/items/${req.query.id}`).then(resp => {
    const prod = resp.data
    item = {
      "id": prod.id,
      "title": prod.title,
      "price": {
        "currency": prod.currency_id,
        "amount": prod.price,
        "decimals": 0
      },
      "picture": prod.thumbnail,
      "condition": prod.condition,
      "free_shipping": prod.shipping.free_shipping,
      "sold_quantity": prod.sold_quantity,
      "description": description,
      "country_id": prod.seller_address.country.id,
      "currency": prod.currency_id
    }
  });

  const result = {
    author: {
      name: "Daniela",
      lastname: "Olea"
    },
    item: item
  }

  res.send(result); //Line 10
});