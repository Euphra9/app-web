module.exports = app => {
    const statistics = require("../../../Controller/StatisticController.js");
    var router = require("express").Router();
  
     // Retrieve all Materials
  router.get("/allMaterial", statistics.findTotalMaterial);

   // Retrieve all loan
   router.get("/allLoan", statistics.findTotalLoan);

    // Retrieve all loan reurn
    router.get("/allLoan/return", statistics.findTotalLoanReturn);

    // Retrieve all loan not reurn
    router.get("/allLoan/notreturn", statistics.findTotalLoanNotReturn);


    
    app.use('/api/statistic', router);
  };