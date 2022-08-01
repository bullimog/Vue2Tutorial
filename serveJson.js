
const http = require('http'); 
http.createServer(function (req, res) { {}
  res.writeHead(200, {'Content-Type': 'application/json'}); 
  res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
  //res.end("{\"name\":\"bob\"}"); 

  name = "default";
  switch(Math.floor(Math.random() * 4)) {  // 0 - 3
    case 0:
      name = "Alan";
    break;
    case 1:
      name = "Brenda";
    break;
    case 2:
      name = "Colin";
    break;
    case 3 :
      name = "Denise";
    break;
  }

  setInterval(function() {
          res.end("{\"name\":\""+ name + "\"}");
  },2000);

}).listen(8080, '127.0.0.1'); 

console.log('Server running at http://127.0.0.1:8080');
