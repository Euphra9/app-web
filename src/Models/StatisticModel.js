const sql = require("../core/configBDD/connectionDB");
const Statistic = function(statistic) {
    
  };


  Statistic.getTotalMaterial = (result) => {
    let query = "SELECT count(*) FROM Materiel";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Nombre total des materiels: ", res);
      result(null, res);
    });
  };


  Statistic.getTotalLoan = (result) => {
    let query = "SELECT count(*) FROM preter";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Nombre total des pret: ", res);
      result(null, res);
    });
  };


  Statistic.getTotalLoanReturn = (result) => {
    let query = "SELECT count(*) FROM preter WHERE DateRetour IS NOT NULL";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Nombre total des pret rendu: ", res);
      result(null, res);
    });
  };

  Statistic.getTotalLoanNotReturn = (result) => {
    let query = "SELECT count(*) FROM preter WHERE DateRetour IS NULL";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Nombre total des pret non rendu: ", res);
      result(null, res);
    });
  };

module.exports = Statistic;