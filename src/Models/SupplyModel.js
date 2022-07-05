const sql = require("../core/configBDD/connectionDB");
// constructor
const Supply = function(supply) {
  this.CodeBarre = supply.CodeBarre;
  this.DateAchat = supply.DateAchat;
  this.PrixAchat= supply.PrixAchat;
  this.NumFournisseur=supply.NumFournisseur;
  
};


Supply.getAllSupplier = (result) => {
  let query = "SELECT * FROM Fournisseur";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("suppliers: ", res);
    result(null, res);
  });
};

Supply.createSupply = (newSuppli, result) => {
  sql.query("INSERT INTO fournir SET ?", newSuppli, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created supply: ", { id: res.insertCodeBarre, ...newSuppli });
    result(null, { id: res.insertCodeBarre, ...newSuppli });
  });
};

// Find a single Supply with a id
Supply.findSupplyById = (id, result) => {
  sql.query(`SELECT * FROM fournir WHERE CodeBarre = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found supply: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Supply with the id
    result({ kind: "not_found" }, null);
  });
};


// Find a single Supplier with a id
Supply.findSupplierById = (id, result) => {
  sql.query(`SELECT * FROM Fournisseur WHERE NumFournisseur = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found supplier: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Supply with the id
    result({ kind: "not_found" }, null);
  });
};


module.exports = Supply;