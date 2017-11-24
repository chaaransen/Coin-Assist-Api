const express = require('express')
const app = express()

const apiPayload = {
  "exchange": {
    "koinex": "https://koinex.in/api/ticker",
    "zebpay": "https://www.zebapi.com/api/v1/market/ticker/btc/inr"
  },
  "global": {
    "coindesk": {
      "api": {
        "USD": "https://api.coindesk.com/v1/bpi/currentprice.json",
        "INR": "https://api.coindesk.com/v1/bpi/currentprice/inr.json"
      }
    },
    "coinmarketcap": {
      "api": {
        "USD": "https://api.coinmarketcap.com/v1/ticker/?limit=6",
        "INR": "https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=6"
      },
      "coin": {
        "bitcoin": "https://api.coinmarketcap.com/v1/ticker/bitcoin",
        "ether": "https://api.coinmarketcap.com/v1/ticker/ethereum",
        "ripple": "https://api.coinmarketcap.com/v1/ticker/ripple",
        "btc-cash": "https://api.coinmarketcap.com/v1/ticker/bitcoin-cash",
        "litecoin": "https://api.coinmarketcap.com/v1/ticker/litecoin"
      }
    }
  },
  "version": "1.0.0"
}

app.get('/apis', (req, res) => res.send(apiPayload))
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log("listening to Port", app.get("port"));
});