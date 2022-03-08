"use strict"
const accountController = require ('../Controllers/contactsController');

function routeContacts(app){
    //url to get all contacts
    app.route('/contacts')
        .get(accountController.getAllMessages)
        .post(accountController.addMessages);


    
}

module.exports = {routeContacts};