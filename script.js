/* ===================================
   ARJUNO OUTDOOR - JavaScript
   Pure vanilla JavaScript - No frameworks
   =================================== */

// Global cart array
let cart = [];

/* ===================================
   CLOCK FUNCTIONALITY
   =================================== */
function updateClock() {
    const now = new Date();
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);
    
    // Update DOM
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    
    if (timeElement) timeElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

/* ===================================
   CAROUSEL FUNCTIONALITY
   =================================== */
let currentSlide = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselDots = document.querySelectorAll('.carousel-dots .dot');

function showSlide(index) {
    if (carouselSlides.length === 0) return;
    
    // Remove active class from all
    carouselSlides.forEach(slide => slide.classList.remove('active'));
    carouselDots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    if (carouselSlides[index]) carouselSlides[index].classList.add('active');
    if (carouselDots[index]) carouselDots[index].classList.add('active');
}

function nextSlide() {
    if (carouselSlides.length === 0) return;
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
}

// Auto-advance carousel every 4 seconds
if (carouselSlides.length > 0) {
    setInterval(nextSlide, 4000);
    
    // Add click handlers to dots
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

/* ===================================
   CART FUNCTIONALITY (Pesanan Page)
   =================================== */

// Add product to cart
function addToCart(name, price, emoji) {
    // Check if product already in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: Date.now(),
            name: name,
            price: price,
            emoji: emoji,
            quantity: 1,
            duration: 1
        });
    }
    
    updateCartDisplay();
    showNotification(`${name} ditambahkan ke keranjang`);
}

// Update cart quantity
function updateQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = Math.max(0, item.quantity + delta);
        if (item.quantity === 0) {
            removeFromCart(id);
        } else {
            updateCartDisplay();
        }
    }
}

// Update cart duration
function updateDuration(id, duration) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.duration = Math.max(1, parseInt(duration) || 1);
        updateCartDisplay();
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartDisplay();
    showNotification('Item dihapus dari keranjang');
}

// Update cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart">Keranjang masih kosong</div>';
        updateTotal();
        return;
    }
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <div class="cart-item-name">${item.emoji} ${item.name}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Hapus</button>
            </div>
            
            <div class="cart-controls">
                <div class="cart-control-group">
                    <label>Jumlah</label>
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                
                <div class="cart-control-group">
                    <label>Durasi (hari)</label>
                    <input type="number" 
                           class="duration-input" 
                           value="${item.duration}" 
                           min="1"
                           onchange="updateDuration(${item.id}, this.value)">
                </div>
            </div>
            
            <div class="cart-item-total">
                Rp ${(item.price * item.quantity * item.duration).toLocaleString('id-ID')}
            </div>
        </div>
    `).join('');
    
    updateTotal();
}

// Calculate and update total
function updateTotal() {
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity * item.duration);
    }, 0);
    
    const totalElement = document.getElementById('total-price');
    if (totalElement) {
        totalElement.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    }
}

// Print receipt
function printReceipt() {
    const customerName = document.getElementById('customer-name')?.value;
    const customerPhone = document.getElementById('customer-phone')?.value;
    
    if (!customerName || !customerPhone) {
        showNotification('Mohon lengkapi nama dan nomor telepon pelanggan', 'error');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Keranjang masih kosong', 'error');
        return;
    }
    
    // Simulate receipt printing
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity * item.duration), 0);
    
    alert(`STRUK RENTAL\n\nARJUNO OUTDOOR\n\nPelanggan: ${customerName}\nTelepon: ${customerPhone}\n\nProduk:\n${cart.map(item => `${item.name} x${item.quantity} (${item.duration} hari) = Rp ${(item.price * item.quantity * item.duration).toLocaleString('id-ID')}`).join('\n')}\n\nTotal: Rp ${total.toLocaleString('id-ID')}\n\nTerima kasih!`);
    
    // Clear cart after printing
    cart = [];
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    updateCartDisplay();
    showNotification('Transaksi berhasil!');
}

/* ===================================
   MODAL FUNCTIONALITY
   =================================== */
function openManualAddModal() {
    showNotification('Fitur Manual Add - Masukkan produk custom', 'info');
}

/* ===================================
   NOTIFICATION SYSTEM
   =================================== */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(16, 185, 129, 0.9)'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-size: 16px;
        backdrop-filter: blur(8px);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ===================================
   INITIALIZE ON PAGE LOAD
   =================================== */
document.addEventListener('DOMContentLoaded', function() {
    console.log('ARJUNO OUTDOOR System initialized');
    updateClock();
    
    // Initialize cart display if on Pesanan page
    if (document.getElementById('cart-items')) {
        updateCartDisplay();
    }
});

/* ===================================
   SEARCH FUNCTIONALITY
   =================================== */
function searchTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();
    const table = document.getElementById(tableId);
    const tr = table.getElementsByTagName('tr');
    
    for (let i = 1; i < tr.length; i++) {
        let txtValue = tr[i].textContent || tr[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

console.log('ARJUNO OUTDOOR - Script loaded successfully');
