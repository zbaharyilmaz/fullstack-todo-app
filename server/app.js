"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- *
 $ npm i express dotenv express-async-errors
 $ npm i sequelize
 $ npm i sqlite3
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

require('express-async-errors');

// Accept json data:
app.use(express.json())
// Cors
const cors= require("cors")
// Cors
// {
//     origin: '*', // Allow all origins
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
//     allowedHeaders: undefined, // Allow headers requested by client (via Access-Control-Request-Headers)
//     exposedHeaders: undefined, // No response headers exposed to the browser
//     credentials: false, // Don't allow cookies or Authorization headers by default
//     preflightContinue: false, // Don't pass preflight OPTIONS to next middleware
//     optionsSuccessStatus: 204, // Response status code for successful OPTIONS
//     maxAge: undefined // Don't cache preflight responses
//   }
app.use(cors({
    origin: ["htttps://example.com", "http://localhost:3000"] 
}))  //! cors ayarı yapıldı.
/* ------------------------------------------------------- */
// ROUTERS:

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
});

app.use(require('./routes/todo.router'));

/* ------------------------------------------------------- */
// ErrorHandler
app.use(require('./middlewares/errorHandler'));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));