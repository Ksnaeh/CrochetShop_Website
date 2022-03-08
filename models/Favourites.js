"use strict";
class Favourites {
    constructor(FavouriteID, AccountID, GameID) {
        this.favouriteid = FavouriteID;
        this.accountid = AccountID;
        this.gameid = GameID;
    }
   
    getFavouriteID(){
        return this.favouriteid;
    }

    getAccountID(){
        return this.accountid;
    }

    getGameID(){
        return this.gameid;
    }

    setUpvote(FavouriteID) {
        this.favouriteid = FavouriteID;
    }
    setAccountID(AccountID) {
        this.accountid = AccountID;
    }
    setGameID(GameID) {
        this.gameid = GameID;
    }

}
module.exports = Favourites;