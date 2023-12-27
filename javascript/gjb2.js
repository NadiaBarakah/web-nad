const bola = document.getElementById('bola');
const btnMulai = document.getElementById('btnMulai');
const btnReset = document.getElementById('btnReset');
const inputKecepatan = document.getElementById('inputKecepatan');
const tabelHasilPercobaan = document.getElementById('tabelHasilPercobaan');

let posisiY = 0;
let kecepatan = 0;
let waktu = 0;
let intervalId;

const percepatanGravitasi = 9.8; // percepatan gravitasi bumi dalam m/s^2
const tinggiKotak = 150; // tinggi kotak

const grafikCanvas = document.getElementById('grafikPercobaan');
const ctx = grafikCanvas.getContext('2d');

const grafikData = {
    labels: [], // Waktu
    datasets: [{
        label: 'Posisi Y',
        data: [], // Posisi Y
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
    }]
};

const grafikOptions = {
    scales: {
        x: {
            type: 'linear',
            position: 'bottom'
        },
        y: {
            type: 'linear',
            position: 'left'
        }
    }
};

const grafik = new Chart(ctx, {
    type: 'line',
    data: grafikData,
    options: grafikOptions
});

function updatePosisi() {
    // Rumus gerak jatuh bebas: s = ut + (1/2)gt^2
    posisiY = kecepatan * waktu + 0.5 * percepatanGravitasi * Math.pow(waktu, 2);

    bola.style.transform = `translateY(${posisiY}px)`;

    // Tambahkan data hasil percobaan ke tabel
    tambahkanDataTabelHasilPercobaan(waktu, posisiY);
    updateGrafik();

    // Jika bola mencapai atau melampaui garis bawah kotak, hentikan simulasi
    if (posisiY >= tinggiKotak) {
        clearInterval(intervalId);
        btnMulai.disabled = false;
    }

    waktu += 0.1; // Ubah interval waktu menjadi 0.1 untuk animasi yang lebih halus
}

function tambahkanDataTabelHasilPercobaan(waktu, posisiY) {
    const newRow = tabelHasilPercobaan.insertRow();
    const waktuCell = newRow.insertCell(0);
    const posisiYCell = newRow.insertCell(1);

    waktuCell.textContent = waktu.toFixed(2);
    posisiYCell.textContent = posisiY.toFixed(2);
}

function updateGrafik() {
    grafikData.labels.push(waktu);
    grafikData.datasets[0].data.push(posisiY);
    grafik.update();
}

function mulaiSimulasi() {
    posisiY = 0;
    waktu = 0;
    kecepatan = parseFloat(inputKecepatan.value) || 0;
    btnMulai.disabled = true;
    intervalId = setInterval(updatePosisi, 100);
}

function resetSimulasi() {
    clearInterval(intervalId);
    bola.style.transform = 'translateY(0)';
    while (tabelHasilPercobaan.rows.length > 1) {
        tabelHasilPercobaan.deleteRow(1);
    }

    // Reset grafik
    grafikData.labels = [];
    grafikData.datasets[0].data = [];
    grafik.update();

    btnMulai.disabled = false;
}

btnMulai.addEventListener('click', mulaiSimulasi);

btnReset.addEventListener('click', resetSimulasi);
