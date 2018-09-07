var time = 11;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswers = 0;

var nextButton = $("<button>");
nextButton.text("NEXT");
nextButton.addClass("btn btn-info w-25");
nextButton.attr("id", "next-button-1");

$(document).on("click", "#next-button-1", function() {
  $("#result-message").hide();
  $("#timers-div").show();
  $("#q2-div").show();
  start();
});

var nextButton2 = $("<button>");
nextButton2.text("NEXT");
nextButton2.addClass("btn btn-info w-25");
nextButton2.attr("id", "next-button-2");

$(document).on("click", "#next-button-2", function() {
  $("#result-message").hide();
  $("#timers-div").show();
  $("#q3-div").show();
  start();
});

var nextButton3 = $("<button>");
nextButton3.text("NEXT");
nextButton3.addClass("btn btn-info w-25");
nextButton3.attr("id", "next-button-3");

$(document).on("click", "#next-button-3", function() {
  $("#result-message").hide();
  $("#timers-div").show();
  $("#q4-div").show();
  start();
});

var nextButton4 = $("<button>");
nextButton4.text("NEXT");
nextButton4.addClass("btn btn-info w-25");
nextButton4.attr("id", "next-button-4");

$(document).on("click", "#next-button-4", function() {
  $("#result-message").hide();
  $("#timers-div").show();
  $("#q5-div").show();
  start();
});

var nextButton5 = $("<button>");
nextButton5.text("NEXT");
nextButton5.addClass("btn btn-info w-25");
nextButton5.attr("id", "next-button-5");

$(document).on("click", "#next-button-5", function() {
  $("#result-message").hide();
  $("#final-answers").show();
});

var restartButton = $("<button>");
restartButton.text("RESTART");
restartButton.addClass("btn btn-info w-25");
restartButton.attr("id", "restart-button");

$(document).on("click", "#restart-button", function() {
  $("#start-button").show();
  $("#result-message").hide();
  $("#form-questions").hide();
  $("#final-answers").hide();
  $("#try-again-div").hide();
});

