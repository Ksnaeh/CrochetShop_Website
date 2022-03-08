"use strict"
const paymentController = require ('../Controllers/paymentController');

function routePayments(app){

    //This URL will authenticate by comparing passwords
    app.route('/payment')
        .post(paymentController.addPayment);

    //url to get all users
    app.route('/payment')
        .get(paymentController.getAllPayments);
    
}

module.exports = {routePayments};