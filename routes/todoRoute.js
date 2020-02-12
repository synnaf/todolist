const express = require("express"); 
const TodoItem = require("../model/todoSchema"); 
const router = express.Router(); 


router.route("/createTodo") 
    .get(async (req,res) => {
        const currentpage = req.query.page || 1;
        const itemsperpage = 3;  
        const a_z = req.query.sort; 
        const bydate = req.query.sort;

        const allItems = await TodoItem.find()
        const findnewItems = await TodoItem.find().skip((currentpage - 1) * itemsperpage).limit(itemsperpage)
            .sort({author: a_z, date: bydate});
        
        const numberOfPages = Math.ceil(allItems.length / itemsperpage) 
        res.render("createTodo", {findnewItems, numberOfPages, currentpage}); 

    })
     .post(async (req, res) => {
        await new TodoItem({ text: req.body.todo_content, author: req.body.todo_author, deadline: req.body.todo_deadline}).save();
        res.redirect("/createTodo"); 
    }) 


router.get("/createTodo/delete/:id", async (req, res)=> {
    await TodoItem.deleteOne({_id:req.params.id}); 
    res.redirect("/createTodo");  
}); 


router.route("/createTodo/edit/:id")
    .get(async (req, res)=> {
        const editItem = await TodoItem.findById({_id:req.params.id})  
        res.render("editTodo", {editItem}); 
    })
    .post(async (req, res)=> {
        await TodoItem.updateOne({_id:req.body._id}, [{$set: {text: req.body.text}}, {$set: {author: req.body.author}}, {$set: {deadline: req.body.deadline}}] );       
        res.redirect("/createTodo"); 
    }) 


module.exports = router; 
