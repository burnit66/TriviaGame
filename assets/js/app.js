//Set default time for the quiz question
var timer = 30;

//variable to keep the timer interval
var timerInterval;

//run the timer with the interval
function runTimer() {
    clearInterval(timerInterval)
    timerInterval = setInterval(timeDown, 1000)
}

//increment the timer
function timeDown() {
    timer--

    $(".timer").text(timer)

    //if the timer hits 0 - do somthing
    if (timer === 0) {
        nextQuestion()
        restartTimer()
        alert("You ran out of time!")
    }
}

//stop the timer by clearng the timeout 
function stopTimer() {
    clearInterval(timerInterval)
}

function restartTimer() {
    timer = 30;
}









//set the questions in an object or array
//set question as object, name the key as correct answer, check to see if the text of the this click event is equal to question.correct
var question1 = {
    q: "Question 1",
    correct: "Correct 1",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4"
}

var question2 = {
    q: "Question 2",
    correct: "Correct 2",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4"
}

var question3 = {
    q: "Question 3",
    correct: "Correct 3",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4"
}

var question4 = {
    q: "Question 4",
    correct: "Correct 4",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4"
}

var question5 = {
    q: "Question 5",
    correct: "Correct 5",
    a2: "Answer 2",
    a3: "Answer 3",
    a4: "Answer 4"
}






//global variables
//questionArray of the objects
var questionArray = [question1, question2, question3, question4, question5]
//score - correct quiz answers
var score = 0;
//possible - score/this number
var possible = questionArray.length;
//quiz index to know what number we are on
var quizIndex = 0;








//shuffle the questions in the questions array
var shuffle = function (array) {
    //loop through array argument
    for (var i = array.length - 1; i > 0; i--) {
        //set variable to random number that will exist in the array
        var j = Math.floor(Math.random() * (i + 1));
        //set variable to current index
        var k = array[i];
        //set current index to random index
        array[i] = array[j];
        //set random index to current index
        array[j] = k;
    }
    return array;
}








//display the possible answer choices for the questions
//use Object.values to grab the key values and put them into an array
//loop through array and randomly place them in the blocks
var renderQuestion = function () {
    $(".question").text(questionArray[quizIndex].q)
    $(".endGame").hide();

    var questionAnswers = Object.values(questionArray[quizIndex])

    questionAnswers.shift()

    shuffle(questionAnswers)

    $('.answer1').text(questionAnswers[0])
    $('.answer2').text(questionAnswers[1])
    $('.answer3').text(questionAnswers[2])
    $('.answer4').text(questionAnswers[3])
}


//function to check for the end of the game
var checkEnd = function () {
    if (quizIndex > 5) {
        $(".qContainer").hide()
        $(".endGame").show()

        $(".score").text("You scored a: " + score + "/" + possible)
    } else {
        return false;
    }
}




//let the user pick an answer 
//check to see if the answer is correct
//update the score behind the scences
$(document).on("click", "p", function () {
    var userInput = $(this).text()

    if (userInput === questionArray[quizIndex].correct) {
        score += 1
        nextQuestion()
    } else {
        nextQuestion()
    }
})

var nextQuestion = function () {
    quizIndex++
    restartTimer()
    checkEnd()
    renderQuestion()
}

renderQuestion()
runTimer()







//quiz ends and we need to display the quiz score out of the possible correct

//integrate the timer functionality into the quiz