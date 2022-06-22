const Student = require("../Models/StudentsModel.js");


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

