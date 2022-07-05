const sql = require("../core/configBDD/connectionDB");

const Responsable = function(responsable) {
    this.Nom = responsable.Nom;
    this.Prenom = responsable.Prenom;
    this.NumTel= responsable.NumTel;
    this.estAdministrateur = responsable.estAdministrateur;
    this.AdresseMail=responsable.AdresseMail;
    this.MotDePAsse= responsable.MotDePAsse;
};

Responsable.getAll = (result) => {
    let query = "SELECT * FROM Responsable";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Responsables: ", res);
        result(null, res);
    });
};

module.exports = Responsable;

