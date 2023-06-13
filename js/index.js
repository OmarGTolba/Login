var userEmail = document.getElementById("userEmail")
var password = document.getElementById("userPass")
var userName = document.getElementById("userName")
var nameRegex = /^[A-Z] {0,1}/
var passRegex = /[a-zA-Z0-9!@#$&()\\-`.+,/\"]/

var EmailRegex = /[a-zA-Z0-9!@#$&()\\-`.+,/\"]/


if (localStorage.getItem("usersList") == null) {
  userList = []
}
else {
  userList = JSON.parse(localStorage.getItem("usersList"))
}



function signUp() {
    
  clearValid()
  userList = JSON.parse(localStorage.getItem("usersList"))

  if(nameRegex.test(userName.value) ==false){

      document.getElementById("validName").innerHTML = "Firat letter capital"
      return
    } else if(EmailRegex.test(userEmail.value) ==false){

      document.getElementById("validEmail").innerHTML = "Invalid email"
      return
    }else if(passRegex.test(password.value) ==false){
      document.getElementById("validPass").innerHTML = "Invalid password"
      return
    }
 
    else if(userList == null ){
      var user = {
        Name: userName.value,
        Email: userEmail.value,
        Pass: password.value,
      }
      userList = []
  userList.push(user)
  
  localStorage.setItem("usersList", JSON.stringify(userList))
  document.getElementById("msg").innerHTML = "Success"
 
  return
        }


    else  {
     
     
for(var i =0;i<userList.length;i++){
 
   if(userList[i].Email == userEmail.value ){
    document.getElementById("validEmail").innerHTML = "Email already in use"
return;    
  }
  else{
    var user = {
        Name: userName.value,
        Email: userEmail.value,
        Pass: password.value,
      }
  }
}
    }
  userList.push(user)
  
  localStorage.setItem("usersList", JSON.stringify(userList))

  document.getElementById("msg").innerHTML = "Success"
 
  clear()
}

if (document.getElementById("wmsg")) {
  var logName = localStorage.getItem("loggedUser")
  var cartona = ``
  cartona += `  <h2  class=" fs-1 mb-4">
  welcome            ${logName}
   </h2> `
  document.getElementById("wmsg").innerHTML = cartona
}

function logIn() {
  userList = JSON.parse(localStorage.getItem("usersList"))
  if(userList == null ){
     
    document.getElementById("valid").innerHTML = "Invalid"
   return
  }
  
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].Email == userEmail.value && userList[i].Pass == password.value) {
      localStorage.setItem("loggedUser", userList[i].Name)
      location.replace( 'file:///D:/visual%20studio%20code/Assignment%204%20(JS)/home.html')
    }
    else {
     
      document.getElementById("valid").innerHTML = "Invalid"
    }
  } 
}
function clearValid(){
  
  document.getElementById("msg").innerHTML = ""
  
  document.getElementById("validName").innerHTML = ""
  document.getElementById("validEmail").innerHTML = ""
  document.getElementById("validPass").innerHTML = ""
}

function clear() {
  userName.value = ""
  userEmail.value = ""
  password.value = ""
  document.getElementById("validName").innerHTML = ""
  document.getElementById("validEmail").innerHTML = ""
  document.getElementById("validPass").innerHTML = ""
  document.getElementById("validEmail").innerHTML = ""
  document.getElementById("validPass").innerHTML = ""
}
