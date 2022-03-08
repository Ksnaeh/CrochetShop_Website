function login(){
    var credentials = new Object();

    
    credentials.username = document.getElementById("username").value;
    credentials.password = document.getElementById("password").value;
    
    var request = new XMLHttpRequest();
    
    request.open("POST", "/loginByDB", true);
    request.setRequestHeader("Content-Type", "application/json" );
    request.onload = function(){
        response = JSON.parse(request.responseText);
        if (response.message == "1"){
            //window.location = "main.html?username=" + credentials.username + "&AccountID=" + hi_id;
            console.log(credentials.username);
            //console.log(hi_id);
            fetchProfileID();
        }
        else{
            window.alert("Incorrect username or password!")
            document.getElementById("loginForm").reset();}
    };
    
    request.send(JSON.stringify(credentials));

function fetchProfileID() {
    var request = new XMLHttpRequest();

    request.open('GET', getusers, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    getusers_array = JSON.parse(request.responseText);

    showID();
    };

    request.send();
}


function showID() {
    
    //var movieCount = 0;
    var message = "";
   
   
    totalUsers = getusers_array.length;

    for (var count = 0; count < totalUsers; count++) {
        if (getusers_array[count].username == credentials.username) {
            var hi_id = getusers_array[count].username;
            localStorage.setItem("someVarKey", credentials.username);
            localStorage.setItem("realnameID", hi_id);
            localStorage.setItem("email", getusers_array[count].email);
            // console.log(hi_id);
            window.location = "main.html?username=" + credentials.username + "&AccountID=" + hi_id;
           
        }
    };
}
}

function signup(){
    var prudential = new Object();
    
    prudential.Username = document.getElementById("addusername").value;
    prudential.Password = document.getElementById("addpassword").value;
    prudential.Email = document.getElementById("addemail").value;

    var cfmpassword = document.getElementById("cfmpassword").value;
    var cfmemail = document.getElementById("cfmemail").value;
    
    if (prudential.Username.trim() !== null && prudential.Username.trim() !== "" || prudential.Password.trim() !== null && prudential.Password.trim() !== "" || prudential.Email.trim() !== null && prudential.Email.trim() !== ""){
        if (prudential.Password == cfmpassword && prudential.Email == cfmemail){
            var request = new XMLHttpRequest();

            request.open("POST", "/adduser", true);
            request.setRequestHeader("Content-Type", "application/json" );
            request.onload = function(){
                response = JSON.parse(request.responseText);

                getAccountID();
            }
            request.send(JSON.stringify(prudential));
        }
        else{
            window.alert("Password/Email fields do not match!");
        }
            //window.alert("Invalid/Missing fields!");
            //window.alert(prudential.username + " has been successfully added!");
            //window.location = "main.html?username=" + prudential.username;
            //document.getElementById("signupForm").reset();
        
}
else{
    window.alert("Invalid/Missing fields!");
    document.getElementById("signupForm").reset();
}
    
function getAccountID() {
    var request = new XMLHttpRequest();

    request.open('GET', "/users", true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    getusers_array = JSON.parse(request.responseText);

    showID1();
    };

    request.send();
}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showID1(element) {
    
    var movieCount = 0;
    var message = "";
   
   
    totalUsers = getusers_array.length;


    for (var count = 0; count < totalUsers; count++) {
        if (getusers_array[count].username == prudential.Username) {
            var hi_id = getusers_array[count].username;
            console.log(hi_id);
            window.alert(hi_id + " has been successfully added!");
            window.location = "main.html?username=" + prudential.username + "&AccountID=" + hi_id;
            
        }
    };
}    
    
}

function resetform(){
    document.getElementById("signupForm").reset();
}

function logout(){
    localStorage.clear();
    window.location = "index.html";
}