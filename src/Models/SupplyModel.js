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


module.exports = Supply;