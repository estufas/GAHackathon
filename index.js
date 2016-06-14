var express         = require('express');
var mongoose        = require('mongoose');
var request         = require('request');
var _               = require('lodash');
var nodemailer 		= require('nodemailer');
var smtpTransport 	= require('nodemailer-smtp-transport');
var path 			= require('path');
var bodyParser 		= require('body-parser');

var app = express();

var transporter = nodemailer.createTransport(
    smtpTransport('smtps://persol.site.stuart@gmail.com:Habitat29@smtp.gmail.com')
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/email', function(req, res) {
    console.log(req.body);
    var mail = req.body.message;
    var sender = req.body.from;
    transporter.sendMail({
      from: sender,
      to: 'persol.site.stuart@gmail.com',
      subject: 'PERSONAL-SITE',
      html: mail  + "     --" + sender
    }, function(err, info) {
      if (err) {
        console.error(err);
      } else {
        console.log(info);
      }
    });
})

  app.use(express.static(path.join(__dirname, 'client')));

  // Load the routes.
  var routes = require('./server/routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller);
  });

  console.log("RUNNING");
  app.listen(process.env.PORT || 3000);
