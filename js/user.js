function getuser(total,current,size)
{

$('#pagination-here').bootpag({
    total: total,          
    page: current+1,            
    maxVisible: 5,     
    leaps: true,
    href: "#result-page-{{number}}",
})

//page click action
$('#pagination-here').on("page", function(event, num){

	//ajax start here 
	
	var token=sessionStorage.getItem("token");
if(token) {


var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
   // console.log(this.responseText);
	var myObj = JSON.parse(this.responseText);
	
	
	var s=myObj.status;
	if(s==true)
	{
	var t=myObj.data;
	console.log("Total Pages andar :"+t.totalPages);
	console.log("Current Pages :"+t.currentPage);
	console.log("size Pages :"+t.currentPageSize);
	
	//var obj = JSON.parse(t);
	var d=t.content;

//sessionStorage.setItem("total",t.totalPages);
//sessionStorage.setItem("current",t.currentPage);
//sessionStorage.setItem("size",t.currentPageSize);

  var x = document.createElement("TR");
  x.setAttribute("id", "myTr");
  document.getElementById("content").appendChild(x);

  var q = document.createElement("TD");
  var u = document.createTextNode("UserName");
  q.appendChild(u);
    var r = document.createElement("TD");
  var p = document.createTextNode("Password");
  r.appendChild(p);
    var s = document.createElement("TD");
  var g = document.createTextNode("Gender");
  s.appendChild(g);
  var t = document.createElement("TD");
  var id = document.createTextNode("ID");
  t.appendChild(id);
   document.getElementById("myTr").appendChild(t);
  document.getElementById("myTr").appendChild(q);
    document.getElementById("myTr").appendChild(r);
	  document.getElementById("myTr").appendChild(s);
for ( var i in d) {


var x = document.createElement("TR");
  x.setAttribute("id", "tr"+i);
  document.getElementById("content").appendChild(x);

  var q = document.createElement("TD");
  var u = document.createTextNode(d[i].userName);
  q.appendChild(u);
    var r = document.createElement("TD");
  var p = document.createTextNode(d[i].password);
  r.appendChild(p);
    var s = document.createElement("TD");
  var g = document.createTextNode(d[i].gender);
  s.appendChild(g);
   var t = document.createElement("TD");
  var id = document.createTextNode(d[i].id);
  t.appendChild(id);
   document.getElementById("tr"+i).appendChild(t);
  document.getElementById("tr"+i).appendChild(q);
    document.getElementById("tr"+i).appendChild(r);
	  document.getElementById("tr"+i).appendChild(s);
		var id = d[i].id;
		var name = d[i].userName;
		console.log(id);
		console.log(name);
	}

	}else
	{
	
	}  
	
	
	
  }
});
var tt=num-1;
var url="https://api.prontoitlabs.com/api/v1/user?page="+tt+"&size="+size;
xhr.open("GET",url);
xhr.setRequestHeader("X-AUTH-TOKEN",token);
xhr.setRequestHeader("cache-control", "no-cache");


xhr.send(data);

}else
{
 window.location="index";
}

	console.log("number :"+num);
	// ends here
    $("#content").html("Page " + num); 
});

}