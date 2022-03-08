"use strict";

var db = require('../db-connection');

class FavouritesDB{
    getFavouritesList(callback){ //done
        var sql = "SELECT h.FavouriteID, h.AccountID, p.Username, h.GameID, i.GameName FROM gamereview.favourites AS h INNER JOIN account AS p ON p.AccountID = h.AccountID INNER JOIN gameinfo AS i ON i.GameID = h.GameID";
        db.query(sql, callback);
    }

    getFavsBasedOnAcc(request, callback){
        var sql = "SELECT h.FavouriteID, h.AccountID, p.Username, i.GameName FROM gamereview.favourites AS h INNER JOIN account AS p ON p.AccountID = h.AccountID INNER JOIN gameinfo AS i ON i.GameID = h.GameID where AccountID = ?";

        return db.query(sql, [request], callback);
    }

    addFavourites (favourites, callback){ //done
        var sql = "INSERT INTO favourites (AccountID, GameID) VALUES (?, ?)";

        return db.query(sql, [favourites.getAccountID(), favourites.getGameID()], callback)
    }

    updateFavourites (favourites, callback){
        var sql = "UPDATE favourites SET AccountID = ?, GameID = ? WHERE FavouriteID = ?";

        return db.query(sql, [favourites.getAccountID(), favourites.getGameID(), favourites.getFavouriteID()], callback)
    }

    deleteFavs(commentID, callback){ 
        var sql = "DELETE from favourites WHERE FavouriteID = ?";
        return db.query(sql, [commentID], callback);
    }
}
module.exports = FavouritesDB;