const square = document.querySelectorAll("button")
const buttonArr = Array.from(document.getElementsByTagName('button'));
const display = document.querySelector(".display")
let counter = 0




buttonArr.map(button => {
  button.addEventListener('click', (v) => {
    switch(v.target.innerText){
      case '':
        display.innerText = "";
          break;
      default:
        display.innerText += v.target.innerText;
    }
  })
})

display.addEventListener('click',() =>{
  if(display.innerText == "error.override" || display.innerText == "override.error"){
    window.location.href ="game3.html"
  } else if(display.innerText == "error" || display.innerText == "error."){
    alert("What about the error?")
  } else if(display.innerText == "override" || display.innerText == "override."){
    alert("Override what?")
  } else if(display.innerText == "overrideerror"){
    alert("Close... very close.")
  }
})


document.addEventListener('click',() =>{
  counter++
  if (counter === 25){
    alert("I see you are still here. So you don't think this is an error?")
  } else if (counter === 35){
    alert("I guess you are right, but I am not giving you anymore hints.")
  } else if (counter === 50){
    alert("Just so you know, you are on 50 clicks. I would know. I am counting.")
  } else if(counter === 70){
    alert("The amount of clicks isn't what will get you to the next page.")
  } else if(counter === 100){
    alert("Okay! It is two words combined with a period and the two words are on the screen.")
  }
})

buttonArr.forEach(button => {
  button.addEventListener("click", () => {
    let audio = new Audio("single key click.wav");
    audio.play();
  })
})
