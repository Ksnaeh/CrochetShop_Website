"use strict";

var db = require('../db-connection');
class ordersDB{
    getAllorders(callback){ //done
        var sql = 'SELECT * from ordertable';
        db.query(sql, callback);
    }
    addOrder (comment, callback){ //done
        //var abc = "Select AccountID from account where Username = 'Temasek'";
        var sql = "INSERT INTO ordertable (productName, realname, qty) VALUES (?, ?, ?)"

        db.query(sql, [comment.getProductName(), comment.getRealName(), comment.getQty()], callback)
    }

    getOrdersByAccountID (realname, callback){
        var sql = "SELECT * from ordertable where realname = ?";

        return db.query (sql, [realname], callback)
    }

    // updateCommentByReview (comment, callback){ //done
    //     var sql = "UPDATE userreview SET UserReviewDesc = ?, UserReviewDate = CURRENT_DATE() WHERE UserReviewID = ?";

    //     return db.query(sql, [comment.getReviewDesc(),comment.getReviewId()], callback)
    // }

    upProductQty (productName, callback){ //done
        var sql = "UPDATE ordertable SET qty = qty + 1 WHERE orderid = ?";

        return db.query(sql, [productName], callback)
    }

    downProductQty(productName, callback){ //done
        
        var sql = "UPDATE ordertable SET qty = qty - 1 WHERE orderid = ?";
    
        return db.query(sql, [productName], callback)
        
    }

    deleteOrder(productName, callback){ //done
        var sql = "DELETE from ordertable WHERE orderid = ?";
        return db.query(sql, [productName], callback);
    }

}

module.exports = ordersDB;