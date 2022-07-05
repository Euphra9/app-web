const Material = require("../Models/MaterialsModel.js");

// Retrieve all Material from the database (with condition).
exports.findAll = (req, res) => {
    Material.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students."
      });
    else res.send(data);
  });
};


// Create and Save a new Material
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Material
  const material = new Material({
    CodeBarre:req.body.CodeBarre,
    Nom:req.body.Nom,
    Description:req.body.Description,
    Type:req.body.Type,
    
  });
  // Save Material in the database
  Material.create(material, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Material."
      });
    else res.send(data);
  });
};


// Update a Material identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Material.updateById(
    req.params.id,
    new Material(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Material with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Material with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};


// Find a single Material with a id
exports.findOne = (req, res) => {
    Material.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Material with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Material with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  // Delete a Material with the specified id in the request
  exports.delete = (req, res) => {
    Material.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Material with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Material with id " + req.params.id
          });
        }
      } else res.send({ message: `Material was deleted successfully!` });
    });
  };


  // Retrieve all supplier from the database (with condition).
exports.findAllSupplier = (req, res) => {
  Material.getAllSupplier((err, data) => {
  if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving students."
    });
  else res.send(data);
});
};

