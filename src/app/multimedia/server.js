var path = require('path');
var fs = require('fs');
var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var DIR = './uploads';
 
var storage = multer.diskStorage({
    destination: (_req, file) => {
      cb(null, DIR);
    },
    filename: (_req, file) => {
      (null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
var upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(function (_req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/sisEventosWs/getMultimedia/');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.get('/api', function (_req, res) {
  res.end('file catcher example');
});
 
app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        });
      }
});
var PORT = process.env.PORT || 3000;
 
app.listen(PORT, function () {
  console.log('El servidor se está ejecutando en el puerto ' + PORT);
});