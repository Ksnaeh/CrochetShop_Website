
//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getMovieData() {
    var request = new XMLHttpRequest();
    request.open('GET', game_url, true); //Get request to the route link

    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the movies records into our movie array
        movie_array = JSON.parse(request.responseText);

        //fetch the comments as well
        fetchComments();
		
		fetchCritic();
        //call the function so as to display all movies tiles for "Now Showing"
        displayMovies(category, gamegenre);
		
		displayGames(gamegenre);
        
        fetchFavourites();
    };
    //This command starts the calling of the movies web api
    request.send();
}

//This function is to display the movies tiles
//that filters based on "Now Showing" or "Coming Soon"
function displayMovies(category, gamegenre) {
    var table = document.getElementById("moviesTable");
    var movieCount = 0;
    var message = "";

    table.innerHTML = "";
    totalMovies = movie_array.length;
    for (var count = 0; count < totalMovies; count++) {
        var thumbnail = movie_array[count].img;
        var title = movie_array[count].productName;
        var date = movie_array[count].price;
        var genre = movie_array[count].qty;
        
		if (movie_array[count].GamePopularity == category) {
            
            var cell = '<div class="siao">                                                                                                                                                                                                   \
							<div class="loco">\
                           <div class="row" style="float: none; margin: 0 auto;" >                                                                                                                                                                                       \
                                                                                                                                                                                                                          \
                                    <div class="col-sm-3">                                                                                                                                                                                          \
                                        <a id="movies" href="#" data-toggle="modal" data-target="#movieModalView" item=' + count + '>                                                                                                \
                                            <img class="img-fluid img-thumbnail" src=' + thumbnail + ' height = "auto" style="text-align: center"/>                                                                                                                                       \
                                        </a>                                                                                                                                                                                                    \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="col">                                                                                                                                                                                           \
                                          <div class="row">                                                              <div class"col-md-auto"> \
                                            <p class="fugl">' + title + '</p>  </div>   </div>\
			<div class="row">\
											<div class="col-md-auto" style="margin-left: -15px"><p style="font-size: 14px;">Price: $'+ date +'</p></div></div>                                <div class="row">  \
											<div class="col-md-auto" style="margin-left: -15px"><p style="font-size: 14px; color:#DDDDDD">Quantity: '+ genre +'</p></div></div>                                <div class="row"> \
                                            <button href="#" data-toggle="modal" data-target="#movieModalView" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showMovieDetails(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:10px">See More</button>\
			</div> <div class="row">\
                                            <button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showMovieComments(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Comments</button> \
							</div> <div class = "row">\
											<button href="#" data-toggle="modal" data-target="#criticModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showCriticReview(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Critic Review</button></div>\
                                    <div class = "row">\
											<button href="#" data-toggle="modal" data-dismiss="Modal" item="' + count + '" type="button" class="btn btn-warning btn-sm text-dark" onClick="addOrders(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Add to favourites</button></div>\
									\
                                         </div>                                                                                                                                                                                                 \
                                    </div>                                                                                                                                                                                                      \
                                                                                                                                                                                                                                         \
                            </div>                                                                                   </div>                                                                                                                           \
                        </div>';

            table.insertAdjacentHTML('beforeend', cell);
            movieCount++;
			message = movieCount + " " + category;
        }
		else if (category == ""){
			var cell = '<div class="siao">                                                                                                                                                                                                   \
							<div class="loco">\
                           <div class="row" style="float: none; margin: 0 auto;" >                                                                                                                                                                                       \
                                                                                                                                                                                                                          \
                                    <div class="col-sm-3">                                                                                                                                                                                          \
                                        <a id="movies" href="#" data-toggle="modal" data-target="#movieModalView" item=' + count + '>                                                                                                \
                                            <img class="img-fluid img-thumbnail" src=' + thumbnail + ' height = "auto" style="text-align: center"/>                                                                                                                                       \
                                        </a>                                                                                                                                                                                                    \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="col">                                                                                                                                                                                           \
                                          <div class="row">                                                              <div class"col-md-auto"> \
                                            <p class="fugl">' + title + '</p>  </div>   </div>\
			<div class="row">\
											<div class="col-md-auto" style="margin-left: -15px"><p style="font-size: 14px;">Price: $'+ date +'</p></div></div>                                <div class="row">  \
											<div class="col-md-auto" style="margin-left: -15px"><p style="font-size: 14px; color:#DDDDDD">Quantity: '+ genre +'</p></div></div>                                <div class="row"> \
                                            <button href="#" data-toggle="modal" data-target="#movieModalView" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showMovieDetails(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:10px">See More</button>\
			</div> <div class="row"> \
                                            \
							</div> <div class = "row" style="margin-left: 5px; margin-bottom: 5px; margin-top: 10px">\
                            <div class=”col-md-auto”><div class ="row"><button id="increment" class = "btn btn-success btn-sm" style="margin-right: 10px" onClick="increment()">+</button><span id="quantities">0</span><button class = "btn btn-danger btn-sm"  style="margin-left: 10px" id="decrement" onClick="decrement()">-</button></div></div></div>\
                                        <div class = "row">\
											<button href="#" data-toggle="modal" data-dismiss="Modal" item="' + count + '" type="button" class="btn btn-warning btn-sm text-dark" onClick="addOrders(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Add to Cart!</button></div>\
									\
                                         </div>                                                                                                                                                                                                 \
                                    </div>                                                                                                                                                                                                      \
                                                                                                                                                                                                                                         \
                            </div>                                                                                   </div>                                                                                                                           \
                        </div>';

            table.insertAdjacentHTML('beforeend', cell);
            movieCount++;
			message = movieCount + " products in total";
		}
		
    }

   
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function displayGames(gamegenre) {
    var table = document.getElementById("moviesTable");
    var movieCount = 0;
    var message = "";

    table.innerHTML = "";
    totalMovies = movie_array.length;
    for (var count = 0; count < totalMovies; count++) {
			var thumbnail = movie_array[count].thumb;
            var title = movie_array[count].GameName;
			var date = movie_array[count].GameRelease;
			var genre = movie_array[count].GameGenre;
        if (movie_array[count].GameGenre === gamegenre) {
            
            var cell = '<div class="siao">                                                                                                                                                                                                   \
							<div class="loco">\
                           <div class="row" style="float: none; margin: 0 auto;" >                                                                                                                                                                                       \
                                                                                                                                                                                                                          \
                                    <div class="col-sm-3">                                                                                                                                                                                          \
                                        <a id="movies" href="#" data-toggle="modal" data-target="#movieModalView" item=' + count + '>                                                                                                \
                                            <img class="img-fluid img-thumbnail" src=' + thumbnail + ' height = "auto" style="text-align: center"/>                                                                                                                                       \
                                        </a>                                                                                                                                                                                                    \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="col">                                                                                                                                                                                           \
                                          <div class="row">                                                              <div class"col-md-auto"> \
                                            <p class="fugl">' + title + '</p>  </div>   </div>\
			<div class="row">\
											<div class="col-md-auto" style="margin-left: -15px"><p style="font-size: 14px;">Published at: '+ date +'</p></div></div>                                <div class="row">  \
											<div class="col-md-auto" style="margin-left: -15px"><p style="font-size: 14px; color:#DDDDDD">Genre: '+ genre +'</p></div></div>                                <div class="row"> \
                                            <button href="#" data-toggle="modal" data-target="#movieModalView" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showMovieDetails(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:10px">See More</button>\
			</div> <div class="row">\
                                            <button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showMovieComments(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Comments</button> \
							</div> <div class = "row">\
											<button href="#" data-toggle="modal" data-dismiss="modal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="addFavourites(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Critic Review</button></div>\
                                    <div class = "row">\
											<button href="#" data-toggle="modal" data-dismiss="Modal" item="' + count + '" type="button" class="btn btn-warning btn-sm text-dark" onClick="addOrders(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Add to favourites</button></div>\
									\
                                         </div>                                                                                                                                                                                                 \
                                    </div>                                                                                                                                                                                                      \
                                                                                                                                                                                                                                         \
                            </div>                                                                                   </div>                                                                                                                           \
                        </div>';

            table.insertAdjacentHTML('beforeend', cell);
            movieCount++;
			message = movieCount + " " + gamegenre + " Games";
        }
		else if (gamegenre == ""){
			
			displayMovies(category);
			
			//table.insertAdjacentHTML('beforeend', cell);
            movieCount++;
			message = movieCount + " products in total";
		}
		
    }

   
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}


function listNowGames() {
    category = "";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.remove("active");
	document.getElementById("laterMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the "Released Games" games
function listNowShowingMovies() {
    category = "Released Games";
    displayMovies(category);
    document.getElementById("nowMenu").classList.add("active");
    document.getElementById("comingMenu").classList.remove("active");
	document.getElementById("laterMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
	
}

//This function is to display the "Most Played" games
function listComingMovies() {
    category = "Most Played";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.add("active");
	document.getElementById("laterMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function calls "New Release" games
function listNewMovies() {
    category = "New Release";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.remove("active");
	document.getElementById("laterMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showMovieDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("gameTitle").textContent = movie_array[item].productName;
    document.getElementById("moviePoster").textContent = movie_array[item].price;
    document.getElementById("genre").textContent = movie_array[item].qty;
    document.getElementById("director").textContent = movie_array[item].description;
    //document.getElementById("release").textContent = movie_array[item].GameRelease;
    //document.getElementById("story").textContent = movie_array[item].GamePopularity;
	document.getElementById("gamePoster").src = movie_array[item].img;
    //document.getElementById("trailer1").src = movie_array[item].Trailer;
}

//THIS PART IS TO FILTER GAMES BASED ON THEIR GENRE
function listFirstPerson() {
    gamegenre = "First Person";
    displayGames(gamegenre);
}
function listThirdPerson() {
    gamegenre = "Third Person";
    displayGames(gamegenre);
}
function listMOBA() {
    gamegenre = "MOBA";
    displayGames(gamegenre);
}
function listBattleRoyale() {
    gamegenre = "Battle Royale";
    displayGames(gamegenre);
}
//END OF THIS PART


var count=0;

function increment(){
    // count = 0;
    const button = document.getElementById("increment");
    // const button2 = document.getElementById("decrement");
    document.getElementById("quantities").innerHTML = ++count;
    // button.addEventListener("click", function() {

        
    // });
}

function decrement(){
    // const button = document.getElementById("increment");
    const button2 = document.getElementById("decrement");
    if (count != 0){
        document.getElementById("quantities").innerHTML = --count;
    }

    // button2.addEventListener("click", function() {
        
    //     //document.getElementById("quantities").innerHTML = --count;
    // });
}


//This function opens a new window/tab and loads the
//particular movie in the cinema website
function buyTicket() {
    window.open(movie_array[currentIndex].Trailer, "_blank");
}

