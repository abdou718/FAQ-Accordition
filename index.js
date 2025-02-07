document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    const texts = document.querySelectorAll('.text');

    questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            const answer = texts[index]; // Get the corresponding answer
            const icon = question.querySelector('.toggle-icon');

            // Hide all answers except the clicked one
            texts.forEach((text, textIndex) => {
                if (textIndex !== index) {
                    text.style.display = "none"; // Hide other answers
                    const otherIcon = questions[textIndex].querySelector('.toggle-icon');
                    otherIcon.setAttribute('src', otherIcon.getAttribute('data-icon-plus')); // Reset other icons to plus
                    questions[textIndex].setAttribute('aria-expanded', 'false'); // Update aria-expanded for other questions
                }
            });

            // Toggle the clicked answer
            if (answer.style.display === "block") {
                answer.style.display = "none"; // Hide the answer
                icon.setAttribute('src', icon.getAttribute('data-icon-plus')); // Set icon to plus
                question.setAttribute('aria-expanded', 'false'); // Update aria-expanded
            } else {
                answer.style.display = "block"; // Show the answer
                icon.setAttribute('src', icon.getAttribute('data-icon-minus')); // Set icon to minus
                question.setAttribute('aria-expanded', 'true'); // Update aria-expanded
            }
        });
    });
});