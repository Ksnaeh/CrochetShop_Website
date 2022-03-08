function fetchCritic() {
    var request = new XMLHttpRequest();

    request.open('GET', criticreview_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    criticreview_array = JSON.parse(request.responseText);

    showCriticReview();
    console.log("sup");
    console.log(criticreview_array);
    };

    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showCriticReview() {
    //document.getElementById("emptyCheckout").innerHTML = "Nothing in cart yet. Shop now!";
	var getuserid = localStorage.getItem("realnameID");
    //var item = element.getAttribute("item");
    //currentIndex = item;
    console.log("sup2");
    //document.getElementById("review").textContent = "User comments for " + movie_array[item].GameName;
    //document.getElementById("checkoutBody").textContent = "";


	var tempPrice;
    for (var i = 0; i < criticreview_array.length; i++) {
        if (criticreview_array[i].realname === getuserid) {
			console.log("sup4s");

            document.getElementById("emptyCheckout").innerHTML = "";

			
			//document.getElementById("review").innerHTML = "Total Price: $"+totalPrice;
            //selectedMovieId = movie_array[item].GameID;
            star = "";
            var html = '<div class="text-right" style="width:100%; margin-bottom: 20px">\
            <div class="card">                                                                                  \
                <div class="card-body">                                                                         \
    <h3 style="font-weight: bold; font-size: 20px; text-align:left">'+criticreview_array[i].productName+'</h3> \
                    <p style="color: #505050; font-style: italic; font-size: 14px; text-align: left">Recipent Name: '+criticreview_array[i].realname + '</p>\
                    <table class="chicken"> \
                    \
                    \
                    <p style="font-weight: bold; text-align: left">Qty: '+ criticreview_array[i].qty +'</p></div>\
                    <p style="font-weight: bold; text-align: left">Delivery Time: '+ criticreview_array[i].deliveryTime +'</p>\
                    <p style="font-weight: bold; text-align: left"><span id="singlePrice">Price: $'+ criticreview_array[i].totalPrice +'</p></div>\
                                                                                                         \
            </div>                                                                                              \
        </div>';
        document.getElementById("checkoutBody").insertAdjacentHTML('beforeend', html);
        }
    }
}



