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
    document.getElementById('current-number').innerText = `Current Number: ${formatPhoneNumber(currentNumber)}`;
    } else {
    alert('Maxium number length reached.');
}
}

function moveButton(button) {
    const maxDistance = 65;
    const container = document.getElementById('digit-buttons');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    let newLeft = parseFloat(button.style.left)+ (Math.random() * maxDistance - maxDistance / 2);
    let newTop = parseFloat(button.style.top)+ (Math.random() * maxDistance - maxDistance / 2);

   
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
    button.style.position = 'absolute';
}

function restart() {
    currentNumber = '';
    document.getElementById('current-number').innerText = `Current Number: ${formatPhoneNumber(currentNumber)}`;
    createDigitButtons();
}

function submit() {
    if (currentNumber.length === 10) {
        alert(`Sumbitted number: ${formatPhoneNumber(currentNumber)}`);
    } else {
    alert('Please enter a 10-digit phone number.');
}
}

function formatPhoneNumber(number) {
  if (number.length === 0) {
    return '';
  }
  return number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
