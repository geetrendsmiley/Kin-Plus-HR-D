document.getElementById('onboardingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the default way
  
    // Gather form data
    const formData = {
      firstName: document.getElementById('firstName').value,
      surname: document.getElementById('surname').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      qualification: document.getElementById('qualification').value,
      dob: document.getElementById('dob').value,
      age: calculateAge(document.getElementById('dob').value), // Calculate age from DOB
      religion: document.getElementById('religion').value,
      address: document.getElementById('address').value,
      cv: document.getElementById('cv').files[0],
      passport: document.getElementById('passport').files[0],
      sex: document.getElementById('sex').value,
      maritalStatus: document.getElementById('maritalStatus').value,
      experience: document.getElementById('experience').value,
    };
  
    // Log the form data to the console (for testing)
    console.log('Form Data:', formData);
  
    // Send a welcome email (simulated)
    sendWelcomeEmail(formData.email);
  
    // Alert the manager that the form was submitted successfully
    alert('Onboarding form submitted successfully! A welcome email has been sent to the new staff.');
  
    // Reset the form
    this.reset();
  });
  
  function sendWelcomeEmail(email) {
    // Simulate sending a welcome email
    console.log(`Sending welcome email to ${email}...`);
    // In a real application, you would use an API (e.g., SendGrid, Mailgun) to send the email.
  }
  
  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }