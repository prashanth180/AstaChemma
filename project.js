PATH1=["e3","e4","e5","d5","c5","b5","a5","a4","a3","a2","a1","b1","c1","d1","e1","e2","d2","c2","b2","b3","b4","c4","d4","d3","c3"]
PATH2=["c5","b5","a5","a4","a3","a2","a1","b1","c1","d1","e1","e2","e3","e4","e5","d5","d4","d3","d2","c2","b2","b3","b4","c4","c3"]
PATH3=["a3","a2","a1","b1","c1","d1","e1","e2","e3","e4","e5","d5","c5","b5","a5","a4","b4","c4","d4","d3","d2","c2","b2","b3","c3"]
PATH4=["c1","d1","e1","e2","e3","e4","e5","d5","c5","b5","a5","a4","a3","a2","a1","b1","b2","b3","b4","c4","d4","d3","d2","c2","c3"]

var variable=1;
var num;
var z1,z2,z3,z4;
var token1=true;
var token2=true;
var user1=true;
var user2=true;
//on initial load below are the positions of the coins
present_position= {'e3':['e3','e3','e3','e3']}
function Dice(){

  const values = [1, 2, 3, 4, 8];
  const randomIndex = Math.floor(Math.random() * values.length);
  const dice = values[randomIndex];
  num=document.getElementById("print");
  old_position = present_position['e3'][0];
  present_index_of_e3 = PATH1.indexOf(present_position['e3'][0]);
  new_index_of_e3 = (present_index_of_e3 + dice) < PATH1.length ? present_index_of_e3 + dice : null
  if(new_index_of_e3 == null){
    alert("entered dice value exceeds limit");
    return present_index_of_e3;
  }
  console.log(`Moved from ${present_index_of_e3} to ${new_index_of_e3} on dice value of ${dice}`);
  console.log(`Moved from ${present_position['e3'][0]} to ${PATH1[new_index_of_e3]} on dice value of ${dice}`);
  present_position['e3'][0] = PATH1[new_index_of_e3];
  document.getElementById(old_position).value="";
  document.getElementById(present_position['e3'][0]).value="🐵";
  num.innerHTML="Number"+":"+dice;
  if(new_index_of_e3==PATH1.length-1){
    alert("congrats");
  }
  if(dice==5){
   num.innerHTML="Number"+":"+"8";
   
  }

 
}
 x1="🐵";
 o1="🦁";
function playerone(){
    if( dice==5 || dice==4 || variable==4 && token1==true ){
        z=document.getElementById("e3").value="🐵";
        z1=document.getElementById("e6").value=x1;
        variable++;
        token1=false;
        user1=true
     }
     if(variable!=2){
      z=document.getElementById("e3").value=" ";
      z=document.getElementById("e6").value=" ";
      z1=document.getElementById("print").innerHTML="no tokens for player one";
      user1=true;
    }
}
// function box23(){
//         if(dice==1 && token1==false && variable1){
//      e4=document.getElementById("e4").value=x1;
//       z=document.getElementById("e3").value=" ";
//       z1=document.getElementById("e6").value=" ";
//       token1=true;
//       variable1++;
//     }
//    else if(dice==2 && token1==false && variable1){  
//         e5=document.getElementById("e5").value=x1;
//         z=document.getElementById("e3").value=" ";
//         z1=document.getElementById("e6").value=" ";
//         token1=true;
//         variable1++;
//     }
//     else if(dice==3 && token1==false && variable1){
//       z=document.getElementById("e3").value=" ";
//      d5=document.getElementById("c5").value=x1;
//      z1=document.getElementById("e6").value=" ";
//      token1=true;
//      variable1++;
//     }
//     else  if(dice==4 && token1==false && variable1){
//       z=document.getElementById("e3").value=" ";
//       c5=document.getElementById("c5").value=x1;  
//       z1=document.getElementById("e6").value=" ";
//       token1=true;
//       variable1++;
//     }
//     else if(dice==5 && token1==false && variable1){
//       z=document.getElementById("e3").value=" ";
//       a3=document.getElementById("a3").value=x1;
//       z1=document.getElementById("e6").value=" ";
//       token1=true;
//       variable1++;
//     }
// }

