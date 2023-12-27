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

const grafikCanvas = document.getElementById('grafikPercobaan');
const ctx = grafikCanvas.getContext('2d');

const kesimpulanElem = document.getElementById('inputKesimpulan');

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

    // Jika bola mencapai bagian bawah kotak, hentikan simulasi
    if (posisiY >= 150) {
        clearInterval(intervalId);
        btnMulai.disabled = false;
    
        // Analisis posisi awal dan akhir
        const kesimpulanAwal = `Posisi awal (setinggi kotak percobaan): ${posisiAwal.toFixed(2)} px`;
        const kesimpulanAkhir = `Posisi akhir (batas bawah kotak percobaan): ${posisiY.toFixed(2)} px`;
    
        // Hitung waktu saat berada di atas hingga jatuh ke bawah kotak percobaan
        const ketinggianJatuh = posisiY - posisiAwal;
        const waktuJatuh = Math.sqrt((2 * ketinggianJatuh) / percepatanGravitasi);
        const kesimpulanWaktu = `Waktu saat berada di atas hingga jatuh ke bawah kotak percobaan: ${waktuJatuh.toFixed(2)} detik`;
    
        kesimpulanElem.value = `${kesimpulanAwal}\n${kesimpulanAkhir}\n${kesimpulanWaktu}`;
      }

    waktu += 1;
}

function tambahkanDataTabelHasilPercobaan(waktu, posisiY) {
    const newRow = tabelHasilPercobaan.insertRow();
    const waktuCell = newRow.insertCell(0);
    const posisiYCell = newRow.insertCell(1);

    waktuCell.textContent = waktu;
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
    intervalId = setInterval(updatePosisi, 1000);
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
