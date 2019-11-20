var express = require('express'),
app = express(),
    cors=require('cors'),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
product = require('./api/models/ProductModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/product'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/ProductRoutes'); //importing route

// app.use(morgan('dev'));
app.use('/uploads/product', express.static('uploads/product'));
//app.use((req,res,next)=>{
  //  res.header("Access-Control-Allow-Origin","*");
    //res.header(         "Access-Control-Allow-Headers",         "Origin,X-Requested-With, Content-Type, Accept, Authorization"     );
    //if(req.method==='OPTIONS'){      res.header('Access-Control-Allow-Methods','PUT,POST ,PATCH,DELETE, GET');        } })

 

routes(app); //register the route


app.listen(port);

console.log('RESTful API server started on: ' + port);


 


 
  
     



