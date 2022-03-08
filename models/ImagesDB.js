"use strict";

var db = require('../db-connection');

class ImagesDB{

    getAllImages(callback){ //done
        var sql = "Select * from prod_images";

        return db.query(sql, callback);
    }


    // deleteAccount (user, callback){
    //     var sql = "DELETE from users WHERE Username = ?";

    //     return db.query(sql, [user], callback)
    // }
}
module.exports = ImagesDB;