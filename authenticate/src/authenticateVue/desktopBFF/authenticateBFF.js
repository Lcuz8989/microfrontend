import axios from "axios";

export default class authenticateBFF{

    static signup(user){
        return new Promise((resolve, reject) => {
            axios({ method: "POST",
                "url": process.env.URL_API+process.env.URI_SIGNUP,
                "data": JSON.stringify(user),
                "headers": {"content-type": "application/json", "Authorization": "Bearer "}
            }).then(result => {
                resolve(result.data);
            }).catch(error => {
                reject
                console.error(error);
            });
        });
    }

    static login(user){
        return new Promise((resolve, reject) => {
            axios({ method: "POST",
                "url": process.env.URL_API+process.env.URI_LOGIN,
                "data": JSON.stringify(user),
                "headers": { "content-type": "application/json" }
            }).then(result => {
                resolve(result.data);
            }).catch(error => {
                reject
            });
        });
    }

}