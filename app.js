const express = require('express')
const app = express()

const apiPayload = {
	"exchange": {
		"koinex": {
			"api": "https://koinex.in/api/ticker",
			"fees": {
				"buy": "0.0025",
				"sell": "0.002"
			},
			"referral": "https://koinex.in/?ref=a2fae6",
			"coinList": ["btc", "ltc", "xrp", "bch", "eth", "omg", "req", "zrx", "gnt", "bat", "ae"]
		},
		"zebpay": {
			"api": "https://www.zebapi.com/api/v1/market/ticker-new/",
			"fees": {
				"buy": "0.0059",
				"sell": "0.0059",
			},
			"referral": "http://link.zebpay.com/ref/REF97131420",
			"coinList": ["btc", "ltc", "xrp", "bch", "eth"]
		}
	},
	"global": {
		"coindesk": {
			"api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json"
		},
		"coinmarketcap": {
			"api": "https://api.coinmarketcap.com/v1/ticker/COINNAME/?convert=INR",
		}
	},
	"version": "1.0.0"
}
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	'extended': 'true'
}));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.get('/apis', (req, res) => res.send(apiPayload))
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
	console.log("listening to Port", app.get("port"));
});