// function box24(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("e5").value=x1;
// z=document.getElementById("e4").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("d5").value=x1;
//   z=document.getElementById("e4").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("e4").value=" ";
// d5=document.getElementById("c5").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("e4").value=" ";
// c5=document.getElementById("b5").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("e4").value=" ";
// a3=document.getElementById("a2").value=x1;
// token1=true;
// }
// // if(variable2<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box25(){
//   if(dice==1 && token1==true ){
//     e4=document.getElementById("d5").value=x1;
//     z=document.getElementById("e5").value=" ";
//     token1=true;
//     }
//     else if(dice==2 && token1==true ){  
//       e5=document.getElementById("c5").value=x1;
//       z=document.getElementById("e5").value=" ";
//       token1=true;
//     }
//     else if(dice==3 && token1==true ){
//     z=document.getElementById("e5").value=" ";
//     d5=document.getElementById("b5").value=x1;
//     token1=true;
//     }
//     else  if(dice==4 && token1==true ){
//     z=document.getElementById("e5").value=" ";
//     c5=document.getElementById("a5").value=x1;  
//     token1=true;
//     }
//     else if(dice==5 && token1==true ){
//     z=document.getElementById("e5").value=" ";
//     a3=document.getElementById("a1").value=x1;
//     token1=true;
//     }

