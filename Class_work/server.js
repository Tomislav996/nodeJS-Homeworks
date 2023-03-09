import express from "express";


const app = express();

app.use((req,res,next)=>{
    let localTime = new Date().toLocaleString();
    console.log(localTime);
    next();
})

app.get("/", (request, response) => {

    response.send("<h1>Default route</h1>")
});

app.get("/student_info", (request, response) => {
    response.send("<h1>fullname:Tomislav Trpeski, age:26, subject:NODE basic</h1>");
})

app.post("/student",(request,response)=>{
    const body = request.body;
})
app.listen(3000, () => {
    console.log("Server is up and running...");
});
