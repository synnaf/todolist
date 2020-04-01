//skapa kopplingen till server 
const express = require("express"); 
const mongoose = require("mongoose"); 
const config = require("./config/config");
const todoRoute = require("./routes/todoRoute");  
const path = require("path")

const app = express(); 
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json()); //eventuellt ta bort denna rad? 
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs"); 
app.use(todoRoute); 

const PORT = process.env.PORT; 

const dbOptions = {
    useUnifiedTopology: false,
    useNewUrlParser: true,
    useCreateIndex: true
}

mongoose.connect(config.databaseUrl, dbOptions).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
})



//exporterar app till testing 
module.exports = app