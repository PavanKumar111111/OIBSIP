document.getElementById('registerForm').addEventListener('submit', function(event) 
{
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can add more robust validation)
    if (!username || !email || !password) 
    {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you would typically send the data to a server for registration
    // For this example, we'll just log the data to the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Optionally, you can redirect the user to a login page or display a success message
    alert('Registration successful!');
});