// }
// function box20(){
//   if(dice==1 && token1==true && variable4){
// e4=document.getElementById("c5").value=x1;
// z=document.getElementById("d5").value=" ";
// variable4++;
// token1=true;
// }
// else if(dice==2 && token1==true && variable4){  
//   e5=document.getElementById("b5").value=x1;
//   z=document.getElementById("d5").value=" ";
//   variable4++;
//   token1=true;
// }
// else if(dice==3 && token1==true && variable4){
// z=document.getElementById("d5").value=" ";
// d5=document.getElementById("a4").value=x1;
// variable4++;
// token1=true;
// }
// else  if(dice==4 && token1==true && variable4){
// z=document.getElementById("d5").value=" ";
// c5=document.getElementById("a4").value=x1;  
// variable4++;
// token1=true;
// }
// else if(dice==5 && token1==true && variable4){
// z=document.getElementById("d5").value=" ";
// a3=document.getElementById("b1").value=x1;
// variable4++;
// token1=true;
// }
// }
// function box15(){
//   if(dice==1 && token1==true && variable5){
// e4=document.getElementById("b5").value=x1;
// z=document.getElementById("c5").value=" ";
// variable5++;
// token1=true;
// }
// else if(dice==2 && token1==true && variable5){  
//   e5=document.getElementById("a5").value=x1;
//   z=document.getElementById("c5").value=" ";
//   variable5++;
//   token1=true;
// }
// else if(dice==3 && token1==true && variable5){
// z=document.getElementById("c5").value=" ";
// d5=document.getElementById("a4").value=x1;
// variable5++;
// token1=true;
// }
// else  if(dice==4 && token1==true && variable5){
// z=document.getElementById("c5").value=" ";
// c5=document.getElementById("a3").value=x1;  
// variable5++;
// token1=true;
// }
// else if(dice==5 && token1==true && variable5){
// z=document.getElementById("c5").value=" ";
// a3=document.getElementById("c1").value=x1;
// variable5++;
// token1=true;
// }
// // if(variable5<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box10(){
//   if(dice==1 && token1==true && variable6){
// e4=document.getElementById("a5").value=x1;
// z=document.getElementById("b5").value=" ";
// variable6++;
// token1=true;
// }
// else if(dice==2 && token1==true && variable6){  
//   e5=document.getElementById("a4").value=x1;
//   z=document.getElementById("b5").value=" ";
//   variable6++;
//   token1=true;
// }
// else if(dice==3 && token1==true && variable6){
// z=document.getElementById("b5").value=" ";
// d5=document.getElementById("a3").value=x1;
// variable6++;
// token1=true;
// }
// else  if(dice==4 && token1==true && variable6){
// z=document.getElementById("b5").value=" ";
// c5=document.getElementById("a2").value=x1;  
// variable6++;
// token1=true;
// }
// else if(dice==5 && token1==true && variable6){
// z=document.getElementById("b5").value=" ";
// a3=document.getElementById("d1").value=x1;
// variable6++;
// token1=true;
// }
// // if(variable6<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box5(){
//   if(dice==1 && token1==true && variable7){
// e4=document.getElementById("a4").value=x1;
// z=document.getElementById("a5").value=" ";
// variable7++;
// token1=true;
// }
// else if(dice==2 && token1==true && variable7){  
//   e5=document.getElementById("a3").value=x1;
//   z=document.getElementById("a5").value=" ";
//   variable7++;
//   token1=true;
// }
// else if(dice==3 && token1==true && variable7){
// z=document.getElementById("a5").value=" ";
// d5=document.getElementById("a2").value=x1;
// variable7++;
// token1=true;
// }
// else  if(dice==4 && token1==true && variable7){
// z=document.getElementById("a5").value=" ";
// c5=document.getElementById("a1").value=x1;  
// variable7++;
// token1=true;
// }
// else if(dice==5 && token1==true && variable7){
// z=document.getElementById("a5").value=" ";
// a3=document.getElementById("e1").value=x1;
// variable7++;
// token1=true;
// }
// // if(variable7<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box4(){
//   if(dice==1 && token1==true && variable8){
// e4=document.getElementById("a3").value=x1;
// z=document.getElementById("a4").value=" ";
// variable8++;
// token1=true;
// }
// else if(dice==2 && token1==true && variable8){  
//   e5=document.getElementById("a2").value=x1;
//   z=document.getElementById("a4").value=" ";
//   variable8++;
//   token1=true;
// }
// else if(dice==3 && token1==true && variable8){
// z=document.getElementById("a4").value=" ";
// d5=document.getElementById("a1").value=x1;
// variable8++;
// token1=true;
// }
// else  if(dice==4 && token1==true && variable8){
// z=document.getElementById("a4").value=" ";
// c5=document.getElementById("b1").value=x1;  
// variable8++;
// token1=true;
// }
// else if(dice==5 && token1==true && variable8){
// z=document.getElementById("a4").value=" ";
// a3=document.getElementById("e2").value=x1;
// variable8++;
// token1=true;
// }
// // if(variable8<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box3(){
//   if(dice==1 && token1==true && variable9){
// e4=document.getElementById("a2").value=x1;
// z=document.getElementById("a3").value=" ";
// variable9++;
// token1=true;
// }
// else if(dice==2 && token1==true && variable9){  
//   e5=document.getElementById("a1").value=x1;
//   z=document.getElementById("a3").value=" ";
//   variable9++;
//   token1=true;
// }
// else if(dice==3 && token1==true && variable9){
// z=document.getElementById("a3").value=" ";
// d5=document.getElementById("b1").value=x1;
// variable9++;
// token1=true;
// }
// else  if(dice==4 && token1==true && variable9){
// z=document.getElementById("a3").value=" ";
// c5=document.getElementById("c1").value=x1;  
// variable9++;
// token1=true;
// }
// else if(dice==5 && token1==true && variable9){
// z=document.getElementById("a3").value=" ";
// a3=document.getElementById("d2").value=x1;
// variable9++;
// token1=true;
// }
// // if(variable9<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box2(){
//   if(dice==1 && token1==true && variable10){
// e4=document.getElementById("a1").value=x1;
// z=document.getElementById("a2").value=" ";
// variable10++;
// token1=true;
// }
// else if(dice==2 && token1==true && variable10){  
//   e5=document.getElementById("b1").value=x1;
//   z=document.getElementById("a2").value=" ";
//   variable10++;
//   token1=true;
// }
// else if(dice==3 && token1==true && variable10){
// z=document.getElementById("a2").value=" ";
// d5=document.getElementById("c1").value=x1;
// variable10++;
// token1=true;
// }
// else  if(dice==4 && token1==true && variable10){
// z=document.getElementById("a2").value=" ";
// c5=document.getElementById("d1").value=x1;  
// variable10++;
// token1=true;
// }
// else if(dice==5 && token1==true && variable10){
// z=document.getElementById("a2").value=" ";
// a3=document.getElementById("c2").value=x1;
// variable10++;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box1(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("b1").value=x1;
// z=document.getElementById("a1").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("c1").value=x1;
//   z=document.getElementById("a1").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("a1").value=" ";
// d5=document.getElementById("d1").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("a1").value=" ";
// c5=document.getElementById("e1").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("a1").value=" ";
// a3=document.getElementById("b2").value=x1;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box6(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("c1").value=x1;
// z=document.getElementById("b1").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("d1").value=x1;
//   z=document.getElementById("b1").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("b1").value=" ";
// d5=document.getElementById("e1").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("b1").value=" ";
// c5=document.getElementById("e2").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("b1").value=" ";
// a3=document.getElementById("b3").value=x1;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box11(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("d1").value=x1;
// z=document.getElementById("c1").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("e1").value=x1;
//   z=document.getElementById("c1").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("c1").value=" ";
// d5=document.getElementById("e2").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("c1").value=" ";
// c5=document.getElementById("d2").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("c1").value=" ";
// a3=document.getElementById("b4").value=x1;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box16(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("e1").value=x1;
// z=document.getElementById("d1").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("e2").value=x1;
//   z=document.getElementById("d1").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("d1").value=" ";
// d5=document.getElementById("d2").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("d1").value=" ";
// c5=document.getElementById("c2").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("d1").value=" ";
// a3=document.getElementById("c4").value=x1;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box21(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("e2").value=x1;
// z=document.getElementById("e1").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("d2").value=x1;
//   z=document.getElementById("e1").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("e1").value=" ";
// d5=document.getElementById("c2").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("e1").value=" ";
// c5=document.getElementById("b2").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("e1").value=" ";
// a3=document.getElementById("d4").value=x1;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box22(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("d2").value=x1;
// z=document.getElementById("e2").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("c2").value=x1;
//   z=document.getElementById("e2").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("e2").value=" ";
// d5=document.getElementById("b2").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("e2").value=" ";
// c5=document.getElementById("b3").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("e2").value=" ";
// a3=document.getElementById("d3").value=x1;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box17(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("c2").value=x1;
// z=document.getElementById("d2").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("b2").value=x1;
//   z=document.getElementById("d2").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("d2").value=" ";
// d5=document.getElementById("b3").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("d2").value=" ";
// c5=document.getElementById("b4").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("d2").value=" ";
// a3=document.getElementById("c3").value=x1;
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box12(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("b2").value=x1;
// z=document.getElementById("c2").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("b3").value=x1;
//   z=document.getElementById("c2").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("c2").value=" ";
// d5=document.getElementById("b4").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("c2").value=" ";
// c5=document.getElementById("c4").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("c2").value=" ";
// a3=document.getElementById("c3").value="Roll again";
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }
// function box7(){
//   if(dice==1 && token1==true ){
// e4=document.getElementById("b3").value=x1;
// z=document.getElementById("b2").value=" ";
// token1=true;
// }
// else if(dice==2 && token1==true ){  
//   e5=document.getElementById("b4").value=x1;
//   z=document.getElementById("b2").value=" ";
//   token1=true;
// }
// else if(dice==3 && token1==true ){
// z=document.getElementById("b2").value=" ";
// d5=document.getElementById("b4").value=x1;
// token1=true;
// }
// else  if(dice==4 && token1==true ){
// z=document.getElementById("b2").value=" ";
// c5=document.getElementById("c4").value=x1;  
// token1=true;
// }
// else if(dice==5 && token1==true ){
// z=document.getElementById("b2").value=" ";
// a3=document.getElementById("c3").value="Roll again";
// token1=true;
// }
// // if(variable10<=2){
// //   x1==false;
// //   z1=document.getElementById("print").innerHTML="no tokens";
// //  }
// }