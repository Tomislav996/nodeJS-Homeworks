import http from "http";

const server = http.createServer((request, response)=>{
    const url = request.url;
    const method = request.method;

    if(url === "/"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Hello fellas, we return html from our server</h1>");
        response.end();
    }
    if(url === `/contact`){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>We hit contact endpoint</h1>");
        response.end();
    }

    if(url === "something"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>this is something endpoint</h1>");
        response.end();
    }
})

server.listen(3000, ()=>{
    console.log("Server is up and running...");
})
