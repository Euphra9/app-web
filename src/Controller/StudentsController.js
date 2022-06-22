const Student = require("../Models/StudentsModel.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Student
  const student = new Student({
    Nom:req.body.Nom,
    Prenom:req.body.Prenom,
    NumTel:req.body.NumTel,
    Adresse:req.body.Adresse,
    Promotion:req.body.Promotion
    
  });
  // Save Tutorial in the database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    else res.send(data);
  });
};


// Find a single Tutorial with a id
exports.findOne = (req, res) => {
    Student.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found student with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving student with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

