import 'whatwg-fetch';

class Request{
    async request(url, method, data = {}){
        let queryString = '';
        let bodyString = '';
        Object.entries(data).forEach(([key,value],index)=>{
            if(method === 'GET'){
                 //以上代码的简写
                queryString += (index === 0 ? '?': '&') + `${key}=${value}`;
            }else{
                bodyString += (index === 0 ? '': '&') + `${key}=${value}`;
            }
        })
        const options = {
            method
        };
        if(method !== 'GET'){
            options.body = bodyString;
        }
        const response = await fetch(
            url+queryString,options
        );
        const result = await response.json();
        return result;
    };
    get(url, data = {}){
        return this.request(url, 'GET', data);
    };
    post(url, data = {}){
        return this.request(url, 'POST', data)
    }
}

export default new Request();