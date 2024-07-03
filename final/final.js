let currentNumber = '';
document.addEventListener('DOMContentLoaded', () => {
    createDigitButtons();
    document.getElementById('restart-button').addEventListener('click', restart);
    document.getElementById('submit-button').addEventListener('click', submit);
});

function createDigitButtons() {
    const digitButtonsContainer = document.getElementById('digit-buttons');
    digitButtonsContainer.innerHTML = '';
    for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.style.position = 'absolute';
        button.style.left = `${Math.random() * 250}px`;
        button.style.top = `${Math.random() * 250}px`;
        button.addEventListener('mouseenter',() => moveButton(button));
        button.addEventListener('click', () => handleDigitClick(i));
        digitButtonsContainer.appendChild(button);
    }

}

function handleDigitClick(digit){
    if (currentNumber.length <10) {
    currentNumber += digit;
    document.getElementById('current-number').innerText = `Current number: ${currentNumber}`;
    } else {
    alert('Maxium number length reached.');
}
}

function moveButton(button) {
    const maxDistance = 35;
    const container = document.getElementById('digit-buttons');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    let newLeft = parseFloat(button.style.left)+ (Math.random() * maxDistance - maxDistance);
    let newTop = parseFloat(button.style.top)+ (Math.random() * maxDistance - maxDistance);

   
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
    button.style.position = 'absolute';
}

function restart() {
    currentNumber = '';
    document.getElementById('current-number').innerText = `Current number: ${currentNumber}`;
    createDigitButtons();
}

function submit() {
    if (currentNumber.length === 10) {
        alert(`Sumbitted number: ${currentNumber}`);
    } else {
    alert('Please enter a 10-digit phone number.');
}
}



