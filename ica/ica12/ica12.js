document.addEventListener('DOMContentLoaded', function() {
    const quoteButton = document.querySelector('#js-new-quote');
    const answerLink = document.querySelector('#js-tweet');
    const quoteDisplay = document.querySelector ('#js-quote-text');
    const answerDisplay = document.querySelector('#js-answer-text');
    const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

quoteButton.addEventListener('click', getQuote);
function getQuote() {
    answerDisplay.textContent = '';
    answerLink.removeAttribute('data-answer');


    fetch(apiEndpoint)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Alert: An error occured generating trivia');
        }

    })

    .then(data => {
        displayQuote(data.question);
        answerLink.dataset.answer = data.answer;
       
    })

    .catch(error => {
        console.error('Error:', error);
        alert('Error fetching triva question: '+ error.message);
    });

} 

function displayQuote(quote) {
    quoteDisplay.textContent = quote;
}


answerLink.addEventListener('click', (event) => {
    event.preventDefault();  
    displayAnswer(answerLink.dataset.answer);
});

function displayAnswer(answer) {
    if (answer) {
        answerDisplay.textContent = answer;
    } else {
        answerDisplay.textContent = 'error generating answer';
    }
}
getQuote();

});