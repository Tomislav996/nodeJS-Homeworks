import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());     
app.use(express.urlencoded({
    extended:true
}))


app.use((req,res,next)=>{
    let localTime = new Date().toLocaleString();
    console.log(localTime);
    next();
})

app.get("/", (request, response) => {

    response.send("<h1>Default route</h1>")
});

app.listen(3000, () => {
    console.log("Server is up and running...");
});
