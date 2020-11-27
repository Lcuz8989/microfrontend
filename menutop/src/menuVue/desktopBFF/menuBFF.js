import axios from "axios";

export default class menuBFF{

static chiamateMenu(){
  return new Promise((resolve, reject) => {
     axios({ method: "GET", 
            "url": '/gateway/api/menu_orizz', 
            "data": {}, 
            "headers": { "content-type": "application/json", 
                         "Authorization": sessionStorage.getItem('token')} 
    }).then(result => {
            resolve(result.data.items);
            }).catch(error => {
               reject
              });
            });
  }
}
