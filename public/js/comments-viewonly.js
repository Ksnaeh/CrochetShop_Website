function fetchCommentar() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    comment_array = JSON.parse(request.responseText);
    };

    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showMovieComments(element) {
    document.getElementById("emptyComment1").innerHTML = "No comments yet.";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("review1").textContent = "User comments for " + movie_array[item].GameName;
    document.getElementById("commentBody1").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].GameName.trim() === movie_array[item].GameName.trim()) {
            document.getElementById("emptyComment1").innerHTML = "";
            selectedMovieId = movie_array[item].GameID;
            star = "";
            var html = '<div class="text-right" style="width:100%; margin-bottom: 20px">\
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                 <h3 style="font-weight: bold; font-size: 20px; text-align:left">'+comment_array[i].Username+'</h3> \
									<p style="color: #505050; font-style: italic; font-size: 12px; text-align: left">Date Posted: '+comment_array[i].UserReviewDate + '</p>\
                                    <table class="chicken"> \
									\
									\
									<tr><td style="vertical-align: top"><p style="font-weight: bold">Comment:</p></td>\
									<td class="text-left" ><p id="rating' + i + '" style="margin-left: 10px">' + comment_array[i].UserReviewDesc + '</p></td></tr>\
									<tr><td><p style="font-weight: bold">Upvotes:</p></td>\
									<td class="text-left" ><p style="margin-left: 10px">'+ comment_array[i].UserReviewUpvote +'</p></td></tr></table>\
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>';
            document.getElementById("commentBody1").insertAdjacentHTML('beforeend', html);

            
            
        }
    }
}



