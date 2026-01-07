// Color theme
const colors = {
    coffee: '#8B7355',
    darkCoffee: '#6B5744',
    softBrown: '#A89080',
    beige: '#E8DCC8',
    charcoal: '#3E3E3E'
};

// Sales Overview Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Revenue (₹)',
            data: [65000, 72000, 68000, 85000, 92000, 88000, 95000, 102000, 98000, 110000, 105000, 115000],
            borderColor: colors.coffee,
            backgroundColor: 'rgba(139, 115, 85, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 3
        }, {
            label: 'Orders',
            data: [45, 52, 48, 65, 72, 68, 75, 82, 78, 88, 85, 92],
            borderColor: colors.darkCoffee,
            backgroundColor: 'rgba(107, 87, 68, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 15
                }
            },
            tooltip: {
                backgroundColor: 'rgba(62, 62, 62, 0.9)',
                padding: 12,
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: colors.coffee,
                borderWidth: 1
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Order Status Chart
const orderStatusCtx = document.getElementById('orderStatusChart').getContext('2d');
const orderStatusChart = new Chart(orderStatusCtx, {
    type: 'doughnut',
    data: {
        labels: ['Delivered', 'Processing', 'Shipped', 'Cancelled'],
        datasets: [{
            data: [65, 20, 10, 5],
            backgroundColor: [
                colors.coffee,
                colors.softBrown,
                colors.darkCoffee,
                colors.beige
            ],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(62, 62, 62, 0.9)',
                padding: 12,
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        },
        cutout: '65%'
    }
});

// Category Chart
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
const categoryChart = new Chart(categoryCtx, {
    type: 'bar',
    data: {
        labels: ['Sofas', 'Tables', 'Chairs', 'Beds', 'Cabinets'],
        datasets: [{
            label: 'Sales',
            data: [245, 189, 167, 142, 98],
            backgroundColor: [
                colors.coffee,
                colors.darkCoffee,
                colors.softBrown,
                colors.charcoal,
                colors.beige
            ],
            borderWidth: 0,
            borderRadius: 8,
            barThickness: 40
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(62, 62, 62, 0.9)',
                padding: 12,
                titleColor: '#fff',
                bodyColor: '#fff'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Customer Growth Chart
const customerGrowthCtx = document.getElementById('customerGrowthChart').getContext('2d');
const customerGrowthChart = new Chart(customerGrowthCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Customers',
            data: [35, 42, 38, 48, 55, 52, 58, 65, 62, 70, 68, 75],
            borderColor: colors.coffee,
            backgroundColor: 'rgba(139, 115, 85, 0.2)',
            tension: 0.4,
            fill: true,
            borderWidth: 3,
            pointRadius: 5,
            pointBackgroundColor: colors.coffee,
            pointBorderColor: '#fff',
            pointBorderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(62, 62, 62, 0.9)',
                padding: 12,
                titleColor: '#fff',
                bodyColor: '#fff'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Sidebar active state
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-menu a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});

// Generate Report button
document.getElementById('generateReport').addEventListener('click', function() {
    const dateRange = document.getElementById('dateRange').value;
    const reportType = document.getElementById('reportType').value;
    const category = document.getElementById('category').value;
    
    // Show loading state
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    this.disabled = true;
    
    // Simulate report generation
    setTimeout(() => {
        this.innerHTML = '<i class="fas fa-check"></i> Report Generated';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-sync-alt"></i> Generate Report';
            this.disabled = false;
        }, 1500);
        
        console.log('Report generated with:', { dateRange, reportType, category });
    }, 1500);
});

// Export buttons functionality
document.querySelectorAll('.btn-export').forEach(button => {
    button.addEventListener('click', function() {
        const exportType = this.textContent.trim();
        alert(`Exporting report as ${exportType}. This functionality would be implemented with backend integration.`);
    });
});

// Table header export button
const tableExportBtn = document.querySelector('.table-header .btn-primary');
if(tableExportBtn) {
    tableExportBtn.addEventListener('click', function() {
        alert('Exporting table data to Excel. This functionality would be implemented with backend integration.');
    });
}

// Chart export buttons
document.querySelectorAll('.chart-actions .btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Exporting chart data. This functionality would be implemented with backend integration.');
    });
});