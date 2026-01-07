 // Set default date
document.getElementById('invoiceDate').valueAsDate = new Date();

// Calculate item total
function calculateItemTotal(row) {
    const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
    const price = parseFloat(row.querySelector('.item-price').value) || 0;
    const total = qty * price;
    row.querySelector('.item-total').value = total.toFixed(2);
}

// Attach listeners to items
function attachItemListeners() {
    document.querySelectorAll('.item-qty, .item-price').forEach(input => {
        input.addEventListener('input', function() {
            calculateItemTotal(this.closest('tr'));
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            if (document.querySelectorAll('#itemsTable tr').length > 1) {
                this.closest('tr').remove();
            } else {
                alert('At least one item is required');
            }
        });
    });
}

attachItemListeners();

// Add new item
document.getElementById('addItem').addEventListener('click', function() {
    const table = document.getElementById('itemsTable');
    const newRow = table.rows[0].cloneNode(true);
    newRow.querySelectorAll('input').forEach(input => {
        if (input.classList.contains('item-qty')) {
            input.value = '1';
        } else if (!input.readOnly) {
            input.value = input.classList.contains('item-price') || input.classList.contains('item-total') ? '0' : '';
        }
    });
    table.appendChild(newRow);
    attachItemListeners();
});

// Generate invoice preview
document.getElementById('generateInvoice').addEventListener('click', function() {
    // Validate
    if (!document.getElementById('invoiceNumber').value || 
        !document.getElementById('customerName').value || 
        !document.getElementById('billingAddress').value) {
        alert('Please fill in all required fields');
        return;
    }

    // Populate preview
    document.getElementById('previewInvoiceNumber').textContent = '#' + document.getElementById('invoiceNumber').value;
    
    const date = new Date(document.getElementById('invoiceDate').value);
    document.getElementById('previewInvoiceDate').textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    document.getElementById('previewOrderNumber').textContent = '#' + (document.getElementById('orderNumber').value || 'N/A');
    document.getElementById('previewCustomerName').textContent = document.getElementById('customerName').value;
    document.getElementById('previewCustomerEmail').textContent = document.getElementById('customerEmail').value;
    document.getElementById('previewBillingAddress').textContent = document.getElementById('billingAddress').value;
    
    const status = document.getElementById('paymentStatus').value;
    const statusBadge = document.getElementById('previewPaymentStatus');
    statusBadge.textContent = status;
    statusBadge.className = 'badge-status ' + status.toLowerCase();

    // Populate items
    const previewTable = document.getElementById('previewItemsTable');
    previewTable.innerHTML = '';
    let subtotal = 0;

    document.querySelectorAll('#itemsTable tr').forEach(row => {
        const name = row.querySelector('.item-name').value;
        const desc = row.querySelector('.item-desc').value;
        const qty = row.querySelector('.item-qty').value;
        const price = parseFloat(row.querySelector('.item-price').value);
        const total = parseFloat(row.querySelector('.item-total').value);

        if (name && qty && price) {
            subtotal += total;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span class="product-name">${name}</span></td>
                <td>${desc || '-'}</td>
                <td class="text-center">${qty}</td>
                <td class="text-end">$${price.toFixed(2)}</td>
                <td class="text-end">$${total.toFixed(2)}</td>
            `;
            previewTable.appendChild(tr);
        }
    });

    // Calculate totals
    const taxPercent = parseFloat(document.getElementById('taxPercent').value) || 0;
    const shippingOption = document.getElementById('shipping').value;
    let shippingCost = 0;
    let shippingText = 'Free';
    
    if (shippingOption === 'Standard') {
        shippingCost = 10;
        shippingText = '$10.00';
    } else if (shippingOption === 'Express') {
        shippingCost = 25;
        shippingText = '$25.00';
    }

    const tax = (subtotal * taxPercent) / 100;
    const grandTotal = subtotal + tax + shippingCost;

    document.getElementById('previewSubtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('previewTaxPercent').textContent = taxPercent;
    document.getElementById('previewTax').textContent = '$' + tax.toFixed(2);
    document.getElementById('previewShipping').textContent = shippingText;
    document.getElementById('previewGrandTotal').textContent = '$' + grandTotal.toFixed(2);

    // Show preview and scroll to it
    document.getElementById('invoicePreview').style.display = 'block';
    setTimeout(() => {
        document.getElementById('invoicePreview').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// Edit invoice
document.getElementById('editInvoice').addEventListener('click', function() {
    document.getElementById('invoicePreview').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reset form
document.getElementById('resetForm').addEventListener('click', function() {
    if (confirm('Are you sure you want to reset the form?')) {
        document.querySelectorAll('.invoice-form-card input, .invoice-form-card textarea, .invoice-form-card select').forEach(input => {
            if (input.id === 'invoiceDate') {
                input.valueAsDate = new Date();
            } else if (input.id === 'invoiceNumber') {
                input.value = 'INV-2026-001';
            } else if (input.id === 'taxPercent') {
                input.value = '18';
            } else if (input.id === 'paymentStatus') {
                input.value = 'Paid';
            } else if (input.id === 'shipping') {
                input.value = 'Free';
            } else if (input.classList.contains('item-qty')) {
                input.value = '1';
            } else if (input.classList.contains('item-price') || input.classList.contains('item-total')) {
                input.value = '0';
            } else if (!input.readOnly) {
                input.value = '';
            }
        });

        // Reset to single item row
        const table = document.getElementById('itemsTable');
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        // Hide preview
        document.getElementById('invoicePreview').style.display = 'none';
    }
});

// Initialize calculations on page load
document.querySelectorAll('#itemsTable tr').forEach(row => {
    calculateItemTotal(row);
});

// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});
