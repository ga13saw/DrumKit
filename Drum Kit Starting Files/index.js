var btnLentgh = document.querySelectorAll(".drum");
for (var i = 0; i < btnLentgh.length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    btnSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
}


function btnColor() {
  this.style.color = "#fff";
}

function btnSound(btnName) {

  switch (btnName) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log(btnName);

  }


}

document.addEventListener("keydown", function(event) {
  btnSound(event.key);
  btnAnimation(event.key);
  //removeAni(event.key);
});

function btnAnimation(key) {
  var ani = document.querySelector("." + key);
  ani.classList.add("pressed");
  setTimeout(function() {
    ani.classList.remove("pressed");
  }, 100);
}
// function removeAni(key){
//     document.querySelector("." + key).classList.remove("pressed");
// }
