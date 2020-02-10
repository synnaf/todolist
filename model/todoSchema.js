//KVAR: fixa required på formulären 
const mongoose = require("mongoose"); 

const schemaTodoItem = new mongoose.Schema( {
    text: String, 
    author: String, 
    deadline: { type: Date }
}); 

const TodoItem = mongoose.model("createtodo", schemaTodoItem); 


module.exports = TodoItem; 