function register()
		{
		var username=document.getElementById('username').value;
		var password=document.getElementById('password').value;
		var gender=document.getElementById('gender').value;
		var result;
		var myKeyVals = { userName :username, password :password, gender :gender };
		console.log(myKeyVals);
		
	var data = JSON.stringify({
  "userName": username,
  "password": password,
  "gender": gender
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
	var myObj = JSON.parse(this.responseText);

	var s=myObj.status;
	if(s==true)
	{
	var t=myObj.data;
	console.log(t);

	var d=t.user;
	//	var obj1 = JSON.parse(d);
sessionStorage.setItem("username", d.userName);
sessionStorage.setItem("password", d.password);
sessionStorage.setItem("gender", d.gender);
sessionStorage.setItem("token",t.token);
		 window.location="home";
	}else
	{
	 document.getElementById("mess").style.visibility="visible";
   
	document.getElementById("mess").innerHTML =myObj.errorMessage;

	}  
	
	
  }
});

xhr.open("POST", "https://api.prontoitlabs.com/api/v1/user");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);

		}
		
		