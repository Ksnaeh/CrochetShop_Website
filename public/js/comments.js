function fetchComments() {
    
    var request = new XMLHttpRequest();
    
    request.open('GET', comment_url, true);
    
    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    comment_array = JSON.parse(request.responseText);
	
	
	getMovieData();
    };
    
    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function getMovieData() {
    var request = new XMLHttpRequest();
    request.open('GET', game_url, true); //Get request to the route link

    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the movies records into our movie array
        movie_array = JSON.parse(request.responseText);

        showMovieComments();
        
    };
    //This command starts the calling of the movies web api
    request.send();
}

var totalPrice;

function showMovieComments() {
    //document.getElementById("emptyComment").innerHTML = "Nothing in cart yet. Shop now!";
	//document.getElementById("newComment").style.display = "none";
	var getuserid = localStorage.getItem("realnameID");

	//getMovieData();
    //var item = element.getAttribute("item");
    //currentIndex = item;

    //document.getElementById("review").textContent = "User comments for " + movie_array[item].GameName;
    document.getElementById("commentBody").textContent = "";
	document.getElementById("summary").textContent = "";
	console.log(movie_array);

	totalPrice = 0;
	
	var tempPrice;
    for (var i = 0; i < comment_array.length; i++) {
		
        if (comment_array[i].realname === getuserid) {
			
			//document.getElementById("newComment").style.display = "block";
            //document.getElementById("emptyComment").innerHTML = "";
			//document.getElementById("review").innerHTML = "";
			console.log(comment_array[i].productName);
			for (var x = 0; x < movie_array.length; x++){
				
				
				if (comment_array[i].productName ==  movie_array[x].productName){
					console.log(movie_array[x].price);
					tempPrice = movie_array[x].price;
					break;
				}
			}
			tempPrice *= comment_array[i].qty;
			
			//document.getElementById("review").innerHTML = "Total Price: $"+totalPrice;
            //selectedMovieId = movie_array[item].GameID;

            star = "";
            var html = '<div class="text-right" style="width:100%; margin-bottom: 20px">\
			<div class="card">                                                                                  \
				<div class="card-body">                                                                         \
	<h3 style="font-weight: bold; font-size: 20px; text-align:left">'+comment_array[i].productName+'</h3> \
					<table class="chicken"> \
					\
					\
					<p style="font-weight: bold; text-align: left">Qty:</p></div>\
					<div class="row">\
					<div class="col-1" ><button id="increment1" href="#"  item="' + i + '" type="button" class="btn btn-success btn-sm" onClick="upvoteComment(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-right: -5px">+</button></div></td>\
					<div class="col-sm-1" ><div class="row"><span id="quantitas" style="margin-left: 25px; text-align:center;">'+ comment_array[i].qty +'</span></div></div>\
					<div class="col-1"><button id="decrement1" href="#"  item="' + i + '" type="button" class="btn btn-danger btn-sm" onClick="downvoteComment(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-left:-20px">-</button></div><br/>\
					</div>\
					<p style="font-weight: bold; text-align: left"><span id="singlePrice">Price: $'+ tempPrice +'</p></div>\
				<div class="row">\
					<div class="col-1"><button href="#" data-dismiss="modal" item="' + i + '" type="button" class="btn btn-secondary btn-sm" onClick="deleteComment(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:10px">Remove Order</button></div></div>\
				</div>                                                                                          \
			</div>                                                                                              \
		</div>';
			
		if (i == comment_array.length-1){
			var html1 = "<div class='row'><div class='col'><p>"+comment_array[i].productName+"</p></div>\
			<div class='col'><p>x "+ comment_array[i].qty +"</p></div> \
			<div class='col'><p>$"+tempPrice+"</p></div></div>\
			\
			<div class='row'><div class='col'><p>delivery fee</p></div>\
			<div class='col'><p></p></div> \
			<div class='col'><span id='deliveryfee1'>$3.50</span></div></div>";

		}
		else {
			var html1 = "<div class='row'><div class='col'><p>"+comment_array[i].productName+"</p></div>\
		<div class='col'><p>x "+ comment_array[i].qty +"</p></div> \
		<div class='col'><p>$"+tempPrice+"</p></div></div>";
		}
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
			document.getElementById("summary").insertAdjacentHTML('beforeend', html1);

			document.getElementById("totalpricing").innerHTML = "";

			totalPrice = totalPrice + tempPrice + 3.5;

			document.getElementById("totalpricing").innerHTML = "$"+totalPrice;
        }
		else{
			
		}
    }
	//totalPrice += tempPrice;
	
	//document.getElementById("review").innerHTML = "Total Price: $"+totalPrice;
}
   
  



