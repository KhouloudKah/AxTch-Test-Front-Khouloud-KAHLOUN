var express = require('express'),
app = express(),
    cors=require('cors'),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
product = require('./api/models/ProductModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/product'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/ProductRoutes');

// app.use(morgan('dev'));
app.use('/uploads/product', express.static('uploads/product'));




routes(app);


app.listen(port);



 


 
  
     



