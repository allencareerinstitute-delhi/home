// Handle Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav');

hamburger.onclick = function() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
};

// Handle Sign-In button click to open the modal
const signInButton = document.getElementById('sign-in-btn');
const modal = document.getElementById('sign-in-modal');
const closeBtn = document.getElementById('close-btn');
const signInForm = document.getElementById('sign-in-form');

// Open the modal when the Sign-In button is clicked
signInButton.onclick = function() {
    modal.style.display = "block";
    nav.style.display ="none";
};

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
    nav.style.display ="flex";
};

// Close the modal if clicked outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        nav.style.display ="flex";
    }
};

// Handle form submission
signInForm.onsubmit = function(e) {
    e.preventDefault();

    const formNumber = document.getElementById('form-number').value;
    const password = document.getElementById('password').value;

    // Simulate successful login (you can add validation here)
    if (formNumber && password) {
        localStorage.setItem('userName', formNumber); // Save form number as the user name
        modal.style.display = "none";
        window.location.href = "dashboard.html"; // Redirect to a new page after sign-in
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const seeResultsButton = document.querySelector('.see-results-btn');

    if (seeResultsButton) {
        seeResultsButton.addEventListener('click', function() {
            window.location.href = 'results.html'; // Redirect to results.html
        });
    }
});
