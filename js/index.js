// Variable to easily call the .drum class for the button element in the HTMl file
var drm = document.querySelectorAll(".drum");

//function to make paritcular sounds based on the button clicked or key pressed
function makeSound(inpt) {

  switch (inpt) {
    case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
    case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
    case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
    case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;
    case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;
    case "k":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;
    case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;

    default: console.log(this.innerHTML);
  }

}


function animation(inpt) {
  var btnPressed = document.querySelector("." + inpt);

  btnPressed.classList.add("pressed");

  setTimeout(function(){
    btnPressed.classList.remove("pressed");
  }, 200);

}

//loop that identifies the click for each button then passes it on to the makeSound function
for (var i = 0; i < drm.length; i++) {
  drm[i].addEventListener("click", function() {

  makeSound(this.innerHTML);
  animation(this.innerHTML);

  });
}

//function that indentifies keypesses throughtout the webpage and passes it on to the makeSound function
document.addEventListener("keydown", function(event){

  makeSound(event.key);
  animation(event.key)

});
