const http=require('http');
const fs=require('fs');

fs.readFile('./index.html',(er1,index)=>{
    fs.readFile('./about.html',(er2,about)=>{
        fs.readFile('./contact-me.html',(er3,contact)=>{
            fs.readFile('./404.html',(er4,not_found)=>{
                if(er1 || er2 || er3 || er4)
                throw new Error();
                else
                {
                    console.log('listening on port 8080...');
                    const server=http.createServer((req,res)=>{
                        if(req.url==='/')
                    {
                        res.writeHeader(200,{"Content-Type": "text/html"});
                        res.write(index);
                        res.end();
                    }
                    else if(req.url==='/about')
                    {
                        res.writeHeader(200,{"Content-Type": "text/html"});
                        res.write(about);
                        res.end();
                    }
                    else if(req.url==='/contact-me')
                    {
                        res.writeHeader(200,{"Content-Type": "text/html"});
                        res.write(contact);
                        res.end();
                    }
                    else 
                    {
                        res.writeHeader(404,{"Content-Type": "text/html"});
                        res.write(not_found);
                        res.end();
                    }
                }).listen(8080);
                }
            });
        });
    });
});

    