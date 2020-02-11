//skapa kopplingen till server 
const express = require("express"); 
const mongoose = require("mongoose"); 

//importera våra routes 
const configDb = require("./config/config");
const todoRoute = require("./routes/todoRoute");  
const path = require("path")

//anropa express 
const app = express(); 
app.use(express.static(path.join(__dirname, '/public')));


//middleware to handel requests
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json()); //eventuellt ta bort denna rad? 
app.use(express.urlencoded({ extended: true })); 


//anropa views för våra templates 
app.set("view engine", "ejs"); 
//kör våra routes genom app.use
app.use(todoRoute); 

//koppling genom mongoose 
const port = process.env.PORT || 5005;

mongoose.connect(configDb.databaseUrl, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}).then(() => {
    app.listen(port); 
    console.log(`Listening on port ${port}`); 
}); 