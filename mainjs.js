//intializing variables
let x = 0;
let wrongA = 0;
let rightA = 0;
totalAnswers = 0;

//intial load question
loadQuestion();

//putting the new question on the page and loading data for answers
function loadQuestion() {
    x = x + 1;
    $("#question").empty().text((x) + ": " + dataArray[x][0]);
    $("#optionA").empty().text("A. " + dataArray[x][1]);
    $("#optionB").empty().text("B. " + dataArray[x][2]);
    $("#optionC").empty().text("C. " + dataArray[x][3]);
    $("#optionD").empty().text("D. " + dataArray[x][4]);
};

//listen for clicking
$(document).ready(function () {
    $("#optionA").on("click", function () {
        if (dataArray[x][1] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionB").on("click", function () {
        if (dataArray[x][2] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionC").on("click", function () {

        if (dataArray[x][3] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionD").on("click", function () {

        if (dataArray[x][4] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
});

//If the question is answered correctly
function URCorrect() {
    $("#congrats").text("Correct!");
    rightA = rightA + 1;
    checkStatus();
    loadQuestion();
};

//if the question is answered incorretly
function URWrong() {
    $("#congrats").text("Wrong!");
    wrongA = wrongA + 1;
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

//end Game process
function endGame() {
    console.log("game Over");
    alert("game over");
};