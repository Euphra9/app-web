module.exports = app => {
    const students = require("../../Controller/StudentsController.js");
    var router = require("express").Router();
  
     // Retrieve all Students
  router.get("/", students.findAll);

    // Create a new Student
  router.post("/", students.create);

 // Retrieve a single Student with id
 router.get("/:id", students.findOne);

    // Update a Student with id
    router.put("/:id", students.update);

 // Delete a Student with id
 router.delete("/:id", students.delete);
    
    app.use('/api/students', router);
  };