"use strict";

var db = require('../db-connection');

class ContactsDB{

    getAllMessages(callback){ //done
        var sql = "Select * from contacts";

        return db.query(sql, callback);
    }

    addMessages(add, callback){ //done
        var sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

        return db.query(sql, [add.getName(), add.getEmail(), add.getMessage()], callback);
    }

    // deleteAccount (user, callback){
    //     var sql = "DELETE from users WHERE Username = ?";

    //     return db.query(sql, [user], callback)
    // }
}
module.exports = ContactsDB;