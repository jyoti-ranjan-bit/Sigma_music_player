var noOfDrums = document.querySelectorAll(".drum").length;
var currentAudio = null; // Variable to keep track of the currently playing audio

for (i = 0; i < noOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    stopCurrentAudio(); // Stop the previous audio
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// Detecting keyboard press
document.addEventListener("keydown", function (event) {
  stopCurrentAudio(); // Stop the previous audio
  makeSound(event.key);
  buttonAnimation(event.key);
});

function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause(); // Pause the currently playing audio
    currentAudio.currentTime = 0; // Reset the audio to the beginning
  }
}

function makeSound(key) {
  switch (key) {
    case "w":
      currentAudio = new Audio('sounds/Gigachadbgm.mp3');
      break;

    case "a":
      currentAudio = new Audio('sounds/ankit.mp3');
      break;

    case "s":
      currentAudio = new Audio('sounds/dhoni.mp3');
      break;

    case "d":
      currentAudio = new Audio('sounds/boys.mp3');
      break;

    case "j":
      currentAudio = new Audio('sounds/masterpiece.mp3');
      break;

    case "k":
      currentAudio = new Audio('sounds/chammak.mp3');
      break;

    case "l":
      currentAudio = new Audio('sounds/collaboration.mp3');
      break;

    case "m":
      currentAudio = new Audio('sounds/pani.mp3');
      break;

    default:
      console.log(key);
      break;
  }

  if (currentAudio) {
    currentAudio.play(); // Play the new audio
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // pressed is in css
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}







