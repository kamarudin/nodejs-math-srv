var express = require('express')
var app = express()
var os = require('os')
my_Count = 0

app.get('/', function (req, res) {
  ts=Date.now();
  rand_A = Math.floor(Math.random() * 1000) + 1;
  rand_B = Math.floor(Math.random() * 10000) + 1;
  rand_Tot = Math.floor(rand_A * rand_B);
  my_Count = my_Count + 1;

  res.setHeader('Content-Type', 'application/json');
  //res.json({Timestamp: ts, A: rand_A, B: rand_B, "TOTAL (A*B)": rand_Tot, Hostname: os.hostname(), Count: my_Count, Msg: "Demo-0" });
  res.json({Timestamp: ts, Hostname: os.hostname(), Count: my_Count, Msg: "Demo-0" });
})

app.listen(8080, function () {
  console.log('Listening on port 8080...')
})
