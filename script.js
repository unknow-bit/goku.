const passwordInput = document.getElementById('password');
const viewDataDiv = document.getElementById('viewData');
const lockInput = document.getElementById('lockInput');
const unlockButton = document.getElementById('unlockButton');
const submittedDataDiv = document.getElementById('submittedData');
const loginForm = document.getElementById('loginForm');

let clickCount = 0;

passwordInput.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        viewDataDiv.classList.remove('hidden');
    }
});

unlockButton.addEventListener('click', () => {
    if (lockInput.value === 'bros6969007') {
        submittedDataDiv.classList.remove('hidden');
        submittedDataDiv.innerHTML = `
            <p>Email: ${document.getElementById('email').value}</p>
            <p>Password: ${document.getElementById('password').value}</p>
        `;
    } else {
        alert('Incorrect password!');
    }
});
