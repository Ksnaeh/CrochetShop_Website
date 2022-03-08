"use strict";

var db = require('../db-connection');
class CheckoutDB{
    getAllCheckouts(callback){
        var sql = 'SELECT * FROM checkout';
        db.query(sql, callback);
    }

    getAllCheckoutsbyUser (game, callback){
        var sql = "SELECT * FROM checkout where realname = ?";

        return db.query(sql, [game], callback);
    }

    addCheckout (critic, callback){
        var sql = "INSERT INTO checkout (orderid, realname, deliveryTime, totalPrice, productName, qty) VALUES (?, ?, ?, ?, ?, ?)"

        db.query(sql, [critic.getOrderID(), critic.getRealname(), critic.getDeliveryTime(), critic.getTotalprice(), critic.getProductName(), critic.getQty()], callback)
    }


    deleteCheckout(criticID, callback){
        var sql = "DELETE from criticreview WHERE CriticID = ?";
        return db.query(sql, [criticID], callback);
    }

}

module.exports = CheckoutDB;