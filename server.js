const express = require("express");
const cors = require('cors');

const app = express();

// setting the origin as our frontend or request origin
var corsOptions={
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json()); // to parse requests of type json

app.use(express.urlencoded({extended: true}));

// a simple route
app.get("/",(req,res) =>{
    res.json({message:"Welcome to Sequelizer Rest APIs"})
});

// setting port to run server on
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`The server is live on ${PORT}`)
});