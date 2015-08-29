function myButFunc()
{
	var name = prompt("Enter your name.");
	localStorage.setItem('name',name);
	document.getElementById("myDiv").innerHTML = "Hello, " + name;
}

if(!localStorage.getItem('name'))
{
	myButFunc();	
}
else
{
	var name = localStorage.getItem('name',name);
	document.getElementById("myDiv").innerHTML = "Hello, " + name;	
}