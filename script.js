// Pytania i odpowiedzi
const questions = [
    { text: 'Z czego słynie miasto Busko-Zdrój?',  
        answers: { a: 'Z licznych zabytków gotyckich', b: 'Z leczniczych wód siarczkowych', c: 'Z największego parku w Polsce', d: 'Z produkcji wina' },  
        correct: 'b' },      
    { text: 'Jak nazywa się główny park w Busku-Zdroju?',  
        answers: { a: 'Park Zdrojowy', b: 'Park Słowackiego', c: 'Park Centralny', d: 'Park Krajobrazowy' },  
        correct: 'a' },            
    { text: 'Kto jest upamiętniony na słynnej ławeczce w Busku-Zdroju?',  
        answers: { a: 'Fryderyk Chopin', b: 'Ignacy Paderewski', c: 'Wojciech Belon', d: 'Krzysztof Penderecki' },  
        correct: 'c' },  
    { text: 'W jakim województwie leży Busko-Zdrój?',  
        answers: { a: 'Małopolskie', b: 'Lubelskie', c: 'Mazowieckie', d: 'Świętokrzyskie' },  
        correct: 'd' }, 
    { text: 'Który festiwal muzyczny odbywa się w Busku-Zdroju?',  
        answers: { a: 'Open’er Festival', b: 'Festiwal im. Krystyny Jamroz', c: 'Festiwal Kultury Żydowskiej', d: 'Festiwal Filmowy w Gdyni' },  
        correct: 'b' },  
    { text: 'Z jakiego okresu pochodzi założenie uzdrowiska w Busku-Zdroju?',  
        answers: { a: 'XVII wieku', b: 'XX wieku', c: 'XVIII wieku', d: 'XIX wieku' },  
        correct: 'd' },               
];

let currentQuestionIndex = 0;

// Wczytanie pytania
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = `Pytanie ${currentQuestionIndex + 1}: ${question.text}`;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    Object.keys(question.answers).forEach(key => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = `${key.toUpperCase()}: ${question.answers[key]}`;
        button.onclick = () => checkAnswer(key);
        answersDiv.appendChild(button);
    });
}

// Sprawdzenie odpowiedzi
function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer === question.correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            window.location.href = 'result.html';
        }
    } else {
        alert('Niestety, to błędna odpowiedź. Spróbuj jeszcze raz!');
        window.location.href = 'index.html';
    }
}

// Wczytanie pytania po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('question-text')) {
        loadQuestion();
    }
});
