const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{

    if (req.url == '/'){
        const readStream = fs.createReadStream("./index.html")
        res.writeHead(200,{'Content-type' : 'text/html'});
        readStream.pipe(res);
    }
    else{
        res.write("Try 4400");
        res.end();
    }
}).listen('4400');