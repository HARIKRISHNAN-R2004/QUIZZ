const quizData = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
    { question: "Who developed the theory of relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"], answer: "Albert Einstein" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Saturn", "Venus"], answer: "Mars" },
    { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], answer: "Leonardo da Vinci" },
    { question: "What is the largest ocean on Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "George Orwell"], answer: "Harper Lee" },
    { question: "What is the hardest natural substance on Earth?", options: ["Diamond", "Quartz", "Gold", "Ruby"], answer: "Diamond" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["Japan", "China", "South Korea", "Vietnam"], answer: "Japan" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" },
    { question: "Who was the first person to step on the Moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], answer: "Neil Armstrong" },
    { question: "Who is the author of '1984'?", options: ["George Orwell", "Ernest Hemingway", "F. Scott Fitzgerald", "J.R.R. Tolkien"], answer: "George Orwell" },
    { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury" },
    { question: "Which organ produces insulin in the human body?", options: ["Pancreas", "Liver", "Kidney", "Heart"], answer: "Pancreas" },
    { question: "Which is the largest mammal in the world?", options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"], answer: "Mount Everest" },
    { question: "Who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "J.D. Salinger"], answer: "F. Scott Fitzgerald" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pt"], answer: "Au" },
    { question: "Which planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Saturn"], answer: "Earth" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Jonas Salk"], answer: "Alexander Fleming" },
    { question: "What is the largest organ in the human body?", options: ["Skin", "Heart", "Brain", "Liver"], answer: "Skin" },
     { question: "Who is the author of '1984'?", options: ["George Orwell", "Ernest Hemingway", "F. Scott Fitzgerald", "J.R.R. Tolkien"], answer: "George Orwell" },
    { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury" },
    { question: "Which organ produces insulin in the human body?", options: ["Pancreas", "Liver", "Kidney", "Heart"], answer: "Pancreas" },
    { question: "Which is the largest mammal in the world?", options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"], answer: "Mount Everest" },
    { question: "Who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "J.D. Salinger"], answer: "F. Scott Fitzgerald" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pt"], answer: "Au" },
    { question: "Which planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Saturn"], answer: "Earth" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Jonas Salk"], answer: "Alexander Fleming" },
    { question: "What is the largest organ in the human body?", options: ["Skin", "Heart", "Brain", "Liver"], answer: "Skin" }
];

const homeDiv = document.getElementById('home');
const quizDivs = [document.getElementById('quiz1'), document.getElementById('quiz2'), document.getElementById('quiz3')];
const timers = [document.getElementById('timer1'), document.getElementById('timer2'), document.getElementById('timer3')];

let currentPage = 0;
let timeLeft = 10 * 60;
let interval;

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    startQuiz();
});

function startQuiz() {
    homeDiv.style.display = 'none';
    quizDivs[0].style.display = 'block';
    loadQuestions();
    startTimer();
}

function loadQuestions() {
    quizData.forEach((question, index) => {
        const quizIndex = Math.floor(index / 10);
        const questionContainer = document.getElementById(`questionsContainer${quizIndex + 1}`);
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        const questionTitle = document.createElement('h3');
        questionTitle.innerText = question.question;
        questionDiv.appendChild(questionTitle);
        question.options.forEach(option => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionDiv.appendChild(optionLabel);
        });
        questionContainer.appendChild(questionDiv);
    });
}

function startTimer() {
    interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            submitQuiz();
        } else {
            timeLeft--;
            updateTimers();
        }
    }, 1000);
}

function updateTimers() {
    timers.forEach(timer => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timer.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });
}

document.getElementById('next1').addEventListener('click', function() {
    goToPage(1);
});

document.getElementById('next2').addEventListener('click', function() {
    goToPage(2);
});

document.getElementById('prev2').addEventListener('click', function() {
    goToPage(0);
});

document.getElementById('prev3').addEventListener('click', function() {
    goToPage(1);
});

document.getElementById('submit').addEventListener('click', function() {
    submitQuiz();
});

function goToPage(pageIndex) {
    quizDivs[currentPage].style.display = 'none';
    quizDivs[pageIndex].style.display = 'block';
    currentPage = pageIndex;
}

function submitQuiz() {
    clearInterval(interval);
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    let score = 0;
    quizData.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });

    const userScore = { name: userName, email: userEmail, score: score };
    saveScore(userScore);

    const queryString = `name=${userName}&email=${userEmail}&score=${score}`;
    window.location.href = `result.html?${queryString}`;
}

function saveScore(userScore) {
    const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    scores.push(userScore);
    localStorage.setItem('quizScores', JSON.stringify(scores));
}
