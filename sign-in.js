let loggedInUser = "";

        function validateLogin() {
            let username = document.getElementById('username').value.trim();
            let password = document.getElementById('password').value.trim();
            let errorMessage = document.getElementById('error-message');

            let validUsername = "admin";
            let validPassword = "1234";

            if (username === "" || password === "") {
                errorMessage.textContent = "Please fill in all fields.";
            } else if (username === validUsername && password === validPassword) {
                loggedInUser = username;
                window.location.href = "home.html"; // Redirect to home page
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }
        }

        function forgotPassword() {
            window.location.href = "forgot-password.html"; // Redirect to forgot password page
        }






