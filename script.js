document.addEventListener('DOMContentLoaded', function () {
    var generateBtn = document.getElementById('generateBtn');
    var resultElement = document.getElementById('result');
    generateBtn.addEventListener('click', function () {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        resultElement.textContent = 'Random Number: ' + randomNumber;
    });
});
