// Admin credentials (in a real application, these should be stored securely)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '123456';

// Admin authentication
function authenticate(username, password) {
    return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

// Admin login form handling
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (authenticate(username, password)) {
            // Store login status in localStorage
            localStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'admin/index.html';
        } else {
            document.getElementById('loginError').textContent = 'Falsche Anmeldeinformationen!';
        }
    });
}

// Admin video update
if (document.getElementById('videoForm')) {
    document.getElementById('videoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const videoId = document.getElementById('videoId').value.trim(); // Entferne Leerzeichen
        
        if (videoId.length !== 11) {
            alert('Bitte gib eine gültige YouTube Video ID ein (11 Zeichen)!');
            return;
        }

        // Store video ID in localStorage
        localStorage.setItem('currentVideoId', videoId);
        
        // Update the video on the main page
        const mainPageIframe = document.querySelector('.video-iframe');
        if (mainPageIframe) {
            mainPageIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }

        // Zeige Bestätigung
        alert('Video wurde erfolgreich aktualisiert!');
    });
}

// Check if admin is logged in
if (window.location.pathname.includes('admin/')) {
    if (!localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html';
    }
}

// Update video on main page load
if (document.querySelector('.video-iframe')) {
    const savedVideoId = localStorage.getItem('currentVideoId');
    if (savedVideoId) {
        document.querySelector('.video-iframe').src = `https://www.youtube.com/embed/${savedVideoId}`;
    }
}

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

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});



// Add event listeners to all fullscreen buttons
document.querySelectorAll('.fullscreen-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const image = galleryItem.querySelector('img');
            if (image) {
                const imgClone = image.cloneNode();
                modalContent.innerHTML = '';
                modalContent.appendChild(imgClone);
                modal.style.display = 'block';
                // Focus on the modal to enable ESC key
                modal.focus();
            }
        }
    });
});