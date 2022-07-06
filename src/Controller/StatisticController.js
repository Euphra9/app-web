const Statistic = require("../Models/StatisticModel.js");

// Retrieve all total Material 
exports.findTotalMaterial = (req, res) => {
    Statistic.getTotalMaterial((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving counting."
      });
    else res.send(data);
  });
};

exports.findTotalLoan = (req, res) => {
    Statistic.getTotalLoan((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving counting."
      });
    else res.send(data);
  });
};

exports.findTotalLoanReturn = (req, res) => {
    Statistic.getTotalLoanReturn((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving counting."
      });
    else res.send(data);
  });
};

exports.findTotalLoanNotReturn = (req, res) => {
    Statistic.getTotalLoanNotReturn((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving counting."
      });
    else res.send(data);
  });
};

  