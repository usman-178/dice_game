
//*********RANDOM NUMBER 1*********

var  randomnumber1= Math.random();
randomnumber1=(randomnumber1*6)+1;
randomnumber1=Math.floor(randomnumber1);

//*********RANDOM NUMBER 2*********

var randomnumber2=Math.random();
randomnumber2=(randomnumber2*6)+1
randomnumber2=Math.floor(randomnumber2);


//*********RANDOM IMAGE 1*********

var randomimage1= "dice"+randomnumber1 +".png";

var randomimagesouce="images/" + randomimage1;



var image1=document.querySelectorAll("img")[0].setAttribute("src",randomimagesouce);   //("img")=image is selected on the base of image tag which will return an array.
// image1=setAttribute("src",randomimagesouce);

var randomimage2="dice"+ randomnumber2 + ".png";

var randomimagesource2="images/"+randomimage2;

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);







if (randomnumber1>randomnumber2){
  document.querySelectorAll("h1")[0].innerHTML="PLAYER 1 WINS🎉🎉";

}
else if (randomnumber2>randomnumber1){

  document.querySelectorAll("h1")[0].innerHTML="PLAYER 2 WINS🎉🎉";

}
else{
  document.querySelectorAll("h1")[0].innerHTML="DRAW";

}
