function login()
		{
		var username=document.getElementById('user').value;
		var password=document.getElementById('pass').value;
		
		
var keys = JSON.stringify({
  "userName": username,
  "password": password
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
	 console.log("Authenticated");
	var myObj = JSON.parse(this.responseText);
	
	
	var s=myObj.status;
	if(s==true)
	{
	var t=myObj.data;
	console.log(t);
	
	var d=t.user;
	
sessionStorage.setItem("username", d.userName);
sessionStorage.setItem("password", d.password);
sessionStorage.setItem("gender", d.gender);
sessionStorage.setItem("token",t.token);
		 window.location="home";
	}else
	{
	 document.getElementById("message").style.visibility="visible";
   
	document.getElementById("message").innerHTML =myObj.errorMessage;

	}  
	
  }
});

xhr.open("POST", "https://api.prontoitlabs.com/api/v1/user/login");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(keys);
		}