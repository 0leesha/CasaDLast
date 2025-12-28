// Sample data
const pendingOrders = [
    {
        id: 12345,
        customer: 'Yug Patel',
        address: 'P-203, Shukan Platinum, Gota, Ahmedabad',
        pincode: '382481',
        phone: '+91 9365852364',
        value: 3605,
        items: [
            { name: 'Electric Desk Lamp', quantity: 2, price: 1600 },
            { name: 'Wooden Coffee Table', quantity: 1, price: 2005 }
        ],
        orderDate: '2-March-2025',
        paymentMode: 'Cash on Delivery'
    },
    {
        id: 12346,
        customer: 'Priya Shah',
        address: 'A-45, Vijay Residency, Vastral, Ahmedabad',
        pincode: '382418',
        phone: '+91 9876543210',
        value: 5200,
        items: [
            { name: 'L-Shaped Sofa', quantity: 1, price: 5200 }
        ],
        orderDate: '3-March-2025',
        paymentMode: 'Online'
    },
    {
        id: 12347,
        customer: 'Amit Desai',
        address: 'B-12, Krishna Enclave, Nikol, Ahmedabad',
        pincode: '382350',
        phone: '+91 9825647891',
        value: 2850,
        items: [
            { name: 'Wall Art Set', quantity: 3, price: 2100 },
            { name: 'Table Lamp', quantity: 1, price: 750 }
        ],
        orderDate: '3-March-2025',
        paymentMode: 'Cash on Delivery'
    },
    {
        id: 12348,
        customer: 'Neha Patel',
        address: 'C-78, Shyamal Row House, Satellite, Ahmedabad',
        pincode: '380015',
        phone: '+91 9638527410',
        value: 8900,
        items: [
            { name: 'King Size Bed', quantity: 1, price: 8900 }
        ],
        orderDate: '3-March-2025',
        paymentMode: 'Online'
    },
    {
        id: 12349,
        customer: 'Rajesh Kumar',
        address: 'D-56, Royal Complex, Maninagar, Ahmedabad',
        pincode: '380008',
        phone: '+91 9913456789',
        value: 4320,
        items: [
            { name: 'Dining Table Set', quantity: 1, price: 4320 }
        ],
        orderDate: '4-March-2025',
        paymentMode: 'Cash on Delivery'
    }
];

const activeDeliveries = [
    {
        id: 12340,
        customer: 'Rahul Mehta',
        address: 'SG Highway, Ahmedabad',
        pincode: '380015',
        phone: '+91 9123456789',
        value: 8900,
        items: [
            { name: 'Modern Sofa Set', quantity: 1, price: 8900 }
        ],
        orderDate: '1-March-2025',
        paymentMode: 'Online',
        pickedUpTime: '10:30 AM'
    },
    {
        id: 12341,
        customer: 'Sneha Joshi',
        address: 'Chandkheda, Ahmedabad',
        pincode: '382424',
        phone: '+91 9824567890',
        value: 6720,
        items: [
            { name: 'Bedroom Wardrobe', quantity: 1, price: 6720 }
        ],
        orderDate: '2-March-2025',
        paymentMode: 'Cash on Delivery',
        pickedUpTime: '11:15 AM'
    },
    {
        id: 12342,
        customer: 'Karan Singh',
        address: 'Bodakdev, Ahmedabad',
        pincode: '380054',
        phone: '+91 9726543210',
        value: 3800,
        items: [
            { name: 'Office Chair', quantity: 2, price: 3800 }
        ],
        orderDate: '2-March-2025',
        paymentMode: 'Online',
        pickedUpTime: '12:00 PM'
    }
];

