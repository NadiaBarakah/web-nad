document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const gameArea = document.getElementById('gameArea');
    const answerInput = document.getElementById('answerInput');
    const checkButton = document.getElementById('checkButton');
    const resultMessage = document.getElementById('resultMessage');
  
    startButton.addEventListener('click', function () {
      startButton.style.display = 'none';
      gameArea.style.display = 'block';
    });
  
    checkButton.addEventListener('click', function () {
      const answer = parseFloat(answerInput.value);
      const expectedAnswer = 0.5 * 10; // Hasil perhitungan sesuai dengan Hukum Ohm
  
      if (answer === expectedAnswer) {
        resultMessage.textContent = 'Jawaban Anda benar!';
      } else {
        resultMessage.textContent = 'Jawaban Anda salah. Coba lagi.';
      }
    });
  });
  