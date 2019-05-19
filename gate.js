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
function myFunction3() {
    var location = parseInt(document.getElementById("list1").value);
    var location1=location+parseInt(document.getElementById("list2").value);
    if(location1==2)
    {
        document.getElementById("name").innerHTML="AND Gate";
    }
    else if(location1==3)
    {
        document.getElementById("name").innerHTML="OR Gate";
    }
}
function myFunction4() {
    var location = parseInt(document.getElementById("list1").value);
    var location1=location+parseInt(document.getElementById("list2").value);
    var a=parseInt(prompt("Enter a value:","your first input here"));
    var b=parseInt(prompt("Enter b value:","your second input here"));
    if(location1==2)
    {
        var output=(a&&b);
    }
    else if(location1==3)
    {
        var output=(a||b);
    }
    document.getElementById("output").innerHTML="output value is "+output;
}