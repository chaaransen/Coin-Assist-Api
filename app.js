const express = require('express')
const app = express()

const apiPayload = {
	"exchange": {
		"koinex": "https://koinex.in/api/ticker",
		"zebpay": "https://www.zebapi.com/api/v1/market/ticker/btc/inr"
	},
	"global": {
		"coindesk": {
			"api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json"
		},
		"coinmarketcap": {
			"api": "https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=",
			"coin_limit": "8",
			"coin": {
				"BTC": "https://api.coinmarketcap.com/v1/ticker/bitcoin",
				"ETH": "https://api.coinmarketcap.com/v1/ticker/ethereum",
				"XPR": "https://api.coinmarketcap.com/v1/ticker/ripple",
				"BCH": "https://api.coinmarketcap.com/v1/ticker/bitcoin-cash",
				"LTC": "https://api.coinmarketcap.com/v1/ticker/litecoin"
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