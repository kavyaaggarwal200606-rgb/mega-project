// import { Client, Account, ID } from "appwrite";
// import conf from "../conf/config";


// class Authentication {

//     client = new Client();
//     account;

//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteendpoint)
//         .setProject(conf.appwriteurl);
//         this.account = new Account(this.client);
//     }

//     async createaccount({ email , password , name, userId}){
      
// try {
//       const newacc = await this.account.create(  userId : ID.unique(),
//     email,
//     password,
//     name);
//        if(newacc){
//             return this.login({email, password})


//         }else {
//            return newacc
//         }
// } catch (error) {
//     throw error
// }
     

//     }

//     async login({email, password}){

//         try {
//              return this.account.createEmailPasswordSession(email , password);
//         } catch (error) {
//             throw error;
//         }
       
//     }

//     async checkuser(){
//         try {
//     return await this.account.get();
//     // Logged in
// } catch (err) {
//     // Not logged in
//     console.log(`your error in check user ${err}`)
// }

// return null;
//     }


//     async logout(){
//         try {
//             return this.account.deleteSessions();
//         } catch (error) {
//             console.log(`your error is =`, error)
//         }
        
//     }

// }


// const authentication  = new Authentication();

// export default authentication;

import { Client, Account, ID } from "appwrite";
import conf from "../conf/config";

class Authentication {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteendpoint)
            .setProject(conf.appwriteurl);

        this.account = new Account(this.client);
    }

    async createaccount({ email, password, name }) {
        try {
            const newacc = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });

            if (newacc) {
                return this.login({ email, password });
            } else {
                return newacc;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return this.account.createEmailPasswordSession({
        email ,
     password
        });
        } catch (error) {
            throw error;
        }
    }

    async checkuser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(`Your error in check user: ${error}`);
        }

        return null;
    }

    async logout() {
        try {
            return this.account.deleteSessions();
        } catch (error) {
            console.log(`Your error is: ${error}`);
        }
    }
}

const authentication = new Authentication();

export default authentication;