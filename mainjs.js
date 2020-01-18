let dataArray = [dataA, dataB]

// getting my targets on the html
let question = document.querySelector("#quest");
let optionA = document.querySelector("#optA");
let optionB = document.querySelector("#optB");
let optionC = document.querySelector("#optC");
let optionD = document.querySelector("#optD");
let answer1 = document.querySelector("#RorWr");
let pickedOption = "";
let correctCounter = 0;
let wrongCounter =0;



//getting the data for each question

dataArray.forEach (function(element)) {
    let currentQuestion = element
}



let currentQuestion = dataB;
console.log(currentQuestion);
let currentAnswer = dataB.correctAnswer;
console.log(currentAnswer);

// putting the question on the page
question.textContent = currentQuestion.questionX;
optionA.textContent = "A. " + currentQuestion.answerA;
optionB.textContent = "B. " + currentQuestion.answerB;
optionC.textContent = "C. " + currentQuestion.answerC;
optionD.textContent = "D. " + currentQuestion.answerD;

//making the event listeners for each answer option
document.getElementById("optA").addEventListener("click", function () {
    var pickedOption = "A";
    console.log(`I picked ${pickedOption}`);
    if (pickedOption == currentAnswer) {
        console.log("correct");
        correctCounter = correctCounter + 1;
        console.log(correctCounter);
    }
    else {    
        console.log("wrong");
        wrongCounter = wrongCounter + 1;
        console.log(wrongCounter);
    }
    });
document.getElementById("optB").addEventListener("click", function () {
    var pickedOption = "B";
    console.log(`I picked ${pickedOption}`);
    if (pickedOption == currentAnswer) {
        console.log("correct");
        correctCounter = correctCounter + 1;
        console.log(correctCounter);
    }
    else {    
        console.log("wrong");
        wrongCounter = wrongCounter + 1;
        console.log(wrongCounter);
    }
});
document.getElementById("optC").addEventListener("click", function () {
    var pickedOption = "C";
    console.log(`I picked ${pickedOption}`);
    if (pickedOption == currentAnswer) {
        console.log("correct");
        correctCounter = correctCounter + 1;
        console.log(correctCounter);
    }
    else {    
        console.log("wrong");
        wrongCounter = wrongCounter + 1;
        console.log(wrongCounter);
    }
});
document.getElementById("optD").addEventListener("click", function () {
    var pickedOption = "D";
    console.log(`I picked ${pickedOption}`);
    if (pickedOption == currentAnswer) {
        console.log("correct");
        correctCounter = correctCounter + 1;
        console.log(correctCounter);
    }
    else {    
        console.log("wrong");
        wrongCounter = wrongCounter + 1;
        console.log(wrongCounter);
    }
});
