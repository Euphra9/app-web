module.exports = app => {
    const Responsable = require("../../../Controller/LoginController.js");
    var router = require("express").Router();

    router.get("/", Responsable.findAll);

    app.use('/authLogin', router);
}