const sql = require("../core/services/connectionDB");
// constructor
const Student = function(student) {
  this.Nom = student.Nom;
  this.Prenom = student.Prenom;
  this.NumTel= student.NumTel;
  this.Adresse=student.Adresse;
  this.Promotion= student.Promotion;
  
};

Student.create = (newStudent, result) => {
  sql.query("INSERT INTO Etudiant SET ?", newStudent, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created student: ", { id: res.insertIdentifiant, ...newStudent });
    result(null, { id: res.insertIdentifiant, ...newStudent });
  });
};


// Find a single Student with a id
Student.findById = (id, result) => {
  sql.query(`SELECT * FROM Etudiant WHERE Identifiant = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Student;