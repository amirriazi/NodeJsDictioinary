const promise = require('promise');
const axios = require('axios');

class GoogleAPI {
    constructor(source, target, text) {
        this.source=source;
        this.target=target;
        this.text=text;
    }
    translate() {
        return new promise((resolve, reject) => {
            var headers = {
				'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.0.3705;)',
				'content-type':'application/json; charset=UTF-8'
				
            }
            try {
                console.log('translate');
				axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${this.source}&tl=${this.target}&dt=t&q=${this.text}`,
				{
					headers: {'Content-Type': 'application/json; charset=UTF-8'}
				}).then( response => {
					console.log('GoogleAPI then ' + response.data);
					var result =  response.data[0][0][0];
					resolve( result);
				}).catch (err=> {
					reject(err);
				})
				  
            } catch (error) {
                console.log('translate error');
                reject(error);
			}	

        });
    }
}

module.exports= GoogleAPI;