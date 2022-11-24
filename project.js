var random;
var num;
sides=5;
function printNumber(){
  random= Math.floor(Math.random()*sides)+1;
  num=document.getElementById("print");
  if(random==5){
    num.innerHTML="Number"+":"+"8";
   }
   else{
    num.innerHTML="Number"+":"+random;
   }
}
var tokens = {
"p1": { 1: false, 2: false, 3: false, 4: false }, 
"p2": { 1: false, 2: false, 3: false, 4: false }, 
"p3": { 1: false, 2: false, 3: false, 4: false },
"p4": { 1: false, 2: false, 3: false, 4: false } };

function func26(){
    if(random==8 || random==4 && this.p1["1"]==false){
        token=document.getElementById("e6").value="xa";
    }
    else {
        token=document.getElementById("e6").value="x";
    }
}