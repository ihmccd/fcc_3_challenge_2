var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.get("/api/whoami", function(request, response){
	var ip_str = request.connection.remoteAddress;
	if(ip_str.indexOf(":")!=-1){
	var ip_arr = ip_str.split(":");
     var ipadress =ip_arr[ip_arr.length-1];
 }
 else{
 	var ipadress = request.connection.remoteAddress;
 }
    var language = request.headers["accept-language"].split(",")[0];
 	var software = JSON.stringify(request.headers['user-agent']).split(')')[0].split("(")[1] // just trust it it works
    var result = {ipadress,language,software}
    response.send(result);
});

app.listen(PORT);