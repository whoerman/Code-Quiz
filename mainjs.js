let dataArray = [dataA, dataB, dataC]

let x = 1;

//putting the question on the page

function loadQuestion() {
$("#question").empty().text(dataArray [x] [0]);
$("#optionA").empty().text("A. " + dataArray [x] [1]).animate({left:"100px"},2000);
$("#optionB").empty().text("B. " + dataArray [x] [2]);
$("#optionC").empty().text("C. " + dataArray [x] [3]);
$("#optionD").empty().text("D. " + dataArray [x] [4]);
};

function URCorrect() {
    console.log("correct");
};

function URWrong() {
    console.log("wrong");
};

loadQuestion();

//listen for clicking
$(document).ready(function() {
    $("#optionA").click(function() {
        if (dataArray[x][1] === dataArray[x][5]) {
            URCorrect();
        };
        if (dataArray[x][1] !== dataArray[x][5]) {
            URWrong();
        };
    });
    $("#optionB").click(function() {
        if (dataArray[x][2] === dataArray[x][5]) {
            URCorrect();
        };
        if (dataArray[x][2] !== dataArray[x][5]) {
            URWrong();
        };
    });
    $("#optionC").click(function() {
        if (dataArray[x][3] === dataArray[x][5]) {
            URCorrect();
        };
        if (dataArray[x][3] !== dataArray[x][5]) {
            URWrong();
        };
    });
    $("#optionD").click(function() {
        if (dataArray[x][4] === dataArray[x][5]) {
            URCorrect();
        };
        if (dataArray[x][4] !== dataArray[x][5]) {
            URWrong();
        };
    });
                
});
