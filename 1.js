const a=require("http");

a.createServer((request,response)=>{
    response.write("Hello World");
    response.end();
}).listen(8000);