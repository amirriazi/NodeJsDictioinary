const express = require('express'),
      router = express.Router(),
      moment = require('moment');

/*
router.use(function timeLog (req, res, next) {
    console.log('Time: called menu:',  moment().format('YYYY/MM/DD'));
    //logger.debug('controllers.menu', 'called controller');

    next();
  });
  
  */
  
router.get('/', function (req, res) {
    res.send('home page')
  })
  

  module.exports = router  