function fetchProfile() {
    var request = new XMLHttpRequest();

    request.open('GET', getusers, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    getusers_array = JSON.parse(request.responseText);
    
    fetchFavourites();
        
	showProfile();
    };

    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showProfile(element) {
    var table = document.getElementById("moviesTable");
    var movieCount = 0;
    var message = "";
	var getusername = localStorage.getItem("someVarKey");
	console.log(getusername);
    table.innerHTML = "";
    totalUsers = getusers_array.length;
	
    
    for (var count = 0; count < totalUsers; count++) {
        if (getusers_array[count].Username == getusername) {
            hi_id = getusers_array[count].AccountID;
            console.log(hi_id);
            
            var cell = '<div class="siao1">                                                                                                                                                                                                   \
							<div class="loco">\
                           <div class="row" style="float: none; margin: 0 auto; margin-left: 15px" >                                                                                                                                                                                       \
                                                                                                                                                                                                                          \
                                    <div class="row">                                                                             <div class="col-11">                                                                                                               \
                                        <h3 class="fugl" style="margin-bottom: 30px"> Profile Details</h3>                                                <table class="chicken">                                                \
                                            <tr>                                                                         <td class="profilenames"><p class="bird">Username:</p></td>\
												<td><p class="bird">' + getusers_array[count].Username + '</p></td>\
											</tr><tr> \
                                        		<td class="profilenames"><p class="bird">Email Address:</p></td>      <td class="profilenames"><p class="bird">'+ getusers_array[count].Email +'</p></td>          </tr><tr>                                                             <td class="profilenames"><p class="bird">Role:</p></td>                                   <td class="profilenames"><p class="bird">'+ getusers_array[count].Role +'  </p></td></tr>                       </tr></table></div>                     \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="col-11">                                                                                                                                                                                           \
                                                                                                         \
                                                                                                                                                \
                                            <button href="#" data-toggle="modal" data-target="#editPasswordModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="editPassword(this)" style="color: #FFFFFF; font-family: Verdana; margin-bottom: 5px; margin-top:10px">Change Password</button>\
			</div> <div class="col-11">\
                                            <button href="#" data-toggle="modal" data-target="#favouriteModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showFavs(this)" style="color: #FFFFFF; font-family: Verdana;margin-bottom: 5px">Show Favourites</button> \
							</div> <div class="col-11">\
											\
                                         </div>                                                                                                                                                                                                 \
                                    </div>                                                                                                                                                                                                      \
                                                                                                                                                                                                                                         \
                            </div>                                                                                   </div>                                                                                                                           \
                        </div>';

            table.insertAdjacentHTML('beforeend', cell);
            accountid = getusers_array[count].AccountID;
            movieCount++;
        }	
    }

    message = getusername + "'s profile page";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

//change password
function editPassword(element) {
    var item = element.getAttribute("item");

    currentIndex = item;
    console.log(currentIndex);
	
    document.getElementById("edituserPassword").value = getusers_array[item].Password;
    
}
//This function sends the Comment data to the server for updating
function updatePassword() {
	var response = confirm("Are you sure you want to change password?");
	if (response == true) {
		var edit_password_url = credentials + "/change/" + getusers_array[currentIndex].Username;
		var updatePassword = new XMLHttpRequest(); // new HttpRequest instance to send request to server
		updatePassword.open("PUT", edit_password_url, true); //The HTTP method called 'PUT' is used here as we are updating data
		
		updatePassword.setRequestHeader("Content-Type", "application/json");
		
		getusers_array[currentIndex].Password = document.getElementById("edituserPassword").value;
		
		updatePassword.onload = function() {
			showProfile();
	};
	updatePassword.send(JSON.stringify(getusers_array[currentIndex]));
	}
}


