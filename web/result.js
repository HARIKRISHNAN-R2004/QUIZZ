document.addEventListener('DOMContentLoaded', function() {
    loadResults();
});

function loadResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const score = urlParams.get('score');

    const resultBox = document.getElementById('resultBox');

    resultBox.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Score:</strong> ${score}</p>
    `;
    document.getElementById('backToQuizButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Adjust the URL if needed
    });
}

