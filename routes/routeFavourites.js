"use strict"

const favController = require('../Controllers/favController');

function routeFavourites(app){
    app.route('/favourites')
        .get(favController.getAllFav)
        .post(favController.addFavs);
    
    app.route('/favourites/account/:accountid')
        .get(favController.getAllFavByAcc);
    
    app.route('/favourites/:FavouriteID')
        .put(favController.updateFavourites)
        .delete(favController.deleteFavourites);
}

module.exports = {routeFavourites};