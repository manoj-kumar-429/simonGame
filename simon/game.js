var buttonSequence = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];

var count = 1;
var level = 0;
$(document).keydown(nextSequence);
function nextSequence() {
  userClickedPattern = [];
  if (count < 2) {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonSequence[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor)
      .fadeOut(100)
      .fadeIn(100);
    makeSound(randomChosenColor);
    // console.log(randomNumber);
    // console.log("userPattern " + userClickedPattern);
    // console.log("user " + userClickedPattern.length);

    // console.log("gamePattern " + gamePattern);
    count++;
  } else {
    return;
  }
  $(".btn").on("click", function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    // console.log("userpattern " + userClickedPattern);

    animatePress();
    for (
      var j = 0;
      j < userClickedPattern.length && userClickedPattern[j] === gamePattern[j];
      j++
    ) {}
    // console.log("j = " + j);
    // console.log("user " + userClickedPattern.length);
    if (j === userClickedPattern.length) {
      // alert("hi");
      if (userClickedPattern.length === gamePattern.length) {
        // alert("hi");
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColor = buttonSequence[randomNumber];
        gamePattern.push(randomChosenColor);
        // console.log(randomNumber);
        // console.log(userChosenColor);
        // console.log("userPattern " + userClickedPattern);
        // console.log("gamePattern " + gamePattern);
        setTimeout(function () {
          $("#" + randomChosenColor)
            .fadeOut(100)
            .fadeIn(100);
          makeSound(randomChosenColor);
        }, 1000);
      }
    } else {
      console.log("over");
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      $("#level-title").text("Game Over, Press Any Key To Restart");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 100);
      // userClickedPattern = [];

      startOver();
      // $(document).keydown(nextSequence);
    }
    function animatePress() {
      $("#" + userChosenColor).addClass("pressed");
      setTimeout(function () {
        $("#" + userChosenColor).removeClass("pressed");
      }, 100);
    }
  });
}
function startOver() {
  level = 0;
  // userClickedPattern = [];
  gamePattern = [];
  count = 1;
  // j = 0;
}
function makeSound(key) {
  switch (key) {
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
  }
}
