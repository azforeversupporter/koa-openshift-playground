var http = require('http');

var ip = process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
if (typeof ip === 'undefined') {

	console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
	ip = '127.0.0.1';
}

var server = http.createServer(function(req, res) {

	res.writeHead(200);
	res.end('Hello HTTP');
});

server.listen(port, ip);