// Submit or send the new comment to the server to be added.
function checkoutOrder() {
	//var item = element.getAttribute("item");
    //currentIndex = item; 
    var checkout = new Object();
    var getuserid = localStorage.getItem("realnameID");

	console.log(getuserid);
	console.log(comment_array);
	

	for (var i = 0; i < comment_array.length; i++){
		if (comment_array[i].realname == getuserid){

			checkout.OrderID = comment_array[i].orderid; // Value from HTML input text
			checkout.ProductName = comment_array[i].productName; // Movie ID is required by server to create new comment 
			checkout.Realname = document.getElementById("realName").value; // Value from HTML input text

			var pricetext = document.getElementById("singlePrice").innerHTML
			const myArray = pricetext.split("$");
			finalprice = myArray[1];

			checkout.TotalPrice = finalprice; // Value from HTML input text

			var date = new Date();
			date.setDate(date.getDate() + 2);
			date = date.toISOString().split('T')[0]

			checkout.DeliveryTime = date
			//checkout.Price = movie_array[currentIndex].price;
			checkout.qty = comment_array[i].qty;

			console.log(checkout);
			var postComment = new XMLHttpRequest();

			postComment.open("POST", criticreview_url, true); //Use the HTTP POST method to send data to server

			postComment.setRequestHeader("Content-Type", "application/json");
			postComment.onload = function() {

			};
		// Convert the data in Comment object to JSON format before sending to the server.
			//console.log(JSON.stringify(comment));
			postComment.send(JSON.stringify(checkout)); 

			
			deleteCommentDiscrete(comment_array[i].orderid); 

		}
	}
				
	AddToPayment(); 
}


//TODO: addtopayment POST 
function AddToPayment() {
	//var item = element.getAttribute("item");
    //currentIndex = item; 
	var response = confirm("Proceed to checkout? Items are not cancellable!");
	
	if (response == true) {
		var payment = new Object();
		var getuserid = localStorage.getItem("realnameID");
		var getusername = document.getElementById("realName").value;
		var getuseraddress = document.getElementById("realAddress").value;
		var getuseremail = localStorage.getItem("email");

		console.log(getuserid);
		console.log(comment_array);
		

		for (var i = 0; i < comment_array.length; i++){
			if (comment_array[i].realname == getuserid){

				payment.email = getuseremail; // Value from HTML input text
				payment.address = getuseraddress; // Movie ID is required by server to create new comment 
				payment.realname = getusername; // Value from HTML input text

				var pricetext = totalPrice;

				payment.totalPrice = pricetext; // Value from HTML input text

			

				console.log(payment);


				var postComment = new XMLHttpRequest();

				postComment.open("POST", payment_url, true); //Use the HTTP POST method to send data to server

				postComment.setRequestHeader("Content-Type", "application/json");
				postComment.onload = function() {
					window.alert("An email regarding your payment will be sent soon!");
					location.reload();
				};
			// Convert the data in Comment object to JSON format before sending to the server.
				//console.log(JSON.stringify(comment));
				postComment.send(JSON.stringify(payment)); 
				


			}
		}
	}
    
}


function deleteCommentDiscrete(element) {
    
		var item = element; //get the current item
		console.log(item);
		var delete_comment_url = comment_url + "/" + item;
		var eraseComment = new XMLHttpRequest();
		eraseComment.open("DELETE", delete_comment_url, true);
		eraseComment.onload = function() {
			//location.reload();

			//TODO: call function to update quantity based on number of items
		};
		eraseComment.send();
    
}



//This function deletes the selected comment in a specific movie
function deleteComment(element) {
    var response = confirm("Are you sure you want to remove this from your cart?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_comment_url = comment_url + "/" + comment_array[item].orderid;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function() {
            fetchComments();
        };
        eraseComment.send();
    }
}

//upvote comment (TODO: get product qty and match if more than)
function upvoteComment(element) {
	var item = element.getAttribute("item"); 
	if (comment_array[item].qty < 10) {
		var item = element.getAttribute("item"); 
		var upvote_comment_url = comment_url + "/upvote/" + comment_array[item].orderid;
		var upvoteComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
		upvoteComment.open("PUT", upvote_comment_url, true); 		
		upvoteComment.onload = function() {
			fetchComments();
		};
		upvoteComment.send();
	}
	else{
		alert("Sorry! We only accept orders up to 10 quantities!");
	}
}


function updatePrice(item) {
	
	var qty = document.getElementById("quantitas").innerHTML;
	var newprice = comment_array[item].temprice * qty;
	console.log(qty);
	console.log(newprice);

	var payment = new Object();

	payment.Temprice = newprice
	
	var upvote_comment_url = comment_url + "/update/" + comment_array[item].orderid;
	var upvoteComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
	upvoteComment.open("PUT", upvote_comment_url, true); 		
	upvoteComment.onload = function() {
		fetchComments();
	};
	upvoteComment.send();
}

//downvote comment (TODO: get product qty and match if more than)
function downvoteComment(element) {
	var item = element.getAttribute("item"); 
	if (comment_array[item].qty > 1) {
		var item = element.getAttribute("item"); 
		var downvote_comment_url = comment_url + "/downvote/" + comment_array[item].orderid;
		var downvoteComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
		downvoteComment.open("PUT", downvote_comment_url, true); 		
		downvoteComment.onload = function() {
			fetchComments();
		};
		downvoteComment.send();
	}
	else{
		alert("quantity cannot be zero!");
	}
}




//Change password
function updatePassword() {
	var response = confirm("Are you sure you want to change password?");
	if (response == true) {
		var getuserid = localStorage.getItem("someVarKey");
		var edit_password_url = "login/change/" + getuserid;
		var updatePassword = new XMLHttpRequest(); // new HttpRequest instance to send request to server
		updatePassword.open("PUT", edit_password_url, true); //The HTTP method called 'PUT' is used here as we are updating data
		
		updatePassword.setRequestHeader("Content-Type", "application/json");
		
		var newPassword = document.getElementById("edituserPassword").value;
		
		updatePassword.onload = function() {
			
		};
		updatePassword.send(JSON.stringify({"Password": newPassword}));

		location.reload();
	}
}

