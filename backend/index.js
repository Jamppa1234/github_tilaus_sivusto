const express = require('express');
var cors = require("cors");
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tilausmysql'
});

// connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

const app = express();
app.use(cors())

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

// create table
app.get('/createemployee', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Employee table created');
    });
});

//Insert employee
app.get('/newproduct1', (req, res) => {
    let post = { name: 'Jami', designation: 'chief executive officer' }
    let sql = 'INSERT INTO newproduct1 SET ?'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('New product1 added');
    });
});

// get asiakkaat
app.get('/getasiakkaat', (req, res) => {
    let sql = 'SELECT * FROM asiakkaat'
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        //res.send('Asiakkaat details fetched');
    })
})

// get tuotteet
app.get('/gettuotteet', (req, res) => {
    let sql = 'SELECT * FROM tuotteet'
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send('Tuotteet details fetched');
    })
})

// update employee
app.get('/updateemployee/:id', (req, res) => {
    let newName = 'Updated name'
    let sql = `UPDATE employee SET name = '$(newName)' WHERE id = $(req.params.id)`;
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send('Employee updated');
    })
})

app.listen('4000', () => {
    console.log('Server started on port 4000')
})