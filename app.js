const express = require('express')
const app = express()

const apiPayload = {
	"exchange": {
		"Koinex": {
			"api": "https://koinex.in/api/ticker",
			"fees": {
				"buy": "0.0025",
				"sell": "0.002"
			},
			"referral": "https://koinex.in/?ref=a2fae6",
			"coinList": ["btc", "ltc", "xrp", "bch", "eth", "omg", "req", "zrx", "gnt", "bat", "ae", "trx", "xlm", "neo", "gas", "aion", "ncash", "xrb", "eos", "ont", "zil", "iost", "zco", "poly", "elf", "cmt", "act", "snt", "rep", "qkc", "xzc"]
		},
		"Zebpay": {
			"api": "https://www.zebapi.com/api/v1/market/ticker-new/",
			"fees": {
				"buy": "0.0059",
				"sell": "0.0059",
			},
			"referral": "http://link.zebpay.com/ref/REF97131420",
			"coinList": ["btc", "ltc", "xrp", "bch", "eth", "eos", "omg", "trx", "gnt", "zrx", "rep", "bat", "ven", "ae", "knc", "iost", "zil", "cmt", "ncash"]
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
	"coins": {
		"BTC": {
			"name": "Bitcoin",
			"imageUrl": "https://i.imgur.com/PRysm7E.png"
		},
		"XRP": {
			"name": "Ripple",
			"imageUrl": "https://i.imgur.com/jzCyWct.png"
		},
		"ETH": {
			"name": "Ethereum",
			"imageUrl": "https://i.imgur.com/gmGSzVJ.png"
		},
		"LTC": {
			"name": "Litecoin",
			"imageUrl": "https://i.imgur.com/Ov9h1ZT.png"
		},
		"BCH": {
			"name": "Bitcoin Cash",
			"imageUrl": "https://i.imgur.com/gUtu5Eo.png"
		},
		"OMG": {
			"name": "OmiseGo",
			"imageUrl": "https://i.imgur.com/p0Phr0Y.png"
		},
		"REQ": {
			"name": "Request Network",
			"imageUrl": "https://i.imgur.com/6909idR.png"
		},
		"ZRX": {
			"name": "0x",
			"imageUrl": "https://i.imgur.com/ESIyWUE.png"
		},
		"GNT": {
			"name": "Golem",
			"imageUrl": "https://i.imgur.com/5ryFDz5.png"
		},
		"BAT": {
			"name": "Basic Attention Token",
			"imageUrl": "https://i.imgur.com/c5ADvNs.png"
		},
		"AE": {
			"name": "Aeternity",
			"imageUrl": "https://i.imgur.com/Hn4v2q1.png"
		},
		"TRX": {
			"name": "Tron",
			"imageUrl": "https://i.imgur.com/A39UF1i.png"
		},
		"MIOTA": {
			"name": "IOTA",
			"imageUrl": "https://i.imgur.com/u5slvez.png"
		},
		"EOS": {
			"name": "Eos",
			"imageUrl": "https://i.imgur.com/8MPSsON.png"
		},
		"KNC": {
			"name": "Kyber Network",
			"imageUrl": "https://i.imgur.com/hn2onbS.png"
		},
		"XRB": {
			"name": "Nano",
			"imageUrl": "https://i.imgur.com/tp5wt6g.png"
		},
		"XLM": {
			"name": "Stellar",
			"imageUrl": "https://i.imgur.com/7sbDVmq.png"
		},
		"GAS": {
			"name": "Gas",
			"imageUrl": "https://i.imgur.com/KuKbCfk.png"
		},
		"NEO": {
			"name": "Neo",
			"imageUrl": "https://i.imgur.com/KuKbCfk.png"
		},
		"AION": {
			"name": "Aion",
			"imageUrl": "https://i.imgur.com/7BPKN5h.png"
		},
		"NCASH": {
			"name": "Nucleus Vision",
			"imageUrl": "https://i.imgur.com/BNMkOVY.jpg"
		},
		"ONT": {
			"name": "Ontology",
			"imageUrl": "https://i.imgur.com/sAmdk8w.png"
		},
		"ZIL": {
			"name": "Zilliqa",
			"imageUrl": "https://i.imgur.com/wMERZVq.png"
		},
		"IOST": {
			"name": "IosToken",
			"imageUrl": "https://i.imgur.com/39N3aWl.png"
		},
		"ZCO": {
			"name": "Zebi",
			"imageUrl": "https://i.imgur.com/fRgfUci.png"
		},
		"POLY": {
			"name": "Polymath network",
			"imageUrl": "https://i.imgur.com/65T4QnL.png"
		},
		"ELF": {
			"name": "Aelf",
			"imageUrl": "https://i.imgur.com/1ZLtWEM.png"
		},
		"REP": {
			"name": "Augur",
			"imageUrl": "https://i.imgur.com/l5OcnMf.png"
		},
		"VEN": {
			"name": "Vechain",
			"imageUrl": "https://i.imgur.com/6Iq92BR.png"
		},
		"CMT": {
			"name": "Cybermiles",
			"imageUrl": "https://i.imgur.com/57CI8rz.png"
		},
		"ACT": {
			"name": "Achain",
			"imageUrl": "https://i.imgur.com/fWQFCwz.png"
		},
		"SNT": {
			"name": "Status",
			"imageUrl": "https://i.imgur.com/CNX3XOT.png"
		},
		"QKC": {
			"name": "QuarkChain",
			"imageUrl": "https://i.imgur.com/Mf6rQ9A.png"
		},
		"XZC": {
			"name": "ZCoin",
			"imageUrl": "https://i.imgur.com/73un4OT.png"
		}

		// ,
		// "": {
		// 	"name": "",
		// 	"imageUrl": ""
		// }
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