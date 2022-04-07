const b=require("http");

b.createServer((request,response)=>{
    // response.write("<h2>What is Node.Js</h2>");
    response.write("<h1>Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.</h1>");
    response.end();
}).listen(3000);