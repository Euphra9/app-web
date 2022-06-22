const sql = require("../core/services/connectionDB");
// constructor
const Student = function(student) {
  this.name = student.name;
  this.lastname = student.lastname;
  
};

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