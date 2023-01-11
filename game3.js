const circle = document.querySelector(".circle");
const moveBy = 10;
const image = document.querySelector(".image")
const textTitle = document.querySelector(".textTitle")
const textBody = document.querySelector(".textBody")


window.addEventListener('load', () =>{
  circle.style.position = 'absolute';
  circle.style.left = 0;
  circle.style.top = 0;
});

window.addEventListener('keydown', (e) =>{
 switch(e.key){
  case 'ArrowLeft':
    circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
    break;
  case 'ArrowRight':
    circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
    break;
  case 'ArrowUp':
    circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
    break;
  case 'ArrowDown':
    circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
    break;
 }

});



window.addEventListener('keyup', (e) =>{
if (e.code === "ArrowDown"){
  image.src = "jigsaw.png";
  textTitle.innerHTML = "Game Development in progress...";
  textBody.innerHTML = "This game is incomplete. You will have to exit browser now.";
  circle.style.border = " 5px solid red"
} else if(e.code === "ArrowUp"){
  image.src = "jigsaw.png";
  textTitle.innerHTML = "Game Development in progress...";
  textBody.innerHTML = "This game is incomplete. You will have to exit browser now.";
  circle.style.border = " 5px solid red"
} else if(e.code === "ArrowLeft"){
  image.src = "jigsaw.png";
  textTitle.innerHTML = "Game Development in progress...";
  textBody.innerHTML = "This game is incomplete. You will have to exit browser now.";
  circle.style.border = " 5px solid red"
} else if(e.code === "ArrowRight"){
  image.src = "jigsaw.png";
  textTitle.innerHTML = "Game Development in progress...";
  textBody.innerHTML = "This game is incomplete. You will have to exit browser now.";
  circle.style.border = " 5px solid red";
}
 });

//  if(circle.style.left == 1950 && circle.style.top == 110){
//   window.location.href ="game4.html"
// }

