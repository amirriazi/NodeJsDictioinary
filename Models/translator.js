const promise = require('promise');
const DicApi = require('./googleApi');

module.exports={
    translate: (source, target, text) => {
        var t = new DicApi(source, target, text);
        return new promise( (resolve, reject)=> {
            t.translate().then(response => {
                console.log('translate.js resolve'+ response);
                resolve(response);                
            }).catch(error => {
                reject(error) ;                
            });
    
        });
    }
}
