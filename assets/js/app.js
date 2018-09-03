//Set default time for the quiz question
var timer = 30;

//variable to keep the timer interval
var timerInterval;

//run the timer with the interval
function runTimer(){
    clearInterval(timerInterval)
    timerInterval = setInterval(timeDown, 1000)
}

//increment the timer
function timeDown(){
    timer--

    $(".timer").text(timer)

    //if the timer hits 0 - do somthing
    if(timer === 0){
        stopTimer()

        alert("You ran out of time!")
    }
}

//stop the timer by clearng the timeout 
function stopTimer(){
    clearInterval(timerInterval)
}


runTimer();


//set the questions in an object or array

//loop through the questions and display them on the screen

//display the possible answer choices for the questions

//let the user pick an answer 

//check to see if the answer is correct

//update the score behind the scences

//quiz ends and we need to display the quiz score out of the possible correct