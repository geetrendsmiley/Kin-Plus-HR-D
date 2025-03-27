document.addEventListener('DOMContentLoaded', function() {
    // Salary Statistics Chart
    const salaryChartEl = document.getElementById('salaryChart');
    const salaryData = [
        750, 800, 650, 600, 550, 500, 450, 600, 700, 800, 900, 700
    ];

    function createBarChart(element, data) {
        const chartWidth = element.clientWidth;
        const chartHeight = element.clientHeight;
        const barWidth = chartWidth / data.length;
        const maxValue = Math.max(...data);

        element.innerHTML = data.map((value, index) => `
            <div class="bar" style="
                height: ${(value / maxValue) * 100}%;
                width: ${barWidth}px;
                left: ${index * barWidth}px;
                background-color: #DAB775;
            "></div>
        `).join('');
    }

    // Income Analysis Pie Chart
    const incomeChartEl = document.getElementById('incomeChart');
    const incomeData = [
        { department: 'Dev', value: 30, color: '#6B74E6' },
        { department: 'Mark', value: 40, color: '#FF7F50' },
        { department: 'Seo', value: 45, color: '#5BBEFF' },
        { department: 'Desi', value: 70, color: '#DAB775' }
    ];

    function createPieChart(element, data) {
        const total = data.reduce((sum, item) => sum + item.value, 0);
        let currentAngle = 0;
        const chartHTML = data.map(item => {
            const percentage = (item.value / total) * 360;
            const startAngle = currentAngle;
            currentAngle += percentage;
            return `
                <div class="pie-slice" style="
                    background: conic-gradient(
                        ${item.color} ${startAngle}deg, 
                        ${item.color} ${startAngle + percentage}deg, 
                        transparent ${startAngle + percentage}deg
                    );
                "></div>
            `;
        }).join('');

        element.innerHTML = chartHTML;
    }

    // Initialize Charts
    createBarChart(salaryChartEl, salaryData);
    createPieChart(incomeChartEl, incomeData);

    // Responsive handling
    window.addEventListener('resize', () => {
        createBarChart(salaryChartEl, salaryData);
        createPieChart(incomeChartEl, incomeData);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Salary Statistics Chart
    const salaryChartEl = document.getElementById('salaryChart');
    const salaryData = [
        750, 800, 650, 600, 550, 500, 450, 600, 700, 800, 900, 700
    ];

    function createResponsiveBarChart(element, data) {
        // Clear previous chart
        element.innerHTML = '';
        
        // Get current dimensions
        const chartWidth = element.clientWidth;
        const chartHeight = element.clientHeight;
        
        // Create SVG for more precise rendering
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', `0 0 ${chartWidth} ${chartHeight}`);
        
        // Calculate bar dimensions
        const barWidth = chartWidth / data.length;
        const maxValue = Math.max(...data);
        
        // Create bars
        data.forEach((value, index) => {
            const barHeight = (value / maxValue) * chartHeight;
            const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            
            bar.setAttribute('x', index * barWidth);
            bar.setAttribute('y', chartHeight - barHeight);
            bar.setAttribute('width', barWidth * 0.8);  // 80% of bar width with gap
            bar.setAttribute('height', barHeight);
            bar.setAttribute('fill', '#DAB775');
            
            // Add hover effect
            bar.addEventListener('mouseover', function() {
                this.setAttribute('opacity', '0.7');
            });
            bar.addEventListener('mouseout', function() {
                this.setAttribute('opacity', '1');
            });
            
            svg.appendChild(bar);
        });
        
        element.appendChild(svg);
    }

    // Income Analysis Pie Chart
    const incomeChartEl = document.getElementById('incomeChart');
    const incomeData = [
        { department: 'Dev', value: 30, color: '#6B74E6' },
        { department: 'Mark', value: 40, color: '#FF7F50' },
        { department: 'Seo', value: 45, color: '#5BBEFF' },
        { department: 'Desi', value: 70, color: '#DAB775' }
    ];

    function createResponsivePieChart(element, data) {
        // Clear previous chart
        element.innerHTML = '';
        
        // Get current dimensions
        const chartWidth = element.clientWidth;
        const chartHeight = element.clientHeight;
        const centerX = chartWidth / 2;
        const centerY = chartHeight / 2;
        const radius = Math.min(chartWidth, chartHeight) / 2.5;
        
        // Create SVG for more precise rendering
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', `0 0 ${chartWidth} ${chartHeight}`);
        
        // Calculate total value
        const total = data.reduce((sum, item) => sum + item.value, 0);
        
        let startAngle = 0;
        
        // Create pie slices
        data.forEach(item => {
            const percentage = (item.value / total) * 360;
            const endAngle = startAngle + percentage;
            
            // Convert polar to Cartesian coordinates
            const startX = centerX + radius * Math.cos(Math.PI * startAngle / 180);
            const startY = centerY + radius * Math.sin(Math.PI * startAngle / 180);
            const endX = centerX + radius * Math.cos(Math.PI * endAngle / 180);
            const endY = centerY + radius * Math.sin(Math.PI * endAngle / 180);
            
            // Large arc flag
            const largeArcFlag = percentage > 180 ? 1 : 0;
            
            // Create path for pie slice
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `
                M ${centerX} ${centerY}
                L ${startX} ${startY}
                A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
                Z
            `);
            path.setAttribute('fill', item.color);
            
            // Hover effect
            path.addEventListener('mouseover', function() {
                this.setAttribute('transform', 'scale(1.05)');
            });
            path.addEventListener('mouseout', function() {
                this.setAttribute('transform', 'scale(1)');
            });
            
            svg.appendChild(path);
            
            startAngle = endAngle;
        });
        
        element.appendChild(svg);
    }

    // Initial chart creation
    function initializeCharts() {
        createResponsiveBarChart(salaryChartEl, salaryData);
        createResponsivePieChart(incomeChartEl, incomeData);
    }

    // Initialize charts
    initializeCharts();

    // Responsive handling
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initializeCharts();
        }, 250);
    });

    // Optional: Add stat card hover effects
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
        });
    });
});