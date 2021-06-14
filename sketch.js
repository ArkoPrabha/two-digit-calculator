var num1,num2,answer,ops
 function setup() {
  createCanvas(1800,400);
  num1=parseInt(prompt("ENTER FIRST NUMBER"))
  num2=parseInt(prompt("ENTER SECOND NUMBER"))
   ops=prompt("ENTER THE OPERATION")
}

function draw() {
  background(255,255,255);
  if(ops==="+"){
    answer= add(num1,num2)
  }
  else if(ops==="-"){
    answer= sub(num1,num2)
  }
  else if(ops==="*"){
    answer= multiply(num1,num2)
  }
  else if(ops==="/"){
    answer= divide(num1,num2)
  }
  
  textSize(40)
  text(num1+ops+num2+"="+answer,380,190)  
  
}
function add(n1,n2){
  var answer=n1+n2
  return answer
}
function sub(n1,n2){
  var answer=n1-n2
  return answer
}
function multiply(n1,n2){
  var answer=n1*n2
  return answer
}
function divide(n1,n2){
  var answer=n1/n2
  return answer
}
