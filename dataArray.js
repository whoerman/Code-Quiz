let dataArray = [dataA, dataB];
// getting my targets on the html
let question = document.querySelector("#quest");
let optionA = document.querySelector("#optA");
let optionB = document.querySelector("#optB");
let optionC = document.querySelector("#optC");
let optionD = document.querySelector("#optD");
let answer1 = document.querySelector("#RorWr");
//getting the data for each question
let currentQuestion = dataA;
console.log(currentQuestion);
// putting the question on the page
question.textContent = currentQuestion.questionX;
optionA.textContent = "A. " + currentQuestion.answerA;
optionB.textContent = "B. " + currentQuestion.answerB;
optionC.textContent = "C. " + currentQuestion.answerC;
optionD.textContent = "D. " + currentQuestion.answerD;
// compare the picked option to correct answer
function checkAnswer() {
    if (pickedOption == currentQuestion.correctAnswer) {
        console.log("correct");
        {
            console.log("wrong");
        }
    }
}
//making the event listeners for each answer option
document.getElementById("optA").addEventListener("click", function () {
    let pickedOption = "A";
    console.log(`I picked ${pickedOption}`);
    checkAnswer();
});
document.getElementById("optB").addEventListener("click", function () {
    let pickedOption = "B";
    console.log(`I picked ${pickedOption}`);
    checkAnswer();
});
document.getElementById("optC").addEventListener("click", function () {
    let pickedOption = "C";
    console.log(`I picked ${pickedOption}`);
    checkAnswer();
});
document.getElementById("optD").addEventListener("click", function () {
    let pickedOption = "D";
    console.log(`I picked ${pickedOption}`);
    checkAnswer();
});
