const mysql = require("mysql");
require("dotenv").config();


const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error) => {
    if (error) {
        console.log("mysql db: " + error);

    }else{
        console.log("db connected");
        
    }
});

// connection.query("SELECT * FROM DATABASE")


class dbService {
    static getdbServiceIntance(){
        return intance ? intance : new dbService();
    }
}


module.exports = dbService;