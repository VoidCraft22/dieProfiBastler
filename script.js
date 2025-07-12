// Fullscreen modal functionality
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modal.appendChild(modalContent);

const closeButton = document.createElement('button');
closeButton.className = 'close-modal';
closeButton.textContent = '×';
modalContent.appendChild(closeButton);

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener for close button
closeButton.addEventListener('click', closeModal);

// Event listener for clicking outside the modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Add ESC key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Add event listeners to all fullscreen buttons
document.querySelectorAll('.fullscreen-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const image = e.target.closest('.gallery-item').querySelector('img');
        const imgClone = image.cloneNode();
        modalContent.innerHTML = '';
        modalContent.appendChild(imgClone);
        modal.style.display = 'block';
        // Focus on the modal to enable ESC key
        modal.focus();
    });
});