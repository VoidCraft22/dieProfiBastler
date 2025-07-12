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

// Add ESC key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Füge hier den YouTube Video ID ein
const YOUTUBE_VIDEO_ID = 'VIDEO_ID';

// Aktualisiere den Video-Link, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('.video-iframe');
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/XLvZhABAaG4?si=Iz23e5nUCmzKUNgH`;
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