const http=require ('http');

const fs=require('fs');

const url=require('url')

http.createServer((req,res)=>{
    let q= url.parse(req.url,true);
    console.log(q)
    if(q.pathname==='/'){
        fs.readFile('./user.html',(err,data)=>{
            if(err) console.log('An Error Occured');
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            return res.end();
        })
    }

    else if(q.pathname==='/Contact-me.html'||q.pathname==='/about.html'||q.pathname==='/user.html'){
        fs.readFile(`.${q.href}`,(err,data)=>{
            if(err) console.log('An Error Occured');
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            return res.end();
        })
    }

    else {
        fs.readFile('./404.html',(err,data)=>{
            if(err) console.log('An Error Occured');
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            return res.end();
        })
    }

}).listen(7000)