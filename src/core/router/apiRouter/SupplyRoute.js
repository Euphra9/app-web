module.exports = app => {
    const supply = require("../../../Controller/SupplyController.js");
    var router = require("express").Router();


// Retrieve all Suppliers
router.get("/", supply.findAllSupplier);

  // Create a new delivery
router.post("/", supply.create);
    
app.use('/api/supply', router);
  };