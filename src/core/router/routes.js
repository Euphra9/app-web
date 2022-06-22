module.exports = app => {
    const students = require("../../Controller/StudentsController.js");
    var router = require("express").Router();
  
     // Retrieve all Tutorials
  router.get("/", students.findAll);

    // Create a new Tutorial
  router.post("/", students.create);

 // Retrieve a single Tutorial with id
 router.get("/:id", students.findOne);

    // Update a Tutorial with id
    router.put("/:id", students.update);

 // Delete a Tutorial with id
 router.delete("/:id", students.delete);
    
    app.use('/api/students', router);
  };