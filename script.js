
 function change(){
 var username = document.getElementById("username");
 var password = document.getElementById("password");
 var email = document.getElementById("email");


 var usernameValue = username.value;
var PasswordValue  = password.value;
 var emailValue = email.value;

 console.log(usernameValue,PasswordValue,emailValue )
 }


 function change(){
    
 var username = document.getElementById("username")
 var password = document.getElementById("password")
 var email = document.getElementById("email")

var usernameValue = username.value;
 var passwordValue = password.value;
 var emailValue = email.value;

var td1 = document.getElementById("td1");
 var td2 = document.getElementById("td2");
 var td3 = document.getElementById("td3");
td1.innerText = usernameValue;
 td2.innerText = passwordValue;
 td3.innerText = emailValue;


 console.log(usernameValue,passwordValue,emailValue)
}