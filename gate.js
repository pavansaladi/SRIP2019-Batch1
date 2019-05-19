function myFunction1() 
{
     var location = parseInt(document.getElementById("list1").value);
     var location1=location+parseInt(document.getElementById("list2").value);
     console.log(location1)
     if(location1 == 2) 
     {
       document.getElementById("myImg1").src="ag.gif";
     }
     else if(location1 == 3) 
     {
       document.getElementById("myImg1").src="og.gif";
     }
}
function myFunction2() {
     var location = parseInt(document.getElementById("list1").value);
     var location1=location+parseInt(document.getElementById("list2").value);
     if(location1 == 2) 
     {
       document.getElementById("myImg2").src="ag.gif";
     }
     else if(location1 == 3) {
       document.getElementById("myImg2").src="og.gif";
     }
}