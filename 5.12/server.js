const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const res = require('express/lib/response')

/* ---------------------------- setups and config --------------------------- */
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs");
app.set("views");

/* ------------------------------- middleware ------------------------------- */
app.use('/api/members', require('./routes/members'))

app.use((req,res) => res.sendFile(path.join(__dirname, 'public', '404.html')))

/* -------------------------------- listener -------------------------------- */
const PORT = process.env.PORT || 8000 
app.listen(PORT)