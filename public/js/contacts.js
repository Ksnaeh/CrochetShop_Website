
// Submit or send the new comment to the server to be added.
function contactsubmit() {
    var contacts = new Object();
    contacts.name = document.getElementById("contactname").value;; // Movie ID is required by server to create new comment 
    contacts.email = document.getElementById("contactemail").value;
    contacts.message = document.getElementById("contactmessage").value; // Value from HTML input text
    
	
    
	if (contacts.name !== null && contacts.name === "" || contacts.email !== null && contacts.email !== "" || contacts.message !== null && contacts.message !== ""){
		var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

		postComment.open("POST", contacts_url, true); //Use the HTTP POST method to send data to server

		postComment.setRequestHeader("Content-Type", "application/json");
		postComment.onload = function() {
			window.alert("Thanks! I will contact you soon!");
			location.reload();
		};
	// Convert the data in Comment object to JSON format before sending to the server.
		postComment.send(JSON.stringify(contacts)); 
	}
	else{
		window.alert("Invalid/Missing fields!");
		//document.getElementById("signupForm").reset();
		
	}
}


