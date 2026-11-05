import { Client, TablesDB, Storage , ID, Query,  } from 'appwrite';
import conf from '../conf/config';


class Service {
    client = new Client()
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteendpoint)
        .setProject(conf.appwriteurl);
        this.database =  new TablesDB(this.client);
        this.bucket = new Storage(this.client)
    }


    async createpost({title, slug, content, featureimage, status, userid}){

        try {
               return await this.database.createRow({
             databaseId : conf.appwritedatabase,
              tableId: conf.appwritecollection,
               rowId: slug, 
               data : {
                title,
                content, 
                featureimage, 
                status,
                userid


               }

              

               })
            

    
        } catch (error) {
            console.log("your createpost error is ", error)
        }

    }

    async updatepost(slug, {title, content,  featureimage, status}){
        try {
            return await this.database.updateRow({
                 databaseId : conf.appwritedatabase,
              tableId: conf.appwritecollection,
               rowId: slug, 
               data : {
                title ,
                 content,
                 featureimage, 
                 status
               }

            })


        } catch (error) {
             console.log("upadtepost", error)
        }
    }


    async deletepost(slug){
        try {
            return await this.database.deleteRow({
                 databaseId : conf.appwritedatabase,
              tableId: conf.appwritecollection,
               rowId: slug, 
            

            })


        } catch (error) {
             console.log("your deletepost error is ", error)
        }
    }
    

      async getpost(slug){
        try {
            return await this.database.getRow({
                 databaseId : conf.appwritedatabase,
              tableId: conf.appwritecollection,
               rowId: slug, 
            

            })


        } catch (error) {
          console.log("your getpost error is ", error)   
        }
    }

       async getposts(uqarie = [Query.equal("status", "active")]){
        try {
            return await this.database.listRows({
                 databaseId : conf.appwritedatabase,
              tableId: conf.appwritecollection,
               queries : uqarie, 
            

            })


        } catch (error) {
             console.log("your getposts error is ", error)
        }
    }
    

    
      async uplodefile(file){
        try {
            return await this.bucket.createFile({
                 bucketId : conf.appwritebucket,
                 fileId: ID.unique(),
                 file : file 

            })


        } catch (error) {
            console.log("your uploadfile error is ", error) 
        }
    }
        async deletefile(id){
        try {
            return await this.bucket.deleteFile({
                 bucketId : conf.appwritebucket,
                 fileId : id

            })


        } catch (error) {
             console.log("your deletefile error is ", error)
        }
    }

//     priview(id) {
//     return this.bucket.getFileView({
//         bucketId: conf.appwritebucket,
//         fileId: id
//     });
// }


       priview(id){
        try {
            return  this.bucket.getFileView({
                 bucketId : conf.appwritebucket,
                 fileId : id

            })


        } catch (error) {
            console.log("your priview error is ", error) 
        }
    }


     
}


const service = new Service()


export  default service