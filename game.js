const display = document.querySelector("input")
const buttonArr = Array.from(document.getElementsByTagName('button'));

let counter = 0

buttonArr.map(button => {
  button.addEventListener('click', (v) => {
    switch(v.target.innerText){
      case 'Y':
        if (display.value === ""){
          display.value = "N"
        } else if (display.value === "N"){
          display.value = "No"
        } else {
          display.value = ""
        }
          break;
      case 'e':
        if (display.value === ""){
          display.value = "N"
        } else if (display.value === "N"){
          display.value = "No"
        } else {
          display.value = ""
        }
          break;
      case 's':
        if (display.value === ""){
          display.value = "N"
        } else if (display.value === "N"){
          display.value = "No"
        } else {
          display.value = ""
        }
          break;
      case 'N':
        if (display.value === ""){
          display.value = "N"
        } else if (display.value === "N"){
          display.value = "No"
        } else {
          display.value = ""
        }
          break;
      case 'o':
        if (display.value === ""){
          display.value = "N"
        } else if (display.value === "N"){
          display.value = "No"
        } else {
          display.value = ""
        }
          break;
      case 'Enter':
        if (display.value === "Y e s" || display.value === "yes") {
          window.location.href ="game2.html";
        } else {
          display.value = ""
        }
          break;
      default:
        display.value += v.target.innerText;
    }
  })
});



display.addEventListener('keyup', () => {
  if(display.value !== "N"){
    display.value = "No"
    counter++
  } 
   if(counter === 5){
    alert("This is an original game. No files were copied.")
  } else if(counter === 6){
    alert("Well, I guess it is good I never copied any code. It has made this game difficult for you.")
  } else if(counter > 9 && counter <= 15){
    alert("You should consider giving up.")
  } else if(counter > 15){
    alert("Copy and Paste -_-.")
  }
})




