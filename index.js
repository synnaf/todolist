//skapa kopplingen till server 
const express = require("express"); 
const mongoose = require("mongoose"); 

const configDb = require("./config/config");
const todoRoute = require("./routes/todoRoute");  
const path = require("path")

const app = express(); 
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json()); //eventuellt ta bort denna rad? 
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs"); 
app.use(todoRoute); 

const port = process.env.PORT || 5005;

mongoose.connect(configDb.databaseUrl, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}).then(() => {
    app.listen(port); 
    console.log(`Listening on port ${port}`); 
}); 


//exporterar app till testing 
module.exports = app