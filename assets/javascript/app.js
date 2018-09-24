
//a questions correct counter, a questions incorrect counter, a questions unanswered counter
var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var counter = 0;

var answer= $("#answer");


// This code will run as soon as the page loads
window.onload = function() {
    $("#stop").on("click", stopwatch.stop);
    $("#start").on("click", stopwatch.start);
    $("#questions").hide();
    $("#totalscorediv").hide();
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
  var stopwatch = {
  
    time: 60,
   
    start: function() {
  
      // Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
        $("#questions").show();
      }
    },
    stop: function() {
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
      $("#questions").hide();
      $("#totalscorediv").show();
      $("#display").hide();
      $("#buttons").hide();
    },

    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time--;
      //console.log(stopwatch.time);
      if (stopwatch.time===0){
        stopwatch.stop();
        $("#questions").hide();
      $("#totalscorediv").show();
      $("input").each(function(){
        if (this.checked===true) {
         if ($(this).hasClass("answer")){
          rightAnswer++;          
         } else {
           wrongAnswer++; 
         }
        }
       
      })
    
      noAnswer = 8-rightAnswer-wrongAnswer;
 
      $("#correct").text(rightAnswer);
      $("#incorrect").text(wrongAnswer);
      $("#unanswered").text(noAnswer);
    
      stopwatch.stop();


     }
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
      //console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#display").text(converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };

  $("#stop").on("click", function() {
      $("input").each(function(){
        if (this.checked===true) {
         if ($(this).hasClass("answer")){
          rightAnswer++;          
         } else {
           wrongAnswer++; 
         }
        }
       
      })
    
      noAnswer = 8-rightAnswer-wrongAnswer;
 
      $("#correct").text(rightAnswer);
      $("#incorrect").text(wrongAnswer);
      $("#unanswered").text(noAnswer);
    
      stopwatch.stop();
      console.log($(this));
   })
  
//   