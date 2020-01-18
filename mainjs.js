 let dataA = {
     questionX : "What is my new grandaughter's name?",
     answerA : "Sally",
     answerB : "Jill",
     answerC : "Clara",
     answerD : "Maeve",
     correctAnswer: "C",
}

let dataB = {
    questionX : "What is my first grandaughter's name?",
    answerA : "Sally",
    answerB : "Jill",
    answerC : "Clara",
    answerD : "Maeve",
    correctAnswer: "D",
}

let dataArray = [dataA, dataB]

// getting my targets on the html
let question = document.querySelector("#quest");
let optionA = document.querySelector("#optA");
let optionB = document.querySelector("#optB");
let optionC= document.querySelector("#optC");
let optionD = document.querySelector("#optD");
let answer1 = document.querySelector("#RorWr")


//getting the dta for each question
let currentQuestion = dataA
console.log(currentQuestion)

// putting the question on the page
question.textContent = currentQuestion.questionX;
optionA.textContent = "A. " + currentQuestion.answerA;
optionB.textContent = "B. " + currentQuestion.answerB;
optionC.textContent = "C. " + currentQuestion.answerC;
optionD.textContent = "D. " + currentQuestion.answerD;