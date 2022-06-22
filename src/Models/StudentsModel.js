const sql = require("../core/services/connectionDB");
// constructor
const Student = function(student) {
  this.Nom = student.Nom;
  this.Prenom = student.Prenom;
  this.NumTel= student.NumTel;
  this.Adresse=student.Adresse;
  this.Promotion= student.Promotion;
  
};

Student.getAll = (result) => {
  let query = "SELECT * FROM Etudiant";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("students: ", res);
    result(null, res);
  });
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

Student.updateById = (id, student, result) => {
  sql.query(
    "UPDATE Etudiant SET Nom = ?, Prenom = ?, NumTel = ?,Adresse=?,Promotion=? WHERE Identifiant = ?",
    [student.Nom, student.Prenom, student.NumTel,student.Adresse,student.Promotion, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Student with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated student: ", { id: id, ...student });
      result(null, { id: id, ...student });
    }
  );
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
      console.log("found Student: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Student with the id
    result({ kind: "not_found" }, null);
  });
};

  // Delete a Student with the specified id in the request
  Student.remove = (id, result) => {
  sql.query("DELETE FROM Etudiant WHERE Identifiant = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Student with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted student with id: ", id);
    result(null, res);
  });
};

module.exports = Student;