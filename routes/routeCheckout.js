"use strict"

const criticController = require('../Controllers/checkoutController');

function routeCriticReview(app){
    app.route('/checkout')
        .get(criticController.getAllCheckouts)
        .post(criticController.addCheckout);

    app.route('/checkout/account/:AccountID')
        .get(criticController.getReviewsByGame);

    app.route('/checkout/:id')
        .delete(criticController.deleteCheckout);
}

module.exports = {routeCriticReview};