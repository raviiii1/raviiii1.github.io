var myId = document.getElementById("myContent");

function myButFunc()
{
	var name = prompt("Enter your name.");
	localStorage.setItem('name',name);
	myId.innerHTML = "Hello, " + name;
}

if(!localStorage.getItem('name'))
{
	myButFunc();	
}
else
{
	var name = localStorage.getItem('name',name);
	myId.innerHTML = "Hello, " + name;	
}