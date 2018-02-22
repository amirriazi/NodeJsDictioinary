const promise = require('promise');
const DicApi = require('./googleApi');
const dictionaryWebServiceParam = require('./Params/dictionaryWebServiceParam');

module.exports={
    translate: (source, target, text) => {
        var t = new DicApi(source, target, text);
        return new promise( (resolve, reject)=> {
            t.translate().then(response => {
                console.log('translate.js resolve'+ response);
                dictionaryWebServiceParam.wsTranslateOutput.source = source;
                dictionaryWebServiceParam.wsTranslateOutput.target = target;
                dictionaryWebServiceParam.wsTranslateOutput.sourceText = text;
                dictionaryWebServiceParam.wsTranslateOutput.targetText = response;
                resolve(dictionaryWebServiceParam.wsTranslateOutput);                
            }).catch(error => {
                reject(error) ;                
            });
    
        });
    }
}
