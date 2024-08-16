// modal.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to load the modal content
    function loadModal() {
        fetch('modal.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('beforeend', data);
                addModalEventListeners();
                console.log('Modal loaded');
            })
            .catch(error => console.error('Error loading modal:', error));
    }

    // Function to add event listeners to modal buttons
    function addModalEventListeners() {
        const openModalButtons = document.querySelectorAll('.choose-subscription');
        const closeModalButton = document.getElementById('close-modal');
        const modal = document.getElementById('subscription-modal');

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.remove('hidden');
            });
        });

        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
    }

    // Load the modal when the page loads
    loadModal();
});