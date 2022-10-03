const express = require("express");
const app = express();
const path = require('path')
const homeRoutes = require("./routes/homeRoutes");

require('dotenv').config({ path: './config/.env' })


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}, you better catch it!`)
})