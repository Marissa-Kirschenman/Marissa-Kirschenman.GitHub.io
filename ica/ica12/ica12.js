const newQuoteButton = document.querySelector('#js-new-quote');
const showAnswerButton = document.querySelector('#js-tweet');

newQuoteButton.addEventListener('click', getQuote);
showAnswerButton.addEventListener('click', showAnswer);

function getQuote(){
    console.log('new quote button clicked');
}

const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

fetch(apiEndpoint)
.then(response => {
    if (!response.ok) {
        throw new Error ('Network response was not ok')
    }
    return response .json();
})

.then(data => {
    console.log(data);
    displayQuote(data.question)

})

.catch(error => {
    console.error ('There has been a problem with your fetch operation:', error);
    alert('Failed to fetch quote. Please try again later.')
});

function displayQuote(quote) {
    const quoteTextElement = document.querySelector('#js-quote-text');
    quoteTextElement.textContent= quote;
}

window.addEventListener('load', getQuote);