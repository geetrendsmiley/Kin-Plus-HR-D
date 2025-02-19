document.getElementById('forgotPassword').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.reset-container').style.display = 'block';
});

document.getElementById('backToLogin').addEventListener('click', function() {
    document.querySelector('.reset-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Password reset successful!');
    }
});
