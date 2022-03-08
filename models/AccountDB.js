"use strict";

var db = require('../db-connection');

class AccountDB{
    getLoginCredentials(id, callback){ //done
        var sql = "Select Password, AccountID from users where Username = ?";
        return db.query(sql, [id], callback);
    }

    authenticateByDB(id, password, callback){ //done
        var sql = "Select email from users where username = ? and password = ?";
        
        return db.query(sql, [id, password], callback);
    }

    getAllUsers(callback){ //done
        var sql = "Select * from users";

        return db.query(sql, callback);
    }

    updatePassword(user, pass, callback){ //done
        var sql = "UPDATE users SET Password = ? WHERE Username = ?";

        return db.query(sql, [pass, user], callback);
    }

    addAccounts(add, callback){ //done
        var sql = "INSERT INTO users (Username, Password, Email) VALUES (?, ?, ?)";

        return db.query(sql, [add.getUserName(), add.getPassword(), add.getEmail()], callback);
    }

    // deleteAccount (user, callback){
    //     var sql = "DELETE from users WHERE Username = ?";

    //     return db.query(sql, [user], callback)
    // }
}
module.exports = AccountDB;