module.exports = app => {
    const supply = require("../../../Controller/SupplyController.js");
    var router = require("express").Router();


// Retrieve all Suppliers
router.get("/", supply.findAllSupplier);

  // Create a new delivery
router.post("/", supply.create);

// Retrieve a single supply with id
router.get("/:id", supply.findOneSupply);

// Retrieve a single supplier with id
router.get("/supplier/:id", supply.findOneSupplier);

// Update a supply with id
router.put("/:id", supply.update);
    
app.use('/api/supply', router);
  };