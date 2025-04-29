// Tuition Fee Calculator Function
function calculateTuition() {
    const credits = document.getElementById('credits').value;
    const courseType = document.getElementById('courseType').value;

    let feePerCredit;

    if (courseType === 'undergraduate') {
        feePerCredit = 300; // Fee for undergraduate
    } else {
        feePerCredit = 500; // Fee for postgraduate
    }

    const totalFee = credits * feePerCredit;
    document.getElementById('tuitionFee').textContent = `$${totalFee}`;
}

// Contact Form Submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email via an API or backend here (simulated for now)
    alert(`Message sent successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
