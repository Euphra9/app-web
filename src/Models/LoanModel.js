const sql = require("../core/services/connectionDB");
// constructor
const Loan = function(loan) {
  this.CodeBarre = loan.CodeBarre;
  this.Motif = loan.Motif;
  this.DatePret= loan.DatePret;
  this.DateRetour=loan.DateRetour;
  this.DateRenduPrevue=loan.DateRenduPrevue;
  this.Identifiant=loan.Identifiant;
  this.NumResponsable=loan.NumResponsable;

  
};

Loan.getAll = (result) => {
  let query = "SELECT * FROM preter";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("loan: ", res);
    result(null, res);
  });
};

Loan.getAvailable=(result)=>{
  let query="SELECT * FROM Materiel WHERE Materiel.CodeBarre NOT IN (SELECT CodeBarre FROM preter) OR Materiel.CodeBarre IN(SELECT CodeBarre FROM preter WHERE DateRetour IS NOT NULL)";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("loan: ", res);
    result(null, res);
  });

  };


/*
SELECT * FROM All 
WHERE 
All.CP NOT IN (SELECT CP FROM B)
 */


Loan.create = (newLoan, result) => {
  sql.query("INSERT INTO preter SET ?", newLoan, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created loan: ", { newLoan });
    result(null, { newLoan });
  });
};

Loan.updateById = (CodeBarre, loan, result) => {
  sql.query(
    "UPDATE preter SET Motif = ?, DatePret = ?, DateRetour = ?,DateRenduPrevue = ?,Identifiant = ?,NumResponsable = ? WHERE CodeBarre = ?",
    [loan.Motif, loan.DatePret,loan.DateRetour,loan.DateRenduPrevue,loan.Identifiant, 
        loan.NumResponsable,CodeBarre],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found loan with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated loan: ", {CodeBarre: CodeBarre, ...loan});
      result(null, {CodeBarre: CodeBarre, ...loan});
    }
  );
};

// Find a single Material with a codeBarre
Loan.findById = (id, result) => {
  sql.query(`SELECT * FROM preter WHERE CodeBarre = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found loan: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Material with the id
    result({ kind: "not_found" }, null);
  });
};

  // Delete a Material with the specified id in the request
  Loan.remove = (id, result) => {
  sql.query("DELETE FROM preter WHERE CodeBarre = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Loan with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted Loan with id: ", id);
    result(null, res);
  });
};

module.exports = Loan;