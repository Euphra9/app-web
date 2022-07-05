module.exports = app => {
    const loan = require("../../../Controller/LoanController.js");
    var router = require("express").Router();
  
     // Retrieve all loan
  router.get("/", loan.findAll);

  // get all materials available
  router.get("/dispo",loan.availableAll);

    // Create a new loan
  router.post("/", loan.create);

 // Retrieve a single loan with id
 router.get("/:id", loan.findOne);

    // Update a loan with id
    router.put("/:id", loan.update);

 // Delete a loan with id
 router.delete("/:id", loan.delete);
    
    app.use('/api/loan', router);
  };