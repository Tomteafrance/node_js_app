const express = require("express");
const mysql = require("mysql");

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();

// Connection to MySQL
const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'jspass',
    database: 'nodejs_db'
});


app.get("/", (req, res) => {

    // create database 
    db.query( 'CREATE DATABASE');
    
    // Use database
    db.query('USE nodejs_db');

    // Create table USER
    db.query('CREATE TABLE USER(id INT PRIMARY KEY NOT NULL, name VARCHAR(100), country VARCHAR(255))');

    // Insert Values into USER Table 
    db.query(`INSERT INTO USER(id,name,country) 
              VALUES (1,"Tom","France")`);

    // Select Name of user 
    db.query('SELECT id FROM USER limit 1',(result,field)  => {
        res.json("The user id is :"+result.id)
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);