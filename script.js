document.addEventListener('DOMContentLoaded', function () {
    var generateBtn = document.getElementById('generateBtn');
    var resultElement = document.getElementById('result');

    generateBtn.addEventListener('click', function () {
        var randomNumber = Math.floor(Math.random() * (1000 - (-50) + 1)) + (-50);
        var randomColor = getRandomColor();

        resultElement.textContent = 'Random Number: ' + randomNumber;
        resultElement.style.color = randomColor;
        generateBtn.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
