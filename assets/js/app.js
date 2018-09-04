//set the questions in an object or array
//set question as object, name the key as correct answer, check to see if the text of the this click event is equal to question.correct
var question1 = {
    q: "What is the largest planet in our Solar System?",
    correct: "Jupiter",
    a2: "Earth",
    a3: "Saturn",
    a4: "Venus"
}

var question2 = {
    q: "Which of these cities is closest to London, UK?",
    correct: "Boston, MA",
    a2: "New York, NY",
    a3: "Atlanta, GA",
    a4: "Miami, FL"
}

var question3 = {
    q: "What temperature is the same in Celsius and Fahrenheit?",
    correct: "-40",
    a2: "40",
    a3: "0",
    a4: "100"
}

var question4 = {
    q: "What is the color of Donald Duck's bowtie?",
    correct: "Red",
    a2: "Green",
    a3: "Blue",
    a4: "Yellow"
}

var question5 = {
    q: "How many blue stripes are there on the American flag?",
    correct: "0",
    a2: "13",
    a3: "7",
    a4: "9"
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
//Set default time for the quiz question
var timer = 15;
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

    //integrate the timer functionality into the quiz
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
    timer = 15;
}


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
//quiz ends and we need to display the quiz score out of the possible correct
var checkEnd = function () {
    if (quizIndex > 4) {
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

    console.log(quizIndex)

    if (userInput === questionArray[quizIndex].correct) {
        score += 1
        alert("Correct! You are " + score + " for " + possible)
        nextQuestion()
    } else {
        alert("Sorry, that wasn't right. You are " + score + " for " + possible)
        nextQuestion()
    }
})

//iterate to the next question - restart the timer - check if its the end of the game 
var nextQuestion = function () {
    quizIndex++
    restartTimer()
    checkEnd()
    renderQuestion()
}

//create function to restart the game and attach it to the restart button - store in variable to make global scope
var restartFunction = $(document).on("click", ".restart", function () {
    $(".endGame").hide()
    $(".qContainer").show()
    quizIndex = 0
    score = 0
    restartTimer()
    renderQuestion()
})

renderQuestion()
runTimer()