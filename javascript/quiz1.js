const questions = [
    {
        question: "Apa yang membedakan gerak jatuh bebas dengan gerak vertikal ke atas?",
        answers: [
            { text: "Arah gerak", correct: true },
            { text: "Kecepatan", correct: false },
            { text: "Waktu tempuh", correct: false },
            { text: "Massa benda", correct: false }
        ]
    },
    
    // ... (sama seperti di atas untuk 9 pertanyaan lainnya)
    {
        question: "Dalam gerak jatuh bebas, gaya hambat udara dapat diabaikan jika:",
        answers: [
            { text: "Kecepatan benda rendah", correct: true },
            { text: "Bentuk benda aerodinamis", correct: false },
            { text: "Massa benda kecil", correct: false },
            { text: "Percepatan gravitasi besar", correct: false }
        ]
    },

    {
        question: "Apa yang dimaksud dengan gerak jatuh bebas?",
        answers: [
            { text: "Gerak benda yang dipengaruhi oleh gaya gravitasi dan gaya lainnya.", correct: false },
            { text: "Gerak benda yang dipengaruhi oleh hambatan udara tanpa adanya gaya gravitasi.", correct: false },
            { text: "Gerak benda yang terjadi karena gaya gesekan di permukaan tanah.", correct: false },
            { text: "Gerak benda yang tidak dipengaruhi oleh gaya gravitasi atau hambatan udara.", correct: true }
        ]
    },
    {
        question: "Apa yang selalu konstan pada benda yang mengalami gerak jatuh bebas?",
        answers: [
            { text: "Kecepatan.", correct: false },
            { text: "Waktu tempuh.", correct: false },
            { text: "Percepatan gravitasi.", correct: true },
            { text: "Ketinggian.", correct: false }
        ]
    },
    {
        question: "Bagaimana rumus kecepatan pada waktu tertentu (vt) pada gerak jatuh bebas?",
        answers: [
            { text: "vt = v(awal) + at", correct: false },
            { text: "vt = gt", correct: false },
            { text: "vt = 0 + gt", correct: true },
            { text: "vt = 1/2 * gt^2", correct: false }
        ]
    },
    {
        question: "Apa yang mempengaruhi ketinggian benda pada gerak jatuh bebas?",
        answers: [
            { text: "Waktu dan percepatan gravitasi.", correct: true },
            { text: "Percepatan gravitasi saja.", correct: false },
            { text: "Kecepatan awal benda.", correct: false },
            { text: "Hambatan udara.", correct: false }
        ]
    },
    {
        question: "Mengapa gerak jatuh bebas hanya dipengaruhi oleh gaya gravitasi?",
        answers: [
            { text: "Karena tidak ada gaya gesekan di permukaan tanah.", correct: false },
            { text: "Karena kecepatan awal benda nol.", correct: false },
            { text: "Karena tidak ada hambatan udara atau gaya lainnya.", correct: true },
            { text: "Karena percepatan gravitasi selalu nol.", correct: false }
        ]
    },
    {
        question: "Apa definisi laboratorium virtual dalam konteks pembelajaran fisika?",
        answers: [
            { text: "Laboratorium yang hanya ada secara virtual.", correct: false },
            { text: "Lingkungan interaktif untuk melakukan eksperimen fisika secara mandiri.", correct: true },
            { text: "Tempat fisik untuk melakukan eksperimen tanpa alat fisik.", correct: false },
            { text: "Laboratorium yang hanya bisa diakses melalui buku digital.", correct: false }
        ]
    },
    {
        question: "Kelebihan laboratorium virtual dibandingkan dengan laboratorium fisik adalah...",
        answers: [
            { text: "Tidak memerlukan penjadwalan.", correct: false },
            { text: "Tidak memerlukan biaya riset.", correct: false },
            { text: "Dapat mengamati aspek molekuler.", correct: false },
            { text: "Mengurangi kendala waktu.", correct: true }
        ]
    },
    {
        question: "Manfaat teknologi dan algoritma dalam simulasi gerak jatuh bebas adalah...",
        answers: [
            { text: "Mengurangi prestasi belajar siswa.", correct: false },
            { text: "Meningkatkan pemahaman siswa melalui visualisasi dan eksperimen virtual.", correct: true },
            { text: "Menyulitkan siswa dalam menggunakan simulasi.", correct: false },
            { text: "Tidak memberikan manfaat tambahan.", correct: false }
        ]
    },
    // ... (sama seperti di atas untuk 1 pertanyaan lainnya)
    {
        question: "Dalam gerak jatuh bebas, gaya hambat udara dapat diabaikan jika:",
        answers: [
            { text: "Kecepatan benda rendah", correct: true },
            { text: "Bentuk benda aerodinamis", correct: false },
            { text: "Massa benda kecil", correct: false },
            { text: "Percepatan gravitasi besar", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

function startGame() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

// Menambahkan variabel skor
let score = 0;

// ... (kode lainnya)

function selectAnswer(answer) {
    const correct = answer.correct;
    questions[currentQuestionIndex].userAnswerCorrect = correct;

    if (correct) {
        alert("Jawaban Anda benar!");
        score += 10; // Menambahkan 10 poin untuk setiap jawaban benar
    } else {
        alert("Jawaban Anda salah.");
        // Di sini Anda dapat menambahkan logika untuk menangani jawaban salah (misalnya, mengurangi poin)
    }

    // Menampilkan poin di antarmuka pengguna
    updateScoreUI();

    nextButton.style.display = "block";
}

function updateScoreUI() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.innerText = "Skor: " + score;

        // Menambahkan properti CSS untuk memperbesar ukuran teks
        scoreElement.style.fontSize = "70px"; // Ganti dengan ukuran yang sesuai
    }
}


// Fungsi untuk memperbarui tampilan skor di antarmuka pengguna
function updateScoreUI() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.innerText = "Skor: " + score;
    }
}

// ... (kode lainnya)


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = "none";
    } else {
        // Handle end of the quiz (e.g., show score)
        alert("Quiz selesai!");
    }
}

startGame();
;

