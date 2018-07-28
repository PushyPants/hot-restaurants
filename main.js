//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//set up express
const app = express();
const PORT = process.env.PORT || 8080;

//set up express to parse data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//empty array to hold customer reservation information
let tables = [
    {
        'customerName' : 'name1',
        'phoneNumber' : 'number1',
        'customerEmail' : 'email1',
        'customerId' : 'id1'
    },
    {
        'customerName' : 'name2',
        'phoneNumber' : 'number2',
        'customerEmail' : 'email2',
        'customerId' : 'id2'
    },
    {
        'customerName' : 'name3',
        'phoneNumber' : 'number3',
        'customerEmail' : 'email3',
        'customerId' : 'id3'
    }
];

let waitList = [
    {
        'customerName' : 'name4',
        'phoneNumber' : 'number4',
        'customerEmail' : 'email4',
        'customerId' : 'id4'
    },
    {
        'customerName' : 'name5',
        'phoneNumber' : 'number5',
        'customerEmail' : 'email5',
        'customerId' : 'id5'
    },
    {
        'customerName' : 'name6',
        'phoneNumber' : 'number6',
        'customerEmail' : 'email6',
        'customerId' : 'id6'
    }
];


//set http routes to link files
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, 'reserve.html'));
});
app.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname, 'tables.html'));
});



//api routes
app.get('/api/tables', function(req, res){
    return res.json(tables);
});

app.get('/api/waitlist', function(req, res){
    return res.json(waitList);
});

app.post('/api/tables', function(req,res){
    let newTable = req.body;

    if (tables.length < 5) {
        res.json(newTable);
        tables.push(newTable);
    } else {
        waitList.push(newTable)
    };
});






//start server listening
app.listen(PORT, function(){
    console.log('App listening on port' + PORT);
});