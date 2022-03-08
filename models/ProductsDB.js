"use strict"

var db = require('../db-connection');

class ProductsDB{
    getAllProducts(callback)
    {
        var sql = 'select * from products';

        return db.query(sql, callback);
    }

    // getGamesFromGenre (GameGenre, callback)
    // {
    //     var sql = "Select * from products where GameGenre = ?";

    //     return db.query(sql, [GameGenre], callback);
    // }

    // getGamesFromAvail (GamePop, callback){
    //     var sql = "Select * from gamereview.gameinfo where GamePopularity = ?";

    //     return db.query(sql, [GamePop], callback);
    // }

    updateProductQty (GameName, Qty, callback){
        var sql = "UPDATE products SET qty = ? WHERE productName = ?";

        return db.query(sql, [Qty, GameName], callback);
    }

    getProductFromName (GameName, callback){
        var sql = "Select * from products where productName = ?";

        return db.query(sql, [GameName], callback);
    }
}

module.exports = ProductsDB;