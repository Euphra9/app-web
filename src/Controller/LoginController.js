const Responsable = require("../Models/LoginModel.js");

// Retrieve all responsibles from the database (with condition).
exports.findAll = (req, res) => {
    Responsable.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving responsibles."
            });
        else res.send(data);
    });
};