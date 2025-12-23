document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const totalSteps = 5; // Total pesan dari step-1 hingga step-5
    
    // Ambil elemen pesan awal (tombol)
    const initialMessage = document.getElementById('step-0');

    // Fungsi untuk menampilkan pesan berikutnya
    function showNextMessage() {
        // Sembunyikan pesan saat ini
        const currentMessageElement = document.getElementById(`step-${currentStep}`);
        if (currentMessageElement) {
            currentMessageElement.classList.add('hidden');
        }

        // Pindah ke langkah berikutnya
        currentStep++;

        // Jika masih ada pesan yang harus ditampilkan
        if (currentStep <= totalSteps) {
            const nextMessageElement = document.getElementById(`step-${currentStep}`);
            if (nextMessageElement) {
                // Tampilkan pesan berikutnya
                nextMessageElement.classList.remove('hidden');

                // Atur timer untuk pesan berikutnya (kecuali pesan terakhir)
                if (currentStep < totalSteps) {
                    // Jeda 2.5 detik (sesuaikan kecepatan dengan keinginan Anda)
                    setTimeout(showNextMessage, 2500); 
                }
                // Jika sudah pesan terakhir, biarkan tetap tampil
            }
        }
    }

    // Event listener untuk tombol 'Klik Suratnya!'
    initialMessage.addEventListener('click', () => {
        // Mulai urutan pesan
        showNextMessage(); 
    });
});
