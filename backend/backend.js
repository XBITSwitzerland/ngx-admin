const express = require('express');
var httpProxy = require('http-proxy');
const fs = require('fs');

const port = 8081;

var app = express();

// proxy middleware
var proxy = httpProxy.createProxyServer({});

proxy.on('error', function (err, req, res) {
    console.log(err.message);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Something went wrong!');
});

app.use('/api', function(req, res) {
    var target = req.get('X-Proxy-Base-Url');
    proxy.web(req, res, {
        target: target,
        changeOrigin: true
    });
});

// serve static files
app.all('/*', express.static('./dist'));

// start express
app.listen(port, function() {
    console.log('listening on port ' + port);
})