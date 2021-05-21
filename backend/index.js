const express = require("express");
var cors = require("cors");
const mysql = require('mysql');
const app = express();
app.use(cors());

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'omamysql'
});

// connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
  
app.listen(4000, () => {
    console.log("Server running on port 4000");
  });