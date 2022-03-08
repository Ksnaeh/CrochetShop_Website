"use strict"
const productController = require ('../Controllers/productController');

function routeProducts(app){
    app.route('/Product').get(productController.getAllProductInfo);

    // app.route('/Product/Genre/:genre')
    //     .get(gameController.getGameFromGen);

    // app.route('/Product/Pop/:popularity')
    //     .get(gameController.getGameFromAvril)
    
    app.route('/Product/search')
        .post(productController.getProductFromName);
}

module.exports = {routeProducts};