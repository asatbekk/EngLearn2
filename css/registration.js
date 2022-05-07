document.getElementById('linkLogin').onclick = function(){
   document.getElementById('login').classList.remove('form--hidden');
   document.getElementById('createAccount').classList.add('form--hidden');
}
document.getElementById('LinkCreateAccount').onclick = function(){
  document.getElementById('login').classList.add('form--hidden');
  document.getElementById('createAccount').classList.remove('form--hidden');
}
document.getElementById('ww').onclick = function(){
  var text1 = document.getElementById("pass1");
  var text2 = document.getElementById("pass2");
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,100}$/;
  if(document.getElementById("pass1").value.match(passw)) 
  { 
    if(text1.value == text2.value){  
      location.href="car.html"
    }
    else{
      alert("Passwords do not match");
    }
  }
  else
  { 
  alert('The password must consist of 1 capital letter and 1 letter and 1 digit and must be at least 8')
  }
}
document.getElementById('gg').onclick = function(){
  var text1 = document.getElementById("pass3");
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,100}$/;
  if(document.getElementById("pass3").value.match(passw)) 
  { 
    location.href="car.html"
  }
  else
  { 
    alert('False password. The password must consist of 1 capital letter and 1 letter and 1 digit and must be at least 8')
  }
}