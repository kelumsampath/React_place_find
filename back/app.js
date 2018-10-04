const express = require('express');
const app = express();
const port = 9000;
var bodyParser = require('body-parser');
var cors = require('cors');
var Client = require('node-rest-client').Client;
var client = new Client();




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 

app.get('/', (req, res) => 
res.send('Hello World!')
);
app.post('/a', (req, res) =>{ 
console.log(req.body);
res.send(req.body.firstName);
}
);

app.post('/findplace', (req, res) =>{ 
    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+req.body.place+"+top+sights+&key=AIzaSyCNoaffC_C-nbnDTCDd0X1VWF3ixgJv7io", function (data, response) {
    res.json({state:true,place:data})
    });
}
);