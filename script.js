document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Variabel Global
    const tabs = document.querySelectorAll('.tab-navigation .tab');
    const contentBody = document.querySelector('.content-body');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarItems = document.querySelectorAll('.sidebar .sidebar-item');
    
    // Variabel Slider
    let slideIndex = 0;
    let slideInterval; 

    // --- FUNGSI SLIDER ---
    function showSlides() {
        const slideWrapper = document.querySelector('.slide-wrapper');
        const slides = document.querySelectorAll('.slide-image');

        if (!slideWrapper || slides.length === 0) return;

        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0; // Kembali ke slide pertama
        }

        // Geser wrapper secara horizontal
        const offset = -slideIndex * 100;
        slideWrapper.style.transform = `translateX(${offset}%)`;
    }

    // Fungsi untuk memulai dan menghentikan interval slider
    function startSlider() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(showSlides, 3000); // Ganti slide setiap 3 detik
    }


    // --- FUNGSI UTAMA ---

    // Fungsi untuk mengubah konten berdasarkan tab yang aktif
    function activateTab(tabName) {
        let newContentText = '';
        
        // **DATA KECAMATAN PEKUNCEN** (Perbaikan sintaksis di baris ini)
        const kecamatanInfoHtml = `
            <div class="kecamatan-container">
                
                <div class="info-umum-section">
                    <div class="info-umum-text">
                        <h2>Informasi Umum Kecamatan Pekuncen, Banyumas</h2>
                        <p>Pekuncen adalah kecamatan di Kabupaten Banyumas, Jawa Tengah, dengan jumlah penduduk 79.196 jiwa pada 2023, terdiri dari 40.132 laki-laki dan 39.064 perempuan. Daerah subur ini memiliki curah hujan tinggi yang mendukung pertanian padi, palawija, kol, cabai, ketimun, dan buncis, serta menjadi pusat industri rumahan dan produksi susu sapi murni di Desa Tumiyang, meskipun pasokan air menurun saat kemarau akibat penebangan kayu ilegal di hutan utara. Secara ekonomi dan budaya, terdapat Pasar Legok di Desa Pekuncen yang kaya kuliner serta Masjid Saka Tunggal Darussalam sebagai cagar budaya di Desa Pekuncen Kota. Pariwisata unggulannya meliputi Wisata Watu Kumpul, Curug Nangga (Desa Petahunan), Curug Pengantin, Curug Suradinangga, Curug Kali Kawung (Desa Krajan), Wisata Alam Bunton (Desa Pekuncen Kota), dan Curug Menyawak (Desa Cibangkong). Kecamatan ini berbatasan dengan Kabupaten Brebes (utara), Kecamatan Cilongok (timur), Kecamatan Ajibarang (selatan), serta Kecamatan Gumelar (barat), dan terdiri dari 16 desa seperti Banjaranyar, Candinegara, hingga Tumiyang.</p>
                    </div>
                  
                </div>

                <hr>

                <div class="administrasi-section">
                    <h2>Administrasi Kecamatan</h2>
                    <div class="admin-cards-grid">
                        
                        <div class="admin-card">
                            <p class="card-label">LUAS</p>
                            <p class="card-value">92,70 km²</p>
                        </div>
                        <div class="admin-card">
                            <p class="card-label">POPULASI (2023)</p>
                            <p class="card-value">79.196 jiwa</p>
                        </div>
                        <div class="admin-card">
                            <p class="card-label">KEPADATAN</p>
                            <p class="card-value">815 jiwa/km²</p>
                        </div>
                        <div class="admin-card">
                            <p class="card-label">DESA</p>
                            <p class="card-value">16 kelurahan</p>
                        </div>
                        <div class="admin-card">
                            <p class="card-label">CAMAT</p>
                            <p class="card-value">Sujarwoto, S.H., M.H.</p>
                        </div>
                        <div class="admin-card">
                            <p class="card-label">KODE BPS</p>
                            <p class="card-value">3302160</p>
                        </div>

                    </div>
                </div>
            </div>
        `;

        switch (tabName) {
            case 'Beranda':
                // Konten Beranda: SLIDER KIRI (100% lebar) + INFO KECAMATAN (Bawah)
                newContentText = `
                    <div class="main-slide-wrapper">
                        
                        <div class="content-left">
                            
                            <div class="welcome-card">
                                <div class="logo-section">   
                                </div>
                                <h2 class="title-text">SELAMAT DATANG DI PORTAL PETA KECAMATAN PEKUNCEN</h2>
                                <h3 class="subtitle-text">Portal Informasi Desa, Peta Kecamatan, Dan Desa-Desa Di Kecamatan Pekuncen</h3>
                            </div>

                            <div class="slideshow-container">
                                <div class="slide-wrapper">
                                    <img src="PEMANDANGAN DESA KRAJAN.JPG" alt="Slide 1" class="slide-image">
                                    <img src="PEMANDANGAN DESA.jpg" alt="Slide 2" class="slide-image">
                                    <img src="CURUG.jpg" alt="Slide 3" class="slide-image">
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    
                    ${kecamatanInfoHtml}
                `;
                break;
                
            case 'Peta Kecamatan':
                newContentText = `
                    <div class="map-container-full">
                <iframe 
                    src="qgis2web_2025_12_15-23_22_20_502121/index.html" 
                    width="100%" 
                    height="600" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
                `;
                break;
                
            case 'Tentang':
                newContentText = `
                    <div class="kecamatan-container">
                        <h2>ℹ️ Tentang Kecamatan Pekuncen</h2>
                        <p>Pekuncen merupakan kecamatan di Kabupaten Banyumas, Jawa Tengah, yang berlokasi strategis di Jl. Raya Ajibarang - Tegal Km. 04 Banjaranyar No. 9, dengan kontak resmi telepon/fax (0281) 6439329, melayani masyarakat melalui situs pekuncenkec.banyumaskab.go.id. Wilayah ini mencakup 16 desa potensial seperti Cikembulan, Candinegara, Karangklesem, Pasiraman Kidul, Tumiyang, Glempang, Banjaranyar, Pasiraman Lor, Cibangkong, Cikawung, Petahunan, Semedo, Karangkemiri, Kranggan, Krajan, dan Pekuncen, yang masing-masing memiliki daya tarik wisata alam serta kontribusi ekonomi lokal.</p>
                        <p><strong>Visi:</strong> Mewujudkan Kecamatan Pekuncen yang Mandiri, Maju, Sejahtera, dan Berbudaya Berbasis Potensi Lokal.</p>
                        <p><strong>Misi:</strong> Misi Kecamatan Pekuncen dirancang untuk mendukung visi tersebut, selaras dengan misi utama Pemerintah Kabupaten Banyumas, meliputi:​
                                                  Mewujudkan Banyumas sebagai barometer pembangunan daerah di Jawa Tengah melalui peningkatan pelayanan publik yang prima dan efisien.​
                                                  Meningkatkan kualitas sumber daya manusia melalui pendidikan, pelatihan, dan pemberdayaan masyarakat di 16 desa seperti Cikembulan hingga Pekuncen.​
                                                  Mengembangkan potensi ekonomi lokal berbasis pertanian subur, industri rumahan, peternakan susu sapi di Tumiyang, serta pariwisata alam seperti Curug Nangga dan Watu Kumpul.​
                                                  Melestarikan lingkungan hidup dengan mengatasi penebangan liar di hutan utara dan memastikan pasokan air berkelanjutan saat kemarau.​
                                                  Memperkuat keamanan, ketertiban, dan kegiatan kenegaraan seperti pemantauan rokok ilegal serta seleksi pasukan pengibar bendera HUT RI ke-80.</p>
                        <p><strong>Motto :</strong> "Pekuncen Maju Bersama Masyarakat."</p>
                        <p><strong>Potensi :</strong> Kecamatan ini memiliki populasi 79.196 jiwa (2023), dengan potensi pertanian subur (padi, palawija, sayur-mayur), industri rumahan, serta destinasi wisata seperti Wisata Watu Kumpul, Curug Nangga, dan lainnya, di tengah tantangan pasokan air kemarau. Aktivitas pemerintahan mencakup seleksi pasukan pengibar bendera dan pengawasan keamanan, menjadikannya kawasan dinamis berbatasan Brebes, Cilongok, Ajibarang, dan Gumelar."</p>
                    </div>
                `;
                break;
            default:
                newContentText = '<div style="flex: 1; padding: 20px;">Konten tidak ditemukan.</div>';
        }

        // Memperbarui seluruh area konten
        contentBody.innerHTML = newContentText;
        
        // Panggil startSlider hanya jika konten Beranda dimuat
        if (tabName === 'Beranda') {
            slideIndex = 0; // Reset index saat memuat beranda
            startSlider(); 
        } else {
            // Hentikan slider jika pindah tab
             if (slideInterval) clearInterval(slideInterval);
        }
    }


    // --- 2. LOGIKA TOGGLE SIDEBAR ---
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('mini');
    });


    // --- 3. LOGIKA SIDEBAR ACTIVE STATE & SINKRONISASI ---
    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            sidebarItems.forEach(i => i.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Sinkronisasi klik sidebar dengan Tab Konten (hanya 3 item pertama)
            if (index < 3) { 
                const correspondingTab = tabs[index];
                if (correspondingTab) {
                    tabs.forEach(t => t.classList.remove('active'));
                    correspondingTab.classList.add('active');
                    activateTab(correspondingTab.textContent.trim());
                }
            }
        });
    });


    // --- 4. LOGIKA TAB SWITCHING & SINKRONISASI ---
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); 

            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            // Sinkronisasi klik tab dengan Sidebar Active State
            if (index < 3) {
                 sidebarItems.forEach(i => i.classList.remove('active'));
                 sidebarItems[index].classList.add('active');
            }

            // Panggil fungsi untuk mengubah konten
            activateTab(e.target.textContent.trim());
        });
    });

    // Panggil inisialisasi awal saat DOM siap
    activateTab('Beranda'); 
});