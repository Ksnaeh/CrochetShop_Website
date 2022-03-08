// JavaScript Document

var game_url = "/Product";
var movie_array = []; // This creates an empty movie array
var movieCount = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "";
var gamegenre = "";
var currentIndex = 0;

//search games
var search_games = "/Product/search";
var search_games_array = [];
//end search games

var comment_url = "/orders";
var comment_array = [] //creates an empty comment array

var criticreview_url = "/checkout";
var criticreview_array = [] //creates an empty comment array

var credentials = "/login";
var credentials_array = [] //creates an empty comment array

var prudential = "/addusers";
var prudential_array = [] //creates an empty comment array

var favourites_url = "/favourites";
var favourites_url_array = []

var payment_url = "/payment";
var payments_array = []

var getusers = "/users";
var getusers_array = []

var contacts_url = "/contacts";
var contacts_array = []

var images_url = "/images";
var images_array = []
// var getname = foo;
// var getrealname = foo1;
localStorage.setItem("someVarKey", getname);
localStorage.setItem("realnameID", getrealname);



