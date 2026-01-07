// Filter payments
function filterPayments(filter) {
    const rows = document.querySelectorAll('#paymentTableBody tr');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    rows.forEach(row => {
        const method = row.dataset.method;
        const status = row.dataset.status;
        
        if (filter === 'all') {
            row.style.display = '';
        } else if (filter === 'cod' && method === 'cod') {
            row.style.display = '';
        } else if (filter === 'online' && method === 'online') {
            row.style.display = '';
        } else if (filter === 'completed' && status === 'completed') {
            row.style.display = '';
        } else if (filter === 'pending' && status === 'pending') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#paymentTableBody tr');
    
    rows.forEach(row => {
        const orderId = row.querySelector('td:first-child').textContent.toLowerCase();
        const customer = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        
        if (orderId.includes(searchTerm) || customer.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// View payment details
function viewPaymentDetails(orderId) {
    const modal = document.getElementById('paymentModal');
    const modalBody = document.getElementById('modalBody');
    
    // Sample data - in real application, fetch from backend
    const paymentData = {
        orderId: orderId,
        customer: 'Rajesh Kumar',
        email: 'rajesh.kumar@email.com',
        phone: '+91 98765 43210',
        method: 'Online Payment (UPI)',
        transactionId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        amount: '₹15,499',
        status: 'Completed',
        date: 'Dec 28, 2024 10:45 AM',
        items: 'Wooden Coffee Table, Modern Chair'
    };

    modalBody.innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Order ID:</span>
            <span class="detail-value"><strong>${paymentData.orderId}</strong></span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Customer Name:</span>
            <span class="detail-value">${paymentData.customer}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Email:</span>
            <span class="detail-value">${paymentData.email}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Phone:</span>
            <span class="detail-value">${paymentData.phone}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Payment Method:</span>
            <span class="detail-value">${paymentData.method}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Transaction ID:</span>
            <span class="detail-value"><code>${paymentData.transactionId}</code></span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Amount:</span>
            <span class="detail-value"><strong style="font-size: 18px; color: #28a745;">${paymentData.amount}</strong></span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Status:</span>
            <span class="detail-value"><span class="badge badge-success">${paymentData.status}</span></span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Date & Time:</span>
            <span class="detail-value">${paymentData.date}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Items:</span>
            <span class="detail-value">${paymentData.items}</span>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});

// Account link functionality
document.querySelector('.top-navbar a[href="account.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'account.html';
});

// Pagination functionality
document.querySelectorAll('.pagination button').forEach((btn, index) => {
    btn.addEventListener('click', function() {
        if (this.innerHTML.includes('chevron')) return;
        
        document.querySelectorAll('.pagination button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // In real application, fetch data for the selected page
        console.log('Loading page:', this.textContent);
    });
});

// Export payments data
function exportPayments() {
    alert('Payment data export functionality would be implemented here. This would generate a CSV/Excel file with all payment transactions.');
}

// Update payment status
function updatePaymentStatus(orderId, newStatus) {
    if(confirm(`Update payment status for ${orderId} to ${newStatus}?`)) {
        alert(`Payment status updated successfully for ${orderId}`);
        // In real application, make API call to update status
    }
}

// Generate payment report
function generateReport() {
    alert('Generating payment report... This would create a detailed PDF/Excel report of all transactions.');
}

// COD payment collection confirmation
function confirmCODCollection(orderId) {
    if(confirm(`Confirm COD payment collection for ${orderId}?`)) {
        alert(`COD payment marked as collected for ${orderId}`);
        // Update the row status to completed
        const row = document.querySelector(`tr td:first-child strong:contains('${orderId}')`);
        if(row) {
            const statusCell = row.closest('tr').querySelector('.badge');
            statusCell.className = 'badge badge-success';
            statusCell.textContent = 'Completed';
        }
    }
}

// Send payment reminder
function sendPaymentReminder(orderId, customer) {
    if(confirm(`Send payment reminder to ${customer} for ${orderId}?`)) {
        alert(`Payment reminder sent successfully to ${customer}`);
    }
}

// Mark payment as failed
function markAsFailed(orderId) {
    const reason = prompt('Enter failure reason:');
    if(reason) {
        alert(`Payment marked as failed for ${orderId}\nReason: ${reason}`);
    }
}

// Reconcile payments
function reconcilePayments() {
    alert('Starting payment reconciliation process...\n\nThis would compare bank statements with recorded transactions.');
}

// Download transaction receipt
function downloadReceipt(orderId) {
    alert(`Downloading receipt for ${orderId}...\n\nThis would generate a PDF receipt.`);
}

// Filter by date range
function filterByDateRange() {
    const startDate = prompt('Enter start date (DD/MM/YYYY):');
    const endDate = prompt('Enter end date (DD/MM/YYYY):');
    
    if(startDate && endDate) {
        alert(`Filtering payments from ${startDate} to ${endDate}`);
        // In real application, filter the table based on date range
    }
}

// Calculate total revenue
function calculateRevenue() {
    let totalCOD = 245680;
    let totalOnline = 489320;
    let totalRevenue = totalCOD + totalOnline;
    
    alert(`Revenue Summary:\n\nCOD: ₹${totalCOD.toLocaleString('en-IN')}\nOnline: ₹${totalOnline.toLocaleString('en-IN')}\n\nTotal Revenue: ₹${totalRevenue.toLocaleString('en-IN')}`);
}

// Active sidebar menu
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    if(link.getAttribute('href') === 'payment.html') {
        link.classList.add('active');
    }
});

// Auto-refresh payments (every 30 seconds)
let autoRefreshEnabled = false;
function toggleAutoRefresh() {
    autoRefreshEnabled = !autoRefreshEnabled;
    if(autoRefreshEnabled) {
        alert('Auto-refresh enabled. Payments will refresh every 30 seconds.');
        // setInterval(refreshPayments, 30000);
    } else {
        alert('Auto-refresh disabled.');
    }
}

function refreshPayments() {
    console.log('Refreshing payment data...');
    // In real application, fetch latest payment data from API
}

// Format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Validate transaction ID
function validateTransaction(transactionId) {
    // Simulate transaction validation with payment gateway
    alert(`Validating transaction ${transactionId} with payment gateway...\n\nTransaction verified successfully!`);
}

// Handle payment disputes
function handleDispute(orderId) {
    const disputeReason = prompt(`Enter dispute reason for ${orderId}:`);
    if(disputeReason) {
        alert(`Dispute registered for ${orderId}\nReason: ${disputeReason}\n\nCustomer support will be notified.`);
    }
}

// Bulk payment actions
function bulkAction() {
    alert('Bulk payment actions:\n\n- Export selected payments\n- Update multiple statuses\n- Send bulk reminders\n\nThis functionality would be implemented with checkboxes for row selection.');
}

// Payment gateway settings
function paymentGatewaySettings() {
    alert('Payment Gateway Settings:\n\n- Configure UPI\n- Setup Card payments\n- Manage Wallet integrations\n- COD settings\n- Transaction fees\n\nThis would open a settings modal.');
}