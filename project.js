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
active_tokens = {'e3': [false, false, false, false]}
//on initial load below are the positions of the coins
present_position= {'e3':[null, null, null, null]}

function getActiveTokensOf(house){
  active_tokens_of = [];
  for(let i =0;i<4;i++){
    if(active_tokens[house][i]){
      active_tokens_of.push(i);
    }
  }
  return active_tokens_of;
}
function getAllTokensPresentAt(house, position){
  tokens_at_position = [];
  for(let i =0;i<4;i++){
    if(present_position[house][i] == position){
      tokens_at_position.push(i);
    }
  }
  console.log(tokens_at_position);
  return tokens_at_position;
}
function Dice(){
  const values = [1, 2, 3, 4, 8];
  const randomIndex = Math.floor(Math.random() * values.length);
  const dice = values[randomIndex];
  let d=document.getElementById("print");
  d.innerHTML="Number"+":"+dice;
  chosen_token = null;
  if(active_tokens['e3'].includes(true)){
    tokens = getActiveTokensOf('e3');
    var r = prompt(`choose between ${tokens}`);
    //add validations to check if the token is taken from given tokens only
    chosen_token = parseInt(r);
  }

  if (dice == 8 && active_tokens['e3'].includes(false) && confirm("Choose new token?")) {
    new_token = active_tokens['e3'].indexOf(false);
    active_tokens['e3'][new_token] = true;
    present_position['e3'][new_token] = 'e3';
    chosen_token = new_token;
    document.getElementById('e3').value=`🐵${getAllTokensPresentAt('e3', 'e3').join()}`
  }else if(chosen_token!=null){
    console.log(typeof chosen_token);
    old_position = present_position['e3'][chosen_token];
    present_index_of_e3 = PATH1.indexOf(present_position['e3'][chosen_token]);
    new_index_of_e3 = (present_index_of_e3 + dice) < PATH1.length ? present_index_of_e3 + dice : null
    if(new_index_of_e3 == null){
      alert("entered dice value exceeds limit");
      return present_index_of_e3;
    }
    console.log(`Moved from ${present_index_of_e3} to ${new_index_of_e3} on dice value of ${dice}`);
    console.log(`Moved from ${present_position['e3'][chosen_token]} to ${PATH1[new_index_of_e3]} on dice value of ${dice}`);
    old_position = present_position['e3'][chosen_token];
    present_position['e3'][chosen_token] = PATH1[new_index_of_e3];
    old_position_items = getAllTokensPresentAt('e3',  old_position);
    new_position_items = getAllTokensPresentAt('e3',  present_position['e3'][chosen_token]);
    document.getElementById(old_position).value= old_position_items.length == 0 ? "" : `🐵${old_position_items.join()}`;
    document.getElementById(present_position['e3'][chosen_token]).value=`🐵${new_position_items.join()}`;
    d.innerHTML="Number"+":"+dice;
    if(new_index_of_e3==PATH1.length-1){
      alert("congrats");
    }o1="🦁";
  }
function playerone(){
    
}

  }