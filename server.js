var express = require('express');
var app = express();

var moment = require('moment');

app.get('/:datestring', function(req, res) {
  var dateString = req.params.datestring;
  var unixTimeStamp, readableTime;
  if(isNaN(dateString)){
    readableTime = dateString;
    unixTimeStamp = moment(dateString, "MMMM-DD-YYYY").unix();
  }
  else {
    unixTimeStamp = dateString;
    readableTime = moment.unix(unixTimeStamp).format("MMMM-DD-YYYY");
  }
  res.send("unix : " + unixTimeStamp +" readable time : "+ readableTime)
});

app.listen(process.env.PORT || 3000);
