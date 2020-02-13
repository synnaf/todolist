//KVAR: fixa required på formulären 
const mongoose = require("mongoose"); 

const schemaTodoItem = new mongoose.Schema( {
    text: {type: String, required: true},  
    author: String, 
    deadline: { type: Date, default: Date.now() }
}); 

const TodoItem = mongoose.model("createtodo", schemaTodoItem); 


module.exports = TodoItem; 