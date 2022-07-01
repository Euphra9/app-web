const sql = require("../core/services/connectionDB");
// constructor
const Material = function(material) {
  this.CodeBarre = material.CodeBarre;
  this.Nom = material.Nom;
  this.Description= material.Description;
  this.Type=material.Type;
  
};

Material.getAll = (result) => {
  let query = "SELECT * FROM Materiel";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("materials: ", res);
    result(null, res);
  });
};


Material.create = (newMaterial, result) => {
  sql.query("INSERT INTO Materiel SET ?", newMaterial, (err) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created materiel: ", { newMaterial });
    result(null, { newMaterial });
  });
};

Material.updateById = (CodeBarre, material, result) => {
  sql.query(
    "UPDATE Materiel SET Nom = ?, Description = ?, Type = ? WHERE CodeBarre = ?",
    [material.Nom, material.Description,material.Type, CodeBarre],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Material with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated material: ", {material});
      result(null, {material});
    }
  );
};

// Find a single Material with a codeBarre
Material.findById = (id, result) => {
  sql.query(`SELECT * FROM Materiel WHERE CodeBarre = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found material: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Material with the id
    result({ kind: "not_found" }, null);
  });
};

  // Delete a Material with the specified id in the request
  Material.remove = (id, result) => {
  sql.query("DELETE FROM Materiel WHERE CodeBarre = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Material with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted material with id: ", id);
    result(null, res);
  });
};

module.exports = Material;