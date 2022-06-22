module.exports = app => {
    const students = require("../../Controller/StudentsController.js");
    var router = require("express").Router();
  
 // Retrieve a single Tutorial with id
 router.get("/:id", students.findOne);
   
    
    app.use('/api/students', router);
  };