function route(pathname, response) {
	var body = '<html>' +
	'<head>' +
	'<title>' + 'Simple Node.js App' + '</title>' +
	'</head>' +
	'<body>' +
	'<input type = "submit" value = "SUBMIT" />' +
	'</body>' +
	'</html>';

	console.log("Route request for "+ pathname);
	if (pathname === "/start") {
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write(body);
		response.end();
	} else {
		console.log("No handler provided!!!");
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write("404 Not Found!!!");
		response.end();
	}

}

exports.route = route;