const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    //database: 'omamysql'
});

// connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

const app = express();

// Create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE tilausmysql';
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Database created');
    });
});

app.listen('4000', () => {
    console.log('Server started on port 4000')
})