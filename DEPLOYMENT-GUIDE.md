# 🏔️ ARJUNO OUTDOOR - Deployment Guide

## 📁 Files Created

✅ **HTML Pages (9 files):**
- `index.html` - Dashboard homepage with stats, carousel, recent customers
- `pesanan.html` - Order/transaction page with shopping cart
- `produk.html` - Product management (Admin)
- `riwayat.html` - Transaction history with searchable table
- `setting.html` - Settings page (Admin)
- `pengeluaran.html` - Expenses page
- `informasi.html` - Store information and SOP
- `pelanggan.html` - Customer database
- `kasir.html` - Cashier management (Admin)

✅ **Styling & Scripts:**
- `style.css` - Complete glassmorphism CSS (17KB)
- `script.js` - All JavaScript functionality (9.8KB)

✅ **Documentation:**
- `README.md` - Full documentation
- `DEPLOYMENT-GUIDE.md` - This file

✅ **Assets Folder:**
- `GAMBAR/` - Folder for images (add bg1.jpg here)

## 🚀 Quick Start - GitHub Pages

### Method 1: GitHub Web Interface

1. **Create New Repository**
   - Go to https://github.com/new
   - Name: `arjuno-outdoor` (or any name)
   - Public repository
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag all files from `arjuno-static/` folder
   - Commit changes

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / root
   - Save

4. **Access Your Site**
   - URL: `https://[your-username].github.io/arjuno-outdoor/`
   - Wait 2-3 minutes for first deployment

### Method 2: Git Command Line

```bash
# Navigate to the folder
cd arjuno-static

# Initialize git
git init
git add .
git commit -m "Initial commit - ARJUNO OUTDOOR POS"

# Connect to GitHub (replace with your repo URL)
git remote add origin https://github.com/[username]/arjuno-outdoor.git
git branch -M main
git push -u origin main

# Enable Pages in GitHub Settings
```

## 💻 Test Locally

Simply open `index.html` in your browser - no server needed!

```bash
# On Mac/Linux
open index.html

# On Windows
start index.html

# Or just drag index.html into your browser
```

## 🎨 Customization

### Change Background Image

1. **Option A:** Add your image to `GAMBAR/bg1.jpg`
2. **Option B:** Edit `style.css` line 27:
```css
background: url('GAMBAR/bg1.jpg') center/cover;
```

### Modify Colors

Edit `style.css` - Look for gradient colors:
- Emerald/Teal: `#10b981`, `#14b8a6`
- Blue: `#3b82f6`, `#06b6d4`
- Purple/Pink: `#8b5cf6`, `#ec4899`

### Add More Products

Edit `pesanan.html` - Add more product cards in the product grid section.

## ✨ Features

✅ **Glassmorphism UI** - Modern blur glass effect
✅ **Real-time Clock** - Auto-updating time and date
✅ **Shopping Cart** - Dynamic cart with quantity/duration controls
✅ **Auto Carousel** - Rotating promotional banners
✅ **Search Function** - Filter transaction history
✅ **Admin Indicators** - Shield icons for admin-only pages
✅ **Responsive Layout** - Optimized for tablet landscape
✅ **No Dependencies** - Pure HTML/CSS/JS

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Glassmorphism, animations, grid/flexbox
- **Vanilla JavaScript** - No frameworks required
- **SVG Icons** - Inline scalable graphics

## 📱 Browser Compatibility

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Opera 76+

## 🔧 Troubleshooting

**Background image not showing?**
- Make sure `GAMBAR/bg1.jpg` exists
- Or use Unsplash URL in CSS

**Styles not loading?**
- Check all files are in same folder
- Verify `style.css` and `script.js` are uploaded

**GitHub Pages not working?**
- Wait 5 minutes after enabling
- Check Settings → Pages shows green success
- Ensure repository is Public

## 📞 Support

For questions or issues:
- Check `README.md` for detailed docs
- View files in browser console for errors (F12)

---

**Made with ❤️ for ARJUNO OUTDOOR**
**Pure Static Website - No Build Required**
