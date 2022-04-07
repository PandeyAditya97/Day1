const c=require("http");

c.createServer((request,response)=>{
    let student= {name : "Aditya", age: 24 , contact: 87960000 ,doj:"11/07/2021"}
    response.write(JSON.stringify(student));
    response.end();
}).listen(3001);