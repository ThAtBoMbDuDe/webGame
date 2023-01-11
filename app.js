const yes = document.querySelector("#yes")
const no = document.querySelector("#no")
const buttons = document.querySelectorAll("button")


let counter = 0

yes.addEventListener("mouseover", () => {
  yes.innerHTML = "No"
});
yes.addEventListener("mouseout", () => {
  yes.innerHTML = "Yes"
});

no.addEventListener("click", () => {
  counter++
  if (counter < 5){
    alert("Well... this is awkward... try to play the game. Just for a bit. For me.")
    } else if (counter >= 5 && counter < 13){
      alert("This game isn't for you. Go to a bar and open a tab, you'll be happier.")
    } else {
      alert("It's the tab button -_-. Use the tab button and enter.")
    }
});
yes.addEventListener("click", () => {
  counter++
  if (counter < 5){
    alert("That didn't work.")
    } else if (counter >= 5 && counter < 13){
      alert("This game isn't for you. Go to a bar and open a tab, you'll be happier.")
    } else {
      alert("It's the tab button -_-. Use the tab button and enter.")
    }
});


yes.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    window.alert = null;
    window.location.href ="game.html";
  }
  
});

// document.addEventListener('mouseover',() => {
//   let audio = new Audio("wargames_play_game.wav");
//   audio.play();
// })


window.onload(() => {
  let audio = new Audio("wargames_play_game.wav");
  audio.play();
}) 
