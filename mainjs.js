//intializing variables
let x = 0;
let wrongA = 0;
let rightA = 0;
totalAnswers = 0;
let timeLeft = 90;
let pageArray = localStorage.getItem("storedArray");
let timerStarted = false;
let finalScore = 0;

//start coundown timer
function startTimer() {
    timerStarted = true;
countdownID = setInterval(function() {
    timeLeft--;
    console.log(timeLeft);
    $countdownTimer.empty().text(JSON.stringify(timeLeft) + " seconds");
    if (timeLeft < 0) {
        clearInterval(countdownID);
        endGame();
    }
}, 1000);
};


//finding the targets for scoring and questions variable
let $questionText = $("#question");
let $optionAText = $("#optionA");
let $optionBText = $("#optionB");
let $optionCText = $("#optionC");
let $optionDText = $("#optionD");
let $congratsText = $("#congrats");
let $minutesText = $("#minutesbtn");
let $tensecondsText = $("#tensecondsbtn");
let $secondsText = $("#secondsbtn");
let $rightbtnText = $("#rightbtn");
let $wrongbtnText = $("#wrongbtn");
let $countdownTimer = $("#countdownTimer");
let $rightAnswerLog = $("#rightAnswerLog");
let $wrongAnswerLog = $("#wrongAnswerLog");

//intial load question
$countdownTimer.empty().text("(will start on first click)");
loadQuestion();

//putting the new question on the page and loading data for answers
function loadQuestion() {
    x = x + 1;
    $rightAnswerLog.empty().text("Right Answers: " + JSON.stringify(rightA));
    $wrongAnswerLog.empty().text("Wrong Answers: " + JSON.stringify(wrongA));
    $questionText.empty().text((x) + ": " + dataArray[x][0]);
    $optionAText.empty().text("A. " + dataArray[x][1]);
    $optionBText.empty().text("B. " + dataArray[x][2]);
    $optionCText.empty().text("C. " + dataArray[x][3]);
    $optionDText.empty().text("D. " + dataArray[x][4]);
};

//If the question is answered correctly
function URCorrect() {
    $congratsText.text("Correct! 2 second bonus!").css("background-color", "#99cc90");
    rightA = rightA + 1;
    timeLeft = timeLeft +2;
    checkStatus();
    loadQuestion();
};

//if the question is answered incorretly
function URWrong() {
    $congratsText.text("Wrong! 5 second penalty!").css("background-color", "#ff726f");
    wrongA = wrongA + 1;
    timeLeft = timeLeft-5;
    $wrongbtnText.empty().text(wrongA);
    checkStatus();
    loadQuestion();
};


//check the status of the game after an answer
function checkStatus() {
    console.log("Right Answer " + rightA + " Wrong Answer " + wrongA);
    totalAnswers = rightA + wrongA;
    console.log(totalAnswers + " vs " + (dataArray.length - 1));
    if (totalAnswers < dataArray.length - 1) {
        return;
    }
    endGame();
};


//listen for clicking
$(document).ready(function () {
    $("#optionA").on("click", function () {
        if (timerStarted === false) {
            startTimer();
            console.log(timerStarted);
        };
        if (dataArray[x][1] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionB").on("click", function () {
        if (timerStarted ===false) {
            startTimer();
        };
        if (dataArray[x][2] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionC").on("click", function () {
        if (timerStarted ===false) {
            startTimer();
        };
        
        if (dataArray[x][3] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionD").on("click", function () {
        if (timerStarted ===false) {
            startTimer();
        };
        if (dataArray[x][4] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });

    $(".inputScore").on("click", function () {
        playerName = $("#inputName").val();
        resultArray();
    });

    $(".gotoResult").on("click", function () {
        playerName = $("#inputName").val();
        resultArray();
    });

    $(".gotoResult").on("click", function () {
        playerName = $("#inputName").val();
        resultArray();
    });
});

//check the status of the game after an answer
function checkStatus() {
    console.log("Right Answer " + rightA + " Wrong Answer " + wrongA);
    totalAnswers = rightA + wrongA;
    console.log(totalAnswers + " vs " + (dataArray.length - 1));
    if (totalAnswers < dataArray.length - 1) {
        return;
    }
    endGame();
};

//end Game process
function endGame() {
    clearInterval();
    clearInterval(timeLeft);
    scoreCorrect = rightA * 5;
    finalScore = timeLeft + scoreCorrect;
    console.log(finalScore);
    $countdownTimer.empty().text("Game Over!");
    console.log("game Over");
    $questionText.empty().text("Your knowledge of Javascript is amazing! Or maybe not... Input your score to see where you rank.");
    $optionAText.empty().html('<form> <div class="form-group row m-2 text-center"> <label for="inputPassword" class="col-sm-2 col-form-label">Your Name:</label>        <div class="col-sm-8"> <input type="text" class="form-control" id="inputName"> </div></div></form>');
    $optionBText.empty().html('<button type="button" class="btn btn-primary btn-lg inputScore">Click here to Input your score</button>');
    $optionCText.empty().text('<button type="button" class="btn btn-primary btn-lg clearScore">Click here to clear the high Scores!</button>');
    $optionDText.empty().html('<a class="btn btn-lg btn-success text-center gotoResult" href="./results.html" role="button">Click Here!</a>');
    $congratsText.empty();
};


function resultArray() {
    console.log("Results");
    console.log(playerName);
    console.log(finalScore);
};