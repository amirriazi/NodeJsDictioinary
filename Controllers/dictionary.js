const router = require('express').Router(),
      moment = require('moment'),
      translator=require('../Models/translator');





router.get('/:source/:target/:text', function (req, res) {
    var param=req.params;
    
    translator.translate(param.source,param.target, param.text)
              .then( response => {
                console.log(`${param.source} -> ${param.target} : ${param.text} = ${ response}`);  
                res.header('content-type','application/json; charset=UTF-8');
                //res.send(`${param.source} -> ${param.target} : ${param.text} = ${ response }`);              
                res.send(`${JSON.stringify(response)}`);              
                res.end();
              }).catch( error => {
                res.header('content-type','text/html; charset=UTF-8');
                res.send(`Error in translator! ${error}`);              
                res.end();
              });

})
            
module.exports = router  