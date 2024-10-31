const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginSuccessMessage = document.getElementById('loginSuccess');

const adminButton = document.getElementById('adminButton');
const adminOptions = document.getElementById('adminOptions');
const adminViewButton = document.getElementById('adminViewButton');
const adminView = document.getElementById('adminView');
const adminPasswordInput = document.getElementById('adminPassword');
const unlockAdminButton = document.getElementById('unlockAdminButton');
const submittedDataDiv = document.getElementById('submittedData');

let submissions = [];
const adminPassword = 'bros6969007';

// Toggle Admin Options on Three Dots Button Click
adminButton.addEventListener('click', () => {
    adminOptions.classList.toggle('hidden');
});

// Show Admin View on Click
adminViewButton.addEventListener('click', () => {
    adminView.classList.remove('hidden');
    adminOptions.classList.add('hidden');
});

// Handle Login Form Submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    // Store Login Data
    submissions.push({ email, password });
    emailInput.value = '';
    passwordInput.value = '';

    // Show Success Message
    loginSuccessMessage.classList.remove('hidden');
    setTimeout(() => {
        loginSuccessMessage.classList.add('hidden');
    }, 2000); // Hide after 2 seconds
});

// Unlock Admin View to Show Submissions
unlockAdminButton.addEventListener('click', () => {
    if (adminPasswordInput.value === adminPassword) {
        submittedDataDiv.classList.remove('hidden');
        submittedDataDiv.innerHTML = '<h3>Submitted Data:</h3>';
        
        // Display Submitted Data
        submissions.forEach((submission, index) => {
            submittedDataDiv.innerHTML += `
                <p>${index + 1}. Email: ${submission.email} | Password: ${submission.password}</p>
            `;
        });
    } else {
        alert('Incorrect password!');
    }
});

