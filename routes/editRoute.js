//code for editing an existing todo
//use put to edit??? 
//use save() to save item??? 
//get todo usibg id?? 

router.route("/createTodo/:id") 
    .get(async (req,res) => {
        const findnewItem = await TodoItem.find();
        res.render("createTodo", {findnewItem}); 
    })
     .put((req, res) => {
        let itemId = req.body._id; 
        let itemText = req.body.todo_content; 

        itemText.save(); 
        
        res.redirect("createTodo"); 
     }); 



module.exports = router; 