$(document).ready(function() {
  startGame();

  $("#start-button").click(function() {
    $("#start-button").hide();
    $("#form-questions").show();
    $("#timers-div").show();
    $("#q1-div").show();
    $("#q2-div").hide();
    $("#q3-div").hide();
    $("#q4-div").hide();
    $("#q5-div").hide();

    start();
  });

  $("#submit-button-1").click(function() {
    $("#timers-div").hide();
    $("#q1-div").hide();
    $("#result-message").show();
    stop();

    var answer1 = $("input[type=radio][name=question1]:checked").val();
    if (answer1 === "Brazil") {
      correctAnswers++;
      var response_text = "<p>Congratulation!!!</p> <p>You are correct!</p>";
    } else if (answer1 === "Argentina" || answer1 === "Mexico") {
      incorrectAnswers++;
      var response_text =
        "<p>Great Try!</p> <p>CORRECT ANSWER: The largest coffee growing country in the world: BRAZIL</p>";
    } else {
      noAnswers++;
      var response_text =
        "<p>Not Sure?!</p> <p>CORRECT ANSWER: The largest coffee growing country in the world: BRAZIL</p>";
    }
    $("#result-message").html(response_text);
    $("#result-message").addClass(
      "card bg-secondary text-white w-50 p-5 m-auto"
    );
    $("#result-message").append(nextButton);
    displayTotal();
  });

  $("#submit-button-2").click(function() {
    $("#timers-div").hide();
    $("#q2-div").hide();
    $("#result-message").show();
    stop();

    var answer2 = $("input[type=radio][name=question2]:checked").val();
    if (answer2 === "Canada") {
      correctAnswers++;
      var response_text = "<p>Congratulation!!!</p> <p>You are correct!</p>";
    } else if (answer2 === "United States of America" || answer2 === "Russia") {
      incorrectAnswers++;
      var response_text =
        "<p>Great Try!</p> <p>CORRECT ANSWER: The country ranks second in terms of land area in the world: CANADA</p>";
    } else {
      noAnswers++;
      var response_text =
        "<p>Not Sure?!</p> <p>CORRECT ANSWER: The country ranks second in terms of land area in the world: CANADA</p>";
    }
    $("#result-message").html(response_text);
    $("#result-message").addClass(
      "card bg-secondary text-white w-50 p-5 m-auto"
    );
    $("#result-message").append(nextButton2);
    displayTotal();
  });

  $("#submit-button-3").click(function() {
    $("#timers-div").hide();
    $("#q3-div").hide();
    $("#result-message").show();
    stop();

    var answer3o1 = $("input[type=checkbox][name=question3-1]:checked").val();
    var answer3o2 = $("input[type=checkbox][name=question3-2]:checked").val();
    var answer3o3 = $("input[type=checkbox][name=question3-3]:checked").val();

    if (answer3o1 && answer3o3 && !answer3o2) {
      correctAnswers++;
      var response_text = "<p>Congratulation!!!</p> <p>You are correct!</p>";
    } else if (!answer3o1 && !answer3o2 && !answer3o3) {
      noAnswers++;
      var response_text =
        "<p>Not Sure?!</p> <p>CORRECT ANSWER: The countries have the largest production of manganese in the world: CHINA and SOUTH AFRICA</p>";
    } else {
      incorrectAnswers++;
      var response_text =
        "<p>Great Try!</p><p>CORRECT ANSWER: The countries have the largest production of manganese in the world: CHINA and SOUTH AFRICA</p>";
    }
    $("#result-message").html(response_text);
    $("#result-message").addClass(
      "card bg-secondary text-white w-50 p-5 m-auto"
    );
    $("#result-message").append(nextButton3);
    displayTotal();
  });

  $("#submit-button-4").click(function() {
    $("#timers-div").hide();
    $("#q4-div").hide();
    $("#result-message").show();
    stop();

    var answer4 = $("input[type=radio][name=question4]:checked").val();
    if (answer4 === "Malaysia") {
      correctAnswers++;
      var response_text = "<p>Congratulation!!!</p> <p>You are correct!</p>";
    } else if (answer4 === "Thailand" || answer4 === "Singapore") {
      incorrectAnswers++;
      var response_text =
        "<p>Great Try!</p> <p>CORRECT ANSWER: The country has the largest production of rubber in the world: MALAYSIA</p>";
    } else {
      noAnswers++;
      var response_text =
        "<p>Not Sure?!</p> <p>CORRECT ANSWER: The country has the largest production of rubber in the world: MALAYSIA</p>";
    }
    $("#result-message").html(response_text);
    $("#result-message").addClass(
      "card bg-secondary text-white w-50 p-5 m-auto"
    );
    $("#result-message").append(nextButton4);
    displayTotal();
  });

  $("#submit-button-5").click(function() {
    $("#timers-div").hide();
    $("#q5-div").hide();
    $("#result-message").show();
    stop();

    var answer5 = $("input[type=radio][name=question5]:checked").val();
    if (answer5 === "Japan") {
      correctAnswers++;
      var response_text = "<p>Congratulation!!!</p> <p>You are correct!</p>";
    } else if (answer5 === "Vietnam" || answer5 === "Korea") {
      incorrectAnswers++;
      var response_text =
        "<p>Great Try!</p> <p>CORRECT ANSWER: The country also has the name of 'the Land of Rising Sun' is: JAPAN</p>";
    } else {
      noAnswers++;
      var response_text =
        "<p>Not Sure?!</p> <p>CORRECT ANSWER: The country also has the name of 'the Land of Rising Sun' is: JAPAN</p>";
    }
    $("#result-message").html(response_text);
    $("#result-message").addClass(
      "card bg-secondary text-white w-50 p-5 m-auto"
    );
    $("#result-message").append(nextButton5);
    displayTotal();
  });
});

function startGame() {
  $("#start-button").show();
  $("#form-questions").hide();
  $("#final-answers").hide();
}

function decrement() {
  time--;

  $("#timers").text(time);

  if (time === 0) {
    clearInterval(intervalId);
    time = 10;
    $("#timers").text(time);
    
    $("#try-again-div").html("<p>Time's up!!! Try Again!");
    $("#try-again-div").addClass(
      "card bg-secondary text-white w-50 p-5 m-auto"
    );
    $("#try-again-div").append(restartButton);
    $("#try-again-div").show();
    $("#result-message").hide();
    $("#form-questions").hide();
  }
}

function start() {
  intervalId = setInterval(decrement, 1000);
}

function stop() {
  clearInterval(intervalId);
  time = 10;
  $("#timers").text(time);
}

function displayTotal() {
  $("#correct-answer")
    .text(correctAnswers)
    .addClass("text-white");
  $("#incorrect-answer").text(incorrectAnswers);
  $("#no-answer")
    .text(noAnswer)
    .addClass("text-white");
}

//SIDE NOTE: Why the below code is not working??? //because this function only work once and does not read through the newly made button
// $("#next-button").click(function(){ ... });
