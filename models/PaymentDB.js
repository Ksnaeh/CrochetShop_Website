"use strict";

var db = require('../db-connection');

class PaymentDB{

    getAllPayments(callback){ //done
        var sql = "Select * from payment";

        return db.query(sql, callback);
    }

    addPayment(add, callback){ //done
        var sql = "INSERT INTO payment (totalPrice, realname, address, email) VALUES (?, ?, ?, ?)";

        return db.query(sql, [add.getTotalprice(), add.getRealname(), add.getAddress(), add.getEmail()], callback);
    }

    // deleteAccount (user, callback){
    //     var sql = "DELETE from users WHERE Username = ?";

    //     return db.query(sql, [user], callback)
    // }
}
module.exports = PaymentDB;