const completedOrders = [
    {
        id: 12330,
        customer: 'Divya Patel',
        address: 'Bopal, Ahmedabad',
        value: 4500,
        deliveredTime: '9:30 AM',
        paymentMode: 'Online',
        rating: 5
    },
    {
        id: 12331,
        customer: 'Vishal Shah',
        address: 'Thaltej, Ahmedabad',
        value: 3200,
        deliveredTime: '10:15 AM',
        paymentMode: 'Cash on Delivery',
        rating: 4
    },
    {
        id: 12332,
        customer: 'Ritu Mehta',
        address: 'Vastrapur, Ahmedabad',
        value: 5600,
        deliveredTime: '11:45 AM',
        paymentMode: 'Online',
        rating: 5
    },
    {
        id: 12333,
        customer: 'Harsh Desai',
        address: 'Paldi, Ahmedabad',
        value: 2900,
        deliveredTime: '1:20 PM',
        paymentMode: 'Cash on Delivery',
        rating: 4
    },
    {
        id: 12334,
        customer: 'Meera Singh',
        address: 'Navrangpura, Ahmedabad',
        value: 7800,
        deliveredTime: '2:30 PM',
        paymentMode: 'Online',
        rating: 5
    }
];

// Show section function
function showSection(section) {
    // Hide all sections
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('pending-orders-section').style.display = 'none';
    document.getElementById('active-deliveries-section').style.display = 'none';
    document.getElementById('completed-section').style.display = 'none';
    document.getElementById('earnings-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'none';

    // Update active menu
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.closest('a').classList.add('active');

    // Show selected section and render content
    if (section === 'dashboard') {
        document.getElementById('dashboard-section').style.display = 'block';
        renderDashboard();
    } else if (section === 'pending-orders') {
        document.getElementById('pending-orders-section').style.display = 'block';
        renderPendingOrders();
    } else if (section === 'active-deliveries') {
        document.getElementById('active-deliveries-section').style.display = 'block';
        renderActiveDeliveries();
    } else if (section === 'completed') {
        document.getElementById('completed-section').style.display = 'block';
        renderCompletedOrders();
    } else if (section === 'earnings') {
        document.getElementById('earnings-section').style.display = 'block';
    } else if (section === 'profile') {
        document.getElementById('profile-section').style.display = 'block';
    }
}

// Render dashboard
function renderDashboard() {
    // Update stats
    document.getElementById('dashboard-pending').textContent = pendingOrders.length;
    document.getElementById('dashboard-active').textContent = activeDeliveries.length;

    // Render quick view of pending orders (first 2)
    const pendingContainer = document.getElementById('dashboard-pending-container');
    pendingContainer.innerHTML = '';
    pendingOrders.slice(0, 2).forEach(order => {
        pendingContainer.appendChild(createOrderCard(order, 'pending'));
    });

    // Render quick view of active deliveries (first 2)
    const activeContainer = document.getElementById('dashboard-active-container');
    activeContainer.innerHTML = '';
    activeDeliveries.slice(0, 2).forEach(order => {
        activeContainer.appendChild(createOrderCard(order, 'active'));
    });
}

// Render pending orders
function renderPendingOrders() {
    const container = document.getElementById('pending-orders-container');
    container.innerHTML = '';

    document.getElementById('total-pending-count').textContent = pendingOrders.length;
    const totalValue = pendingOrders.reduce((sum, order) => sum + order.value, 0);
    document.getElementById('total-pending-value').textContent = `₹${totalValue.toLocaleString()}`;

    if (pendingOrders.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No pending orders</p></div>';
        return;
    }

    pendingOrders.forEach(order => {
        container.appendChild(createOrderCard(order, 'pending'));
    });
}

// Render active deliveries
function renderActiveDeliveries() {
    const container = document.getElementById('active-deliveries-container');
    container.innerHTML = '';

    document.getElementById('total-active-count').textContent = activeDeliveries.length;
    const totalValue = activeDeliveries.reduce((sum, order) => sum + order.value, 0);
    document.getElementById('total-active-value').textContent = `₹${totalValue.toLocaleString()}`;

    if (activeDeliveries.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-truck"></i><p>No active deliveries</p></div>';
        return;
    }

    activeDeliveries.forEach(order => {
        container.appendChild(createOrderCard(order, 'active'));
    });
}

// Render completed orders
function renderCompletedOrders() {
    const container = document.getElementById('completed-orders-container');
    container.innerHTML = '';

    if (completedOrders.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-check-circle"></i><p>No completed deliveries today</p></div>';
        return;
    }

    completedOrders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'order-card';
        card.innerHTML = `
            <div class="order-header">
                <span class="order-id"><i class="fas fa-hashtag"></i> Order #${order.id}</span>
                <span class="order-status status-delivered">Delivered</span>
            </div>
            <div class="order-details">
                <div class="detail-item">
                    <i class="fas fa-user"></i>
                    <div>
                        <div class="detail-label">Customer</div>
                        <div class="detail-value">${order.customer}</div>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <div class="detail-label">Location</div>
                        <div class="detail-value">${order.address}</div>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <div class="detail-label">Delivered At</div>
                        <div class="detail-value">${order.deliveredTime}</div>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-rupee-sign"></i>
                    <div>
                        <div class="detail-label">Order Value</div>
                        <div class="detail-value">₹${order.value.toLocaleString()}</div>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-credit-card"></i>
                    <div>
                        <div class="detail-label">Payment</div>
                        <div class="detail-value">${order.paymentMode}</div>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-star"></i>
                    <div>
                        <div class="detail-label">Rating</div>
                        <div class="detail-value">${'★'.repeat(order.rating)}${'☆'.repeat(5-order.rating)}</div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Create order card
function createOrderCard(order, type) {
    const card = document.createElement('div');
    card.className = 'order-card';

    const statusClass = type === 'pending' ? 'status-pending' : 'status-transit';
    const statusText = type === 'pending' ? 'Pending Pickup' : 'In Transit';

    card.innerHTML = `
        <div class="order-header">
            <span class="order-id"><i class="fas fa-hashtag"></i> Order #${order.id}</span>
            <span class="order-status ${statusClass}">${statusText}</span>
        </div>
        <div class="order-details">
            <div class="detail-item">
                <i class="fas fa-user"></i>
                <div>
                    <div class="detail-label">Customer</div>
                    <div class="detail-value">${order.customer}</div>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <div class="detail-label">Delivery Address</div>
                    <div class="detail-value">${order.address}</div>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-phone"></i>
                <div>
                    <div class="detail-label">Contact</div>
                    <div class="detail-value">${order.phone}</div>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-rupee-sign"></i>
                <div>
                    <div class="detail-label">Order Value</div>
                    <div class="detail-value">₹${order.value.toLocaleString()}</div>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-calendar"></i>
                <div>
                    <div class="detail-label">Order Date</div>
                    <div class="detail-value">${order.orderDate}</div>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-credit-card"></i>
                <div>
                    <div class="detail-label">Payment Mode</div>
                    <div class="detail-value">${order.paymentMode}</div>
                </div>
            </div>
        </div>
        <div class="order-actions">
            <button class="btn-action btn-view" onclick="viewOrderDetails(${order.id}, '${type}')">
                <i class="fas fa-eye"></i> View Details
            </button>
            ${type === 'pending' ? 
                `<button class="btn-action btn-pickup" onclick="markAsPickedUp(${order.id})">
                    <i class="fas fa-check"></i> Mark as Picked Up
                </button>` : 
                `<button class="btn-action btn-complete" onclick="markAsDelivered(${order.id})">
                    <i class="fas fa-check-double"></i> Mark as Delivered
                </button>`
            }
        </div>
    `;

    return card;
}

// View order details
function viewOrderDetails(orderId, type) {
    let order;
    if (type === 'pending') {
        order = pendingOrders.find(o => o.id === orderId);
    } else {
        order = activeDeliveries.find(o => o.id === orderId);
    }

    if (!order) return;

    const itemsList = order.items.map(item => `
        <li class="product-item">
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${item.price.toLocaleString()}</span>
        </li>
    `).join('');

    document.getElementById('modal-body-content').innerHTML = `
        <div class="customer-info">
            <h6 style="color: var(--dark-coffee); margin-bottom: 10px;">
                <i class="fas fa-user-circle"></i> Customer Information
            </h6>
            <p><strong>Name:</strong> ${order.customer}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Address:</strong> ${order.address} - ${order.pincode}</p>
            <p><strong>Order Date:</strong> ${order.orderDate}</p>
            ${type === 'active' ? `<p><strong>Picked Up:</strong> ${order.pickedUpTime}</p>` : ''}
        </div>

        <h6 style="color: var(--dark-coffee); margin-bottom: 10px; margin-top: 20px;">
            <i class="fas fa-box"></i> Order Items
        </h6>
        <ul class="product-list">
            ${itemsList}
        </ul>

        <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid var(--beige);">
            <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; color: var(--dark-coffee);">
                <span>Total Amount:</span>
                <span>₹${order.value.toLocaleString()}</span>
            </div>
            <p style="margin-top: 10px; color: #7f8c8d;">
                <strong>Payment Mode:</strong> ${order.paymentMode}
            </p>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
    modal.show();
}

// Mark as picked up
function markAsPickedUp(orderId) {
    if (confirm(`Are you sure you want to mark Order #${orderId} as picked up?`)) {
        const orderIndex = pendingOrders.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            const order = pendingOrders.splice(orderIndex, 1)[0];
            order.pickedUpTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            activeDeliveries.push(order);
            
            alert(`Order #${orderId} has been marked as picked up!`);
            
            // Refresh current view
            const currentSection = document.querySelector('.sidebar-menu a.active').onclick.toString().match(/showSection\('(.+?)'\)/)[1];
            if (currentSection === 'pending-orders') {
                renderPendingOrders();
            } else if (currentSection === 'dashboard') {
                renderDashboard();
            }
        }
    }
}

// Mark as delivered
function markAsDelivered(orderId) {
    if (confirm(`Are you sure you want to mark Order #${orderId} as delivered?`)) {
        const orderIndex = activeDeliveries.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            activeDeliveries.splice(orderIndex, 1);
            alert(`Order #${orderId} has been marked as delivered!`);
            
            // Refresh current view
            const currentSection = document.querySelector('.sidebar-menu a.active').onclick.toString().match(/showSection\('(.+?)'\)/)[1];
            if (currentSection === 'active-deliveries') {
                renderActiveDeliveries();
            } else if (currentSection === 'dashboard') {
                renderDashboard();
            }
        }
    }
}

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logging out...');
        // window.location.href = 'login.html';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {

    if (document.getElementById('dashboard-section')) {
        renderDashboard();
    }

    if (document.getElementById('pending-orders-container')) {
        renderPendingOrders();
    }

    if (document.getElementById('active-deliveries-container')) {
        renderActiveDeliveries();
    }

    if (document.getElementById('completed-orders-container')) {
        renderCompletedOrders();
    }

});

// Show updated data on profile page
document.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.getElementById('profileName');
    if (!nameEl) return;

    const profile = JSON.parse(localStorage.getItem('profileData'));
    if (!profile) return;

    document.getElementById('profileName').innerText = profile.name;
    document.getElementById('profileEmail').innerText = profile.email;
    document.getElementById('profilePhone').innerText = profile.phone.replace(/^\+91\s?/, '');
});

// Edit Profile
const editForm = document.getElementById('editProfileForm');
if (editForm) {
    editForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const phoneInput = document.getElementById('phone').value.trim();

        // Validate 10 digits
        if (!/^\d{10}$/.test(phoneInput)) {
            alert('Please enter a valid 10-digit Indian phone number.');
            return;
        }

        const profileData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: '+91' + phoneInput
        };

        localStorage.setItem('profileData', JSON.stringify(profileData));
        alert('Profile updated successfully!');
        window.location.href = 'My Profile.html';
    });
}

// Load existing profile data
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('editProfileForm');
    if (!form) return;

    const profile = JSON.parse(localStorage.getItem('profileData')) || {
        name: 'Isha Sharma',
        email: 'isha45@gmail.com',
        phone: '+91 6354789275'
    };

    document.getElementById('name').value = profile.name;
    document.getElementById('email').value = profile.email;
    document.getElementById('phone').value = profile.phone.replace('+91','');
});
