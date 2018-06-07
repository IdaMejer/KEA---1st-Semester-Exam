
/*let mySound = document.querySelector("#mySound");
let counter = 0;*/
let bird = document.querySelector("#bird");
let mySound = document.querySelector("#mySound");
let counter = 0;
let myBirds = document.querySelectorAll("#images img");
let background = document.querySelector("#background");
let newScene = document.querySelector("#newScene");
let monsterBehind = document.querySelector("#monsterbehind");
let birdNewScene = document.querySelector("#birdNewScene");
/*this is when the bird starts flying after being mouse hovered*/
bird.addEventListener("mouseenter", birdfly);

function birdfly(){
  bird.classList.toggle("letbirdfly");
}
/* log out "catch me" when you hover the bird*/
bird.addEventListener("click", birdCatch);

function birdCatch(){
  document.querySelector("#catchMe").innerHTML= "Catch me <br>if you can!";
}
/*End of bird starts flying after being mouse hovered*/
myBirds.forEach(myFunction);

function myFunction(item){
  item.addEventListener("click", addBirdSound);
}

function addBirdSound(){
  this.classList.toggle("birdGone");
  counter = counter + 1;

if(counter == 2){
  mySound.play();
}else if (counter == 3){
  mySound.pause();
}else if (counter == 4){
  background.style.visibility = "hidden";
  newScene.style.backgroundImage = "url(MonsterScene.png)";
  newScene.style.backgroundRepeat = "no-repeat";
  monsterBehind.style.visibility = "visible";
  birdNewScene.style.visibility = "visible";
  mySound.play();
}
console.log(counter)
}
birdNewScene.addEventListener("mouseenter", birdfly);

function birdfly(){
  birdNewScene.classList.toggle("letbirdfly");
}
