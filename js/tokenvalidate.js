function valid(token)
{
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
	
	var myObj = JSON.parse(this.responseText);
	
	
	var s=myObj.status;
	if(s==true)
	{
	
	console.log("authenticated");
	}else
	{
	window.location="index";
	
	}
  }
});

xhr.open("POST", "https://api.prontoitlabs.com/api/v1/user/verify-token");
xhr.setRequestHeader("X-AUTH-TOKEN",token);
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "795310de-141f-4bc4-973d-fdaf8f2da356");

xhr.send(data);


}