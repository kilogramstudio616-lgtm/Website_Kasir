# ARJUNO OUTDOOR - Static Website

## 📦 Panduan Instalasi GitHub Pages

Website ini adalah aplikasi POS rental outdoor equipment yang dibuat dengan HTML, CSS, dan JavaScript murni - tidak memerlukan npm, build tools, atau framework apapun.

### Cara Deploy ke GitHub Pages:

1. **Upload ke GitHub Repository**
   - Buat repository baru di GitHub
   - Upload semua file ke repository:
     - index.html
     - pesanan.html  
     - produk.html
     - riwayat.html
     - setting.html
     - pengeluaran.html
     - informasi.html
     - pelanggan.html
     - kasir.html
     - style.css
     - script.js
     - GAMBAR/ (folder untuk gambar)

2. **Aktifkan GitHub Pages**
   - Buka Settings di repository
   - Scroll ke bagian "Pages"
   - Pilih branch "main" sebagai source
   - Klik Save

3. **Akses Website**
   - Website akan tersedia di: `https://[username].github.io/[repository-name]/`
   - Tunggu beberapa menit untuk deployment pertama

### Struktur File:

```
arjuno-outdoor/
│
├── index.html          # Dashboard / Homepage
├── pesanan.html        # Halaman Pesanan / Transaksi
├── produk.html         # Halaman Produk (Admin)
├── riwayat.html        # Riwayat Transaksi
├── setting.html        # Pengaturan (Admin)
├── pengeluaran.html    # Pengeluaran
├── informasi.html      # Informasi Toko
├── pelanggan.html      # Database Pelanggan
├── kasir.html          # Manajemen Kasir (Admin)
│
├── style.css           # Semua styling (glassmorphism)
├── script.js           # Semua JavaScript functionality
│
└── GAMBAR/             # Folder gambar
    ├── bg1.jpg         # Background mountain
    └── (icons opsional)
```

### Fitur:

✅ **Glassmorphism UI** - Design modern dengan efek kaca
✅ **Responsive Layout** - Optimized untuk tablet landscape
✅ **Real-time Clock** - Jam dan tanggal otomatis
✅ **Shopping Cart** - Sistem keranjang belanja dinamis
✅ **Auto Carousel** - Promo slider otomatis
✅ **Pure JavaScript** - Tidak ada dependencies
✅ **GitHub Pages Ready** - Langsung bisa diupload

### Cara Menggunakan Lokal:

1. Download semua file
2. Buka `index.html` di browser
3. Tidak perlu server atau instalasi apapun!

### Catatan Penting:

- Untuk background image, gunakan file `GAMBAR/bg1.jpg` atau URL gambar dari Unsplash
- Semua halaman saling terhubung dengan `<a href="">` biasa
- Data disimpan sementara di JavaScript (tidak persistent)
- Cocok untuk demo, prototype, atau penggunaan lokal

### Browser Support:

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

---

Made with ❤️ for ARJUNO OUTDOOR
