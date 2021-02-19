

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName;
 //defined as empty string
const input = require('readline-sync');
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["Who was the first American woman in space?", "True or false: 5000 meters = 5 kilometers.", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers;
let score = 0;


function askForName() {
   // TODO 1.1b: Ask for candidate's name //
   candidateName = input.question("Hello Candidate! Let's start with your name! What is your name?\nEnter name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i = 0; i < questions.length; i++)
  {
    candidateAnswer = input.question(questions[i] + "\n");
    if(candidateAnswer.toLowerCase() == correctAnswers[i].toLowerCase())
    {
      console.log("You're Correct!");
      score++;
    }
    else{
      console.log("Incorrect answer.");
    } 

  }
}

function gradeQuiz(score) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = (score / 5)*100;
  console.log("You scored : " + grade + "%");
  if(grade >= 80)
  {
    console.log("Congratulations! You have passed!");
  }
  else{
    console.log("We regret to inform you, that you have failed.")
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello Candidate ${candidateName}! Welcome to the quiz!`);  
  askQuestion();
  gradeQuiz(score);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};