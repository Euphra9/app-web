const Supply = require("../Models/SupplyModel.js");


  // Retrieve all supplier from the database
exports.findAllSupplier = (req, res) => {
    Supply.getAllSupplier((err, data) => {
  if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving students."
    });
  else res.send(data);
});
};



// Create and Save a new Supply
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Supply
  const supply = new Supply({
    CodeBarre:req.body.CodeBarre,
    DateAchat:req.body.DateAchat,
    PrixAchat:req.body.PrixAchat,
    NumFournisseur:req.body.NumFournisseur,
    
  });
  // Save Supply in the database
  Supply.createSupply(supply, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Supply."
      });
    else res.send(data);
  });
};
