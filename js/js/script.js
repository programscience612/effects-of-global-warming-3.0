document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const answers = {
                q1: 'b', // 1953
                q2: 'b', // Robert Scrimshaw
                q3: 'b', // Buzzer sounds
                q4: 'b', // Yorkshire, England
                q5: 'b'  // Steady hand
            };
            let score = 0;
            for (let i = 1; i <= 5; i++) {
                const selected = document.querySelector(`input[name="q${i}"]:checked`);
                if (selected && selected.value === answers[`q${i}`]) {
                    score++;
                }
            }
            document.getElementById('quiz-result').innerText = `Your score: ${score}/5`;
        });
    }
});