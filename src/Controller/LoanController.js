const Loan = require("../Models/LoanModel.js");

// Retrieve all Loan from the database (with condition).
exports.findAll = (req, res) => {
    Loan.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving loan."
      });
    else res.send(data);
  });
};


// Create and Save a new Loan
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Loan
  const loan = new Loan({
    CodeBarre:req.body.CodeBarre,
    Motif:req.body.Motif,
    DatePret:req.body.DatePret,
    DateRetour:req.body.DateRetour,
    DateRenduPrevue:req.body.DateRenduPrevue,
    Identifiant:req.body.Identifiant,
    NumResponsable:req.body.NumResponsable,
    
  });
  // Save Loan in the database
  Loan.create(loan, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Loan."
      });
    else res.send(data);
  });
};


// Update a Loan identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Loan.updateById(
    req.params.id,
    new Loan(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Loan with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Loan with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};


// Find a single Loan with a id
exports.findOne = (req, res) => {
    Loan.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Loan with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Loan with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  // Delete a Loan with the specified id in the request
  exports.delete = (req, res) => {
    Loan.remove(req.params.id, (err) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Loan with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Loan with id " + req.params.id
          });
        }
      } else res.send({ message: `Loan was deleted successfully!` });
    });
  };

