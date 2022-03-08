var productno;

function fetchImages(element) {
	productno = element.getAttribute("item");
	localStorage.setItem("prodid",productno );
	
	var c = localStorage.getItem("someVarKey");
	console.log(c);
	if (c == "" || c == null){
		window.location = "desc_signed.html";
		window.location = "desc.html";
	}
	else{
		window.location = "desc_signed.html";
	}
   // window.location = "desc_signed.html";

}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function launchimages(){
	console.log("getting ur images...");
	
	var productid = localStorage.getItem("prodid");
	console.log(productid);

    var request = new XMLHttpRequest();
    
    request.open('GET', images_url, true);
    
    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    images_array = JSON.parse(request.responseText);
	
	
	showImages(productid);
	fetchProdDesc(productid);
    };
    
    request.send();
}

var count =0;

function showImages(productid) {
    //document.getElementById("emptyComment").innerHTML = "Nothing in cart yet. Shop now!";
	//document.getElementById("newComment").style.display = "none";
    currentIndex = productid;

    //document.getElementById("review").textContent = "User comments for " + movie_array[item].GameName;
    document.getElementById("imgBody").textContent = "";

	
	
    for (var i = 0; i < images_array.length; i++) {
		
        if (images_array[i].productid == currentIndex) {
			
			
			//document.getElementById("newComment").style.display = "block";
            //document.getElementById("emptyComment").innerHTML = "";
			//document.getElementById("review").innerHTML = "";

			// for (var x = 0; x < movie_array.length; i++){
			// 	console.log(comment_array[i].productName);
			// 	console.log(movie_array[x].price);
			// 	if (comment_array[i].productName ==  movie_array[x].productName){
			// 		console.log(movie_array[x].price);
			// 		tempPrice = movie_array[x].price;
			// 		break;
			// 	}
			// }
			// tempPrice *= comment_array[i].qty;
			
			//document.getElementById("review").innerHTML = "Total Price: $"+totalPrice;
            //selectedMovieId = movie_array[item].GameID;
            if (count == 0 ){
				var html = "<div class='carousel-item active'>\
			<img src='data:image/jpeg;base64, "+ images_array[i].img+" ' class='d-block w-100' alt='...'></div>";
			}
			else{
				var html = "<div class='carousel-item'>\
			<img src='data:image/jpeg;base64, "+ images_array[i].img+" ' class='d-block w-100' alt='...'></div>";
			}
           
            document.getElementById("imgBody").insertAdjacentHTML('beforeend', html);
			count++;

        }
    }
	//totalPrice += tempPrice;
	
	//document.getElementById("review").innerHTML = "Total Price: $"+totalPrice;
}

function fetchProdDesc(productid){
	var request = new XMLHttpRequest();
    request.open('GET', game_url, true); //Get request to the route link

    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the movies records into our movie array
		movie_array = "";
        movie_array = JSON.parse(request.responseText);

		displayProdDesc(productid);
        
    };
    //This command starts the calling of the movies web api
    request.send();
}

function displayProdDesc(productid){
	var productName = document.getElementById("productName");
	var productPrice = document.getElementById("productPrice");
	var productDesc = document.getElementById("productDesc");

	console.log(productid);
	
	for (var i = 0 ; i < movie_array.length; i++){

		if (movie_array[i].productid == productid){
			productName.innerHTML = "";
			productPrice.innerHTML = "";
			productDesc.innerHTML = "";

			productName.innerHTML = movie_array[i].productName;
			productPrice.innerHTML = "$" + movie_array[i].price;
			productDesc.innerHTML = movie_array[i].description;
		}
	}
}

// Submit or send the new comment to the server to be added.
function addToCart() {
	//var item = element.getAttribute("item");
    //currentIndex = item; 
    var order = new Object();
    var getuserid = localStorage.getItem("realnameID");
    order.ProductName = document.getElementById("productName").innerHTML; // Movie ID is required by server to create new comment 
    order.RealName = getuserid; // Value from HTML input text
    order.Qty = 1; // Value from HTML input text
    console.log(order);

	if (order.ProductName !== null && order.ProductName !== "" || order.RealName !== null && order.RealName !== ""){
		var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

		postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server

		postComment.setRequestHeader("Content-Type", "application/json");
		postComment.onload = function() {
			window.alert("Added to cart!");
			fetchComments(); // fetch all comments again so that the web page can have updated comments.
			location.reload();
			localStorage.removeItem("prodid" );
			window.location = "main.html";
			     
		};
	// Convert the data in Comment object to JSON format before sending to the server.
		//console.log(JSON.stringify(comment));
		postComment.send(JSON.stringify(order)); 
	}
	else{
		window.alert("Invalid/Missing fields!");
		//document.getElementById("signupForm").reset();
		
	}
}

