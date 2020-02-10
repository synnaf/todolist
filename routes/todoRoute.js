const express = require("express"); 
const TodoItem = require("../model/todoSchema"); 
const router = express.Router(); 

const itemsperpage = 3; 
router.route("/createTodo") 
    .get(async (req,res) => {
        const page = req.query.page; 
        const a_z = req.query.sort; 
        const bydate = req.query.sort; 
        const findnewItem = await TodoItem
            .find()
            .skip((page-page)*itemsperpage)
            .limit(itemsperpage)
            .sort({author: a_z, date: bydate});
        res.render("createTodo", {findnewItem}); 
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
