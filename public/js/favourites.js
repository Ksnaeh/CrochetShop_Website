function fetchFavourites() {
    
    var request = new XMLHttpRequest();
    
    
    request.open('GET', favourites_url, true);
    
    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    favourites_url_array = JSON.parse(request.responseText);
	
    };
    
    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showFavs(element) {
    document.getElementById("emptyFavourites").innerHTML = "No favourites yet. Add one now.";
    var item = element.getAttribute("item");
    currentIndex = item;
    
    console.log(favourites_url_array.length);
    
    document.getElementById("check").textContent = "Favourite games for " + getusers_array[item].Username;
    document.getElementById("favouritesBody").textContent = "";

    for (var i = 0; i < favourites_url_array.length; i++) {
        if (favourites_url_array[i].AccountID === getusers_array[item].AccountID) {
            
            var favaccountid = favourites_url_array[i].AccountID;
            var favgameid = favourites_url_array[i].GameID;
            
            
            document.getElementById("emptyFavourites").innerHTML = "";
            selectedMovieId = favourites_url_array[i].FavouriteID;
            star = "";
            var html = '<div class="text-right" style="width:100%; margin-bottom: 20px">\
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                 <h3 style="font-weight: bold; font-size: 20px; text-align:left; color: black">'+favourites_url_array[i].Username+'</h3> \
                                    <table class="chicken" > \
									\
									\
									<tr><td style="vertical-align: top"><p style="font-weight: bold">Favourite Game:</p></td>\
									<td class="text-left" ><p id="rating' + i + '" style="margin-left: 10px">' + favourites_url_array[i].GameName + '</p></td></tr>\
									\
									<tr><td>\
									<div class="col-1"><button href="#" data-dismiss="modal" item="' + i + '" type="button" class="btn btn-secondary btn-sm" onClick="deleteFavourites(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:5px; margin-left: -10px">Delete</button></div></td><td></td></tr></table>\
                                </div>                                                                                           \
                            </div>                                                                                              \
                        </div>';
            document.getElementById("favouritesBody").insertAdjacentHTML('beforeend', html);

        }
    }
}

function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
        var getuserid = localStorage.getItem("toxicAccountID");
        var getusername = localStorage.getItem("someVarKey");
        console.log(getusername);
    
        document.getElementById("userComments").value = "";
        document.getElementById("nickname").value = getusername;
    
		//totalUsers = getusers_array.length;
}   
  
// Submit or send the new comment to the server to be added.
function addCommen() {
    var comment = new Object();
    var getuserid = localStorage.getItem("toxicAccountID");
    var item = element.getAttribute("item");
    currentIndex = item;
    comment.GameID = movie_array[currentIndex].GameID; // Movie ID is required by server to create new comment 
    comment.AccountID = getuserid; // Value from HTML input text
    comment.UserReviewDesc = document.getElementById("userComments").value; // Value from HTML input text
    
	
    
	if (comment.AccountID !== null && comment.AccountID === "" || comment.UserReviewDesc !== null && comment.UserReviewDesc !== ""){
		var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

		postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server

		postComment.setRequestHeader("Content-Type", "application/json");
		postComment.onload = function() {
			window.alert("You have successfully added comments!");
			fetchComments(); // fetch all comments again so that the web page can have updated comments.     
		};
	// Convert the data in Comment object to JSON format before sending to the server.
		postComment.send(JSON.stringify(comment)); 
	}
	else{
		window.alert("Invalid/Missing fields!");
		document.getElementById("signupForm").reset();
		
	}
}

//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review

//This function deletes the selected comment in a specific movie
function deleteFavourites(element) {
    var response = confirm("Are you sure you want to remove this game from your favourites?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_favourite_url = favourites_url + "/" + favourites_url_array[item].FavouriteID;
        var eraseFavourite = new XMLHttpRequest();
        eraseFavourite.open("DELETE", delete_favourite_url, true);
        eraseFavourite.onload = function() {
            fetchFavourites();
        };
        eraseFavourite.send();
    }
}

//This function deletes the selected comment in a specific movie
function addFavourites(element) {
    //var response = confirm("Are you sure you want to add this game to favourites?");
    var item = element.getAttribute("item");
    currentIndex = item; 
   var getuserid1 = localStorage.getItem("toxicAccountID");
   
   //if (response == true) {
       for (var count = 0; count < favourites_url_array.length; count++) {
        if (favourites_url_array[count].GameID == movie_array[currentIndex].GameID && favourites_url_array[count].AccountID == getuserid1) {
                var hi_id1 = favourites_url_array[count].AccountID;
                var bye_id = favourites_url_array[count].GameID;
            
            var mesage = "1";
            
            }
        };
        console.log(mesage);
        
    
        var favourites = new Object();
        var getuserid = localStorage.getItem("toxicAccountID");
        var item = element.getAttribute("item");
        currentIndex = item;
        
        favourites.GameID = movie_array[currentIndex].GameID; // Movie ID is required by server to create new comment 
        favourites.AccountID = getuserid; // Value from HTML input text
        
        
        if (favourites.AccountID !== null || favourites.GameID !== null){
            if (mesage == "1"){
                        window.alert("You've already added this game into favourites!");

            }
            else{

                    var newFavourites = new XMLHttpRequest(); // new HttpRequest instance to send comment

                    newFavourites.open("POST", favourites_url, true); //Use the HTTP POST method to send data to server

                    newFavourites.setRequestHeader("Content-Type", "application/json");
                    newFavourites.onload = function() {
                        console.log("hello");
                        window.alert("You have successfully added your favourite game!");
                        fetchFavourites(); // fetch all comments again so that the web page can have updated comments.     
                    };
                 //Convert the data in Comment object to JSON format before sending to the server.
                    newFavourites.send(JSON.stringify(favourites )); 
                }
            
    }
		
}

