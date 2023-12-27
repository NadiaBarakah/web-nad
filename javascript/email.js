function kirimEmail() {
    const emails = document.getElementById('emails').value.split(',').map(email => email.trim());
    const message = document.getElementById('message').value;
  
    // Kirim data ke server (backend)
    fetch('/path-to-your-server-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emails, message }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Berhasil mengirim email:', data);
        // Tambahkan logika atau pesan ke pengguna jika diperlukan
      })
      .catch(error => {
        console.error('Gagal mengirim email:', error);
        // Tambahkan logika atau pesan ke pengguna jika diperlukan
      });
  }

  async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        document.getElementById('result').innerText = data.message;
    } catch (error) {
        console.error('Error:', error);
    }
}