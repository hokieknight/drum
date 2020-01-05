

var allDrums = document.querySelectorAll(".drum");
allDrums.forEach(drum => drum.addEventListener("click", handleClick));
function handleClick() {
  // var audio = new Audio(soundDict[this.innerHTML]);
  // audio.play();
  playSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

document.addEventListener("keydown", function(event) {
  // var audio = new Audio(soundDict[event.key]);
  // audio.play();
  playSound(event.key);
  buttonAnimation(event.key);
});

var soundDict = {};
soundDict["w"] = "sounds/tom-1.mp3";
soundDict["a"] = "sounds/tom-2.mp3";
soundDict["s"] = "sounds/tom-3.mp3";
soundDict["d"] = "sounds/tom-4.mp3";
soundDict["j"] = "sounds/snare.mp3";
soundDict["k"] = "sounds/crash.mp3";
soundDict["l"] = "sounds/kick-bass.mp3";

function playSound(soundKey) {
  //alert(this.innerHTML);
  // switch (this.innerHTML) {
  //   case "w":
  //     var tom1 = new Audio("sounds/tom-1.mp3");
  //     tom1.play();
  //     break;
  //   default:
  //
  // }
  var audio = new Audio(soundDict[soundKey]);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}
