module.exports = app => {
    const materials = require("../../Controller/MaterialsController.js");
    var router = require("express").Router();
  
     // Retrieve all Materials
  router.get("/", materials.findAll);

// Retrieve all Suppliers
router.get("/fournisseurs", materials.findAllSupplier);

    // Create a new Material
  router.post("/", materials.create);

 // Retrieve a single Material with id
 router.get("/:id", materials.findOne);

    // Update a Material with id
    router.put("/:id", materials.update);

 // Delete a Material with id
 router.delete("/:id", materials.delete);
    
    app.use('/api/materials', router);
  };