document.addEventListener('DOMContentLoaded', () => {
    // State Management
    let currentTopic = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let isAnswered = false;

    // DOM Elements
    const topicSelection = document.getElementById('topic-selection');
    const topicGrid = document.getElementById('topic-grid');
    const quizContainer = document.getElementById('quiz-container');
    const resultsScreen = document.getElementById('results-screen');
    
    const topicNameDisplay = document.getElementById('topic-name');
    const questionCountDisplay = document.getElementById('question-count');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-btn');
    
    const explanationContainer = document.getElementById('explanation-container');
    const explanationContent = document.getElementById('explanation-content');
    const resultBadge = document.getElementById('result-badge');
    const nextBtn = document.getElementById('next-btn');
    
    const finalScore = document.getElementById('final-score');
    const scoreMessage = document.getElementById('score-message');
    const restartBtn = document.getElementById('restart-btn');
    const backBtn = document.getElementById('back-btn');

    // Initialize App
    function init() {
        populateTopics();
        attachEventListeners();
    }

    function populateTopics() {
        const topics = Object.keys(questionBank);
        topicGrid.innerHTML = '';
        
        topics.forEach(topic => {
            const btn = document.createElement('button');
            btn.className = 'topic-btn';
            btn.textContent = topic;
            btn.addEventListener('click', () => startQuiz(topic));
            topicGrid.appendChild(btn);
        });
    }

    function attachEventListeners() {
        submitBtn.addEventListener('click', handleAnswerSubmission);
        nextBtn.addEventListener('click', loadNextQuestion);
        restartBtn.addEventListener('click', () => {
            resultsScreen.classList.add('hidden');
            topicSelection.classList.remove('hidden');
        });
        backBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to exit this quiz?')) {
                quizContainer.classList.add('hidden');
                topicSelection.classList.remove('hidden');
            }
        });
    }

    function startQuiz(topic) {
        currentTopic = topic;
        currentQuestionIndex = 0;
        score = 0;
        
        topicSelection.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        resultsScreen.classList.add('hidden');
        
        loadQuestion();
    }

    function loadQuestion() {
        isAnswered = false;
        selectedOption = null;
        submitBtn.disabled = true;
        explanationContainer.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        
        const questions = questionBank[currentTopic];
        const question = questions[currentQuestionIndex];
        
        topicNameDisplay.textContent = currentTopic;
        questionCountDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        questionText.textContent = question.question;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.textContent = option;
            div.dataset.index = index;
            div.addEventListener('click', () => selectOption(div));
            optionsContainer.appendChild(div);
        });
    }

    function selectOption(element) {
        if (isAnswered) return;
        
        const allOptions = document.querySelectorAll('.option');
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        element.classList.add('selected');
        selectedOption = parseInt(element.dataset.index);
        submitBtn.disabled = false;
    }

    function handleAnswerSubmission() {
        if (selectedOption === null || isAnswered) return;
        
        isAnswered = true;
        const questions = questionBank[currentTopic];
        const question = questions[currentQuestionIndex];
        const isCorrect = selectedOption === question.correctAnswer;
        
        if (isCorrect) score++;
        
        // Highlight correct/incorrect answers
        const allOptions = document.querySelectorAll('.option');
        allOptions[selectedOption].classList.add(isCorrect ? 'correct' : 'incorrect');
        if (!isCorrect) {
            allOptions[question.correctAnswer].classList.add('correct');
        }
        
        showExplanation(isCorrect, question);
        submitBtn.classList.add('hidden');
    }

    function showExplanation(isCorrect, question) {
        explanationContainer.classList.remove('hidden');
        resultBadge.textContent = isCorrect ? 'CORRECT' : 'INCORRECT';
        resultBadge.className = `result-badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}`;
        
        explanationContent.innerHTML = `
            <div class="explanation-section">
                <h4>Correct Answer Explanation:</h4>
                <p>${question.explanations.correct}</p>
            </div>
            <div class="explanation-section">
                <h4>Why the others are wrong:</h4>
                <p>${question.explanations.incorrect}</p>
            </div>
        `;
        
        if (currentQuestionIndex === questionBank[currentTopic].length - 1) {
            nextBtn.textContent = 'See Results';
        } else {
            nextBtn.textContent = 'Next Question';
        }
    }

    function loadNextQuestion() {
        currentQuestionIndex++;
        const questions = questionBank[currentTopic];
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizContainer.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        
        const total = questionBank[currentTopic].length;
        finalScore.textContent = `${score}/${total}`;
        
        let message = '';
        const percentage = (score / total) * 100;
        
        if (percentage === 100) message = "Perfect! You've mastered this topic.";
        else if (percentage >= 80) message = "Great job! You have a solid understanding.";
        else if (percentage >= 60) message = "Good effort, but a little more review might help.";
        else message = "This topic needs more focus. Keep studying!";
        
        scoreMessage.textContent = message;
    }

    init();
});
