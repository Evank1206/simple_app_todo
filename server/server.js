const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const db = require("./db")



app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// create
// app.post("/insert", (request, response) => {

// })

// read
app.get("/getAll", (request, response) => {
 
    response.json({
        success: true
    })
 
    
});

// update
// app.update("/update", (request, response) => {
    
// })

// delete
// app.delete("/delete", (request, response) => {
    
// })

app.listen(PORT, () => console.log(`Server listening http://localhost:${PORT}`));

