// Modal Element Selectors
const modal = document.getElementById('signupModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const openCalcBtn = document.getElementById('openCalcBtn');

// Open modal on click
openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

if (openCalcBtn) {
    openCalcBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
}

// Close modal on click
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside content box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});