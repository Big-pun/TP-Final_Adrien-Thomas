document.querySelectorAll('[id^="question"]').forEach(function(button, index) {
    button.addEventListener('click', function() {
        let answer = document.getElementById('answer' + (index + 1));
        let arrow = document.getElementById('arrow' + (index + 1));

        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            answer.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        }
    });
});