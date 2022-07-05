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

