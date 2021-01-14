var randomNumber=Math.floor(Math.random()*6)+1;
var randomsrc="dice"+randomNumber+".png";
var randomsrc1="images/"+randomsrc;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", randomsrc1);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomsrc2="dice"+randomNumber2+".png";
var randomsrc2="images/"+randomsrc2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", randomsrc2);

if(randomNumber>randomNumber2){
  document.querySelector("h1").innerHTML="🎈 Player 1 wins";
}
else if(randomNumber<randomNumber2){
  document.querySelector("h1").innerHTML="🎈 Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML="Draw 🙄";
}
