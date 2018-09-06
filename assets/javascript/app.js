//START button
//show at the beginning
//hide the button when it is clicked
//show the timer and the first question
//Timer Starts decremeting from 10 seconds
//if it gets to zero, the answer will display === same as the submit button is clicked

var time = 11;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswers = 0;

var nextButton = $("<button>");
nextButton.text("NEXT");
nextButton.addClass("btn btn-info w-25 next-button");
nextButton.attr("id", "next-button-1");

$(document).on("click", "#next-button-1", function() {
  $("#result-message").hide();
  $("#timers-div").show();
  $("#q2-div").show();
  start();
});

var nextButton2 = $("<button>");
nextButton2.text("NEXT");
nextButton2.addClass("btn btn-info w-25 next-button");
nextButton2.attr("id", "next-button-2");

$(document).on("click", "#next-button-2", function() {
    $("#result-message").hide();
    $("#timers-div").show();
    $("#q3-div").show();
    start();
  });


//Why the below code is not working???
// $("#next-button").click(function(){
//   // $("#result-message").hide();
//   // $("#timers-div").show();
//   // $("#q2-div").show();
//   // start();
//   console.log("???");
// });

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
      $("#result-message").html(
        "<p>Congratulation!!!</p> <p>You are correct!</p>"
      );
      $("#result-message").addClass(
        "card bg-secondary text-white w-50 p-5 m-auto"
      );
      $("#result-message").append(nextButton);
      
    } else if (answer1 === "Argentina" || answer1 === "Mexico") {
      incorrectAnswers++;
      $("#result-message").html(
        "<p>Great Try!</p> <p>CORRECT ANSWER: The largest coffee growing country in the world: BRAZIL</p>"
      );
      $("#result-message").addClass("card bg-secondary text-white w-50 p-5");
    } else {
      noAnswers++;
      $("#result-message").html(
        "<p>Not Sure?!</p> <p>CORRECT ANSWER: The largest coffee growing country in the world: BRAZIL</p>"
      );
      $("#result-message").addClass("card bg-secondary text-white w-50 p-5");
    }
  });



  $("#submit-button-2").click(function() {
    $("#timers-div").hide();
    $("#q2-div").hide();
    $("#result-message").show();
    stop();

    var answer2 = $("input[type=radio][name=question2]:checked").val();
    if (answer2 === "Canada") {
      correctAnswers++;
      $("#result-message").html(
        "<p>Congratulation!!!</p> <p>You are correct!</p>"
      );
      $("#result-message").addClass(
        "card bg-secondary text-white w-50 p-5 m-auto"
      );
      $("#result-message").append(nextButton2);
      
    } else if (answer2 === "United States of America" || answer2 === "Russia") {
      incorrectAnswers++;
      $("#result-message").html(
        "<p>Great Try!</p> <p>CORRECT ANSWER: CORRECT ANSWER: The country ranks second in terms of land area in the world: CANADA</p>"
      );
      $("#result-message").addClass("card bg-secondary text-white w-50 p-5");
      
    } else {
      noAnswers++;
      $("#result-message").html(
        "<p>Not Sure?!</p> <p>CORRECT ANSWER: The country ranks second in terms of land area in the world: CANADA</p>"
      );
      $("#result-message").addClass("card bg-secondary text-white w-50 p-5");
    }
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
    stop();
    //display answer
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

//QUESTIONS  (same for each question)
//show with the timer starts
//includes a SUBMIT button

//SUBMIT button
//when the submit button is clicked, it will compare the answers
//the timer stops
//save up the answers (for final display of all the correct/incorrect/unselected answers)
//if it is a correct answer, display text- congratualtion, display image, and display the correct answer
//if it is incorrect/unselected, display text- Great try, but.../ You are not sure?, display image, and display correct answer
//a NEXT button to go to the next question

//NEXT button
//show second question
//timer starts
//includes submit button

//When we get to the last question, after submitting the answer,
//there is no next button; replace it with SHOW RESULTS button

//SHOW RESULTS button
//display final-answer id
//includes a RESTART button to restart the entire game
