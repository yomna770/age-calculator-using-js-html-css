var age=document.getElementById("age");

var type=document.getElementById("type");

var stars=document.getElementById("stars");

var yearInput=document.getElementById("year");

function calcAge(){
   var year =yearInput.value;
   var date= new Date;

var currentAge=date.getFullYear()-year;
age.innerHTML="your age is <span>"+currentAge +"</span>";

if(currentAge<18){
    type.innerHTML="You Are a Kid"
}
else if(currentAge>=19){
    type.innerHTML="You Are an Adult"
}
else(type.innerHTML="You Are old")
  var box=""
for(var i=0 ; i<currentAge ;i++){
box+="*"
}
stars.innerHTML=box;
}