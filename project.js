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
  let d=document.getElementById("print");
  d.innerHTML="Number"+":"+dice;
  
  if(dice==8 && user1==true || token1==false){
    e6=document.getElementById('e3').value="🐵"
    user1=false 
   if(dice==1 || dice==2 || dice==3 ){
      e6=document.getElementById('e3').value=" "
    }
          token1==false
  }
else if(user1==false || token1==false){ 
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
  d.innerHTML="Number"+":"+dice;
  if(new_index_of_e3==PATH1.length-1){
    alert("congrats");
  }
  user1=false
}
}

//  x1="🐵";
//  o1="🦁";
function playerone(){
    
}

