const sql = require("../core/services/connectionDB");
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


module.exports = Supply;