"use strict";

const express = require("express");

//TODO: change these routes thanks
const routeMovies = require('../Crochet_EShop/routes/routeProducts');
const routeComments = require('../Crochet_EShop/routes/routeOrders');
const routeCriticreview = require('../Crochet_EShop/routes/routeCheckout');
const routeUsers = require('../Crochet_EShop/routes/routeUsers');
const routePayments = require('../Crochet_EShop/routes/routePayments');
const routeContacts = require('../Crochet_EShop/routes/routeContacts');
const routeImages = require('../Crochet_EShop/routes/routeImages');
const bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeMovies.routeProducts(app);
routeComments.routeComments(app);
routeCriticreview.routeCriticReview(app);
routeUsers.routeUsers(app);
routePayments.routePayments(app);
routeImages.routeImages(app);

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
