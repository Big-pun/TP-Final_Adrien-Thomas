document.querySelectorAll('.choose-subscription').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('subscription-modal').classList.remove('hidden');
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('subscription-modal').classList.add('hidden');
});
