"use strict"
const accountController = require ('../Controllers/accountController');

function routeUsers(app){

    //This URL will authenticate by comparing passwords
    app.route('/login')
        .post(accountController.authenticate);

    //url to get all users
    app.route('/users')
        .get(accountController.getAllUsers);

    //url to change password
    app.route('/login/change/:Username')
        .put(accountController.updatePassword);

    //URL to add users
    app.route('/adduser')
        .post(accountController.addAcc);

    //This URL will authenticate by using database
    app.route('/loginByDB')
        .post(accountController.authenticateByDB);
    
    // app.route('/login/delete/:Username')
    //     .delete(accountController.deleteUser);
    
}

module.exports = {routeUsers};