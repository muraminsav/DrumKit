for (var i = 0; i < document.querySelectorAll(".drumm").length; i++) {

  document.querySelectorAll(".drumm")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {
      case "w":
        var hiHat = new Audio("mp3/Hi-Hat-Closed.mp3");
        hiHat.play();
        break;

      case "a":
        var leftTom = new Audio("mp3/Small-Rack-Tom.mp3");
        leftTom.play();
        break;

      case "s":
        var snare = new Audio("mp3/Snare.mp3");
        snare.play();
        break;

      case "d":
        var kick = new Audio("mp3/Kick.mp3");
        kick.play();
        break;

      case "j":
        var floorTom = new Audio("mp3/Floor-Tom.mp3");
        floorTom.play();
        break;

      case "k":
        var rightTom = new Audio("mp3/Big-Rack-Tom.mp3");
        rightTom.play();
        break;

      case "l":
        var crash = new Audio("mp3/Crash.mp3");
        crash.play();
        break;


      default: console.log(buttonInnerHtml);

    }

  });

}
