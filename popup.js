
//Function that appears if login button pressed
function validate1() {
    var attempt = 3;


    var username = document.getElementById("username").value;//Get username from user
    var password = document.getElementById("password").value;//Get password from user

    if (username == "SteveO" && password == "youshallpass"){
        //alert ("Login successfully");
        //chrome.browserAction.onClicked.addListener(function() {
           // alert("Login successfully");
        //})
     //   window.location = "/success_login.html"; //If login was successful transfer to another page
        window.open("index.html", '_blank');

    }
    else{
        // attempt --;//Decrementing by one
        // alert("You have left "+attempt+" attempt;");
        //
        // //If 3 attempts were unsuccessful disable login option
        // if( attempt == 0){
        //     document.getElementById("username").disabled = true;
        //     document.getElementById("password").disabled = true;
        //     document.getElementById("submit").disabled = true;
        // }
        window.location.href="login_fail.html";


    }

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Login').addEventListener('click', validate1);
});


