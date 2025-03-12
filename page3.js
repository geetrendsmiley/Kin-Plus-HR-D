const plans = [
    {
        title: "Starter Plan",
        price: "$99",
        button: "Get started",
        features: [
            "Ideal for small business with essential HR management, payroll, and attendance tracking",
            "Affordable and easy to use for basic workforce management",
            "Helps businesses stay compliant with labor regulation"
        ]
    },
    {
        title: "Standard Plan",
        price: "$130",
        button: "Get started",
        features: [
            "Designed for growing businesses needing recruitment, performance tracking, and benefits management",
            "Includes third-party integrations for better workflow automation",
            "Enhance employee engagements and HR efficiency"
        ],
        highlight: true, // Will apply special styling
        proBadge: true // Add Pro badge
    },
    {
        title: "Premium Plan",
        price: "$250",
        button: "Get started",
        features: [
            "Best for AI-driven analytics, advanced reporting, and automation",
            "Supports multi-location management with high-level customization",
            "Comes with priority customer support for seamless HR operations"
        ]
    }
];

const pricingContainer = document.getElementById("pricing-plans");
pricingContainer.classList.add("plans"); // Add flex container for styling

plans.forEach(plan => {
    const planDiv = document.createElement("div");
    planDiv.classList.add("plan");
    if (plan.highlight) planDiv.classList.add("standard"); // Highlighted styling

    planDiv.innerHTML = `
        <h3>${plan.title} 
            ${plan.proBadge ? '<span class="pro-badge">Pro</span>' : ""}
        </h3>
        <p class="price">${plan.price}</p>
        <button>${plan.button}</button>
        <ul class="features">
            ${plan.features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>
    `;

    pricingContainer.appendChild(planDiv);
});

 

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.toggle-icon');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});










