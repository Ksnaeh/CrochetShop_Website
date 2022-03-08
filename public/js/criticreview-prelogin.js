function fetchCritics() {
    var request = new XMLHttpRequest();

    request.open('GET', criticreview_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    criticreview_array = JSON.parse(request.responseText);
    };

    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showCriticReview(element) {

	console.log(criticreview_array.length);
	document.getElementById("emptyCritic1").innerHTML = "No critic reviews yet.";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("critic1").textContent = "Critic Reviews for " + movie_array[item].GameName;
    document.getElementById("criticBody1").textContent = "";

    for (var i = 0; i < criticreview_array.length; i++) {
        if (criticreview_array[i].GameName.trim() === movie_array[item].GameName.trim()) {
            document.getElementById("emptyCritic1").innerHTML = "";
            selectedMovieId = movie_array[item].GameID;
            star = "";
            
           var html = '<div class="text-left" style="width:100%; margin-bottom: 20px">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                      <table class="chicken">   \
										<tr><td class="text-right" style="width:20%; font-weight: bold; vertical-align: top"><p>Critic Name:</p></td>\
										<td><p style="margin-left: 10px; font-weight: bold">' +criticreview_array[i].CriticName + '</p></td></tr>\
										<tr><td class="text-right" style="width:20%; font-weight: bold; vertical-align: top"><p>Date Published:</p></td>\
										<td><p style="margin-left: 10px; font-size: 14px">' +criticreview_array[i].CriticDate + '</p></td></tr>\
									<tr><td class="text-right" style="font-weight: bold"><p>Rating:</p></td>\
									<td><p style="margin-left: 10px;font-size: 32px; font-weight: bold">'+ criticreview_array[i].CriticRating +'</p></td></tr>\
                                    <tr><td class="text-right" style="font-weight: bold; vertical-align: top"><br/><p>Written Review:</p></td>\
							<td><p id="rating' + i + '" style="margin-left: 10px; vertical-align:bottom">' + criticreview_array[i].CriticDesc +"</p></td></tr>  \
									\
									<tr style='style='margin-top: -40px''><td class='text-right' style='font-weight: bold'></td>\
                                    <td><p style='margin-left: 10px;margin-top: -20px'><a href="+ criticreview_array[i].CriticLink +">Read more!</a></p></td></tr></table>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
                
                
                
            
            document.getElementById("criticBody1").insertAdjacentHTML('beforeend', html);

           
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}



