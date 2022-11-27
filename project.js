var dice;
var variable=1;
var num;
sides=5;
var z1,z2,z3,z4;
function Dice(){
  dice= Math.floor(Math.random()*sides)+1;
  num=document.getElementById("print");
  if(dice==5){
    num.innerHTML="Number"+":"+"8";
   }
   else{
    num.innerHTML="Number"+":"+dice;
   }
}
 token1=true;
 x1=["💴"];
 o1=["⚡"];
function playerone(){
    if( dice==5 || dice==4 ||variable==4 && token1==true ){
        z=document.getElementById("e3").value="💴";
        z1=document.getElementById("e6").value=x1;
        variable++;
        token1=false;
     }
     if(variable>5){
      z=document.getElementById("e3").value=" ";
      z=document.getElementById("e6").value=" ";
      z1=document.getElementById("print").innerHTML="no tokens";
      user1=true;
    }
}
user1=true;
function func23(){
  
        if(dice==1 && token1==false){
     e4=document.getElementById("e4").value=x1;
      z=document.getElementById("e3").value=" ";
      z1=document.getElementById("e6").value=" ";
      token1=true;
    }
   else if(dice==2 && token1==false){  
        e5=document.getElementById("e5").value=x1;
        z=document.getElementById("e3").value=" ";
        z1=document.getElementById("e6").value=" ";
        token1=true;
    }
    else if(dice==3 && token1==false){
      z=document.getElementById("e3").value=" ";
     d5=document.getElementById("d5").value=x1;
     z1=document.getElementById("e6").value=" ";
     token1=true;
    }
    else  if(dice==4 && token1==false){
      z=document.getElementById("e3").value=" ";
      c5=document.getElementById("c5").value=x1;  
      z1=document.getElementById("e6").value=" ";
      token1=true;
    }
    else if(dice==5 && token1==false){
      z=document.getElementById("e3").value=" ";
      a3=document.getElementById("a3").value=x1;
      z1=document.getElementById("e6").value=" ";
      token1=true;
    }
}
function func3(){
  
}