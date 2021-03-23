var express = require('express')
var app = express()

app.get('/', function (req, res) {
  ts=Date.now();
  rand_A = Math.floor(Math.random() * 1000) + 1;
  rand_B = Math.floor(Math.random() * 10000) + 1;
  rand_Tot = Math.floor((rand_A * (rand_B - rand_A)) / rand_B);

  res.send('Timestamp:'+ ts + ' { A:' + rand_A + ' , B:' + rand_B + ' ; TOTAL ((A*(B-A))/B):' + rand_Tot + ' } - DEMO-0');
})

app.listen(8080, function () {
  console.log('Listening on port 8080...')
})
