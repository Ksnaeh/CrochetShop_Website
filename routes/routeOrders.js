"use strict"

const commentController = require('../Controllers/ordersController');

function routeComments(app){
    app.route('/orders')
        .get(commentController.getAllorders)
        .post(commentController.addOrder);

    app.route('/orders/:OrderID')
        .delete(commentController.deleteComment);

    app.route('/orders/account/:AccountID')
        .get(commentController.getAllOrdersbyAcount);

    // app.route('/orders/game/:GameID')
    //     .get(commentController.getAllCommentsbyGame);

    app.route('/orders/upvote/:OrderID')
        .put(commentController.upvoteCommen)
        
    
    app.route('/orders/downvote/:OrderID')
        .put(commentController.downvoteCommen);
}

module.exports = {routeComments};