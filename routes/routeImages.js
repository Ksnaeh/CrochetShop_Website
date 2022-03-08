"use strict"
const imageController = require ('../Controllers/imageController');

function routeImages(app){

    //This URL will authenticate by comparing passwords
    app.route('/images')
        .get(imageController.getAllImages);
    
}

module.exports = {routeImages};