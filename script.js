document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "Divya" && password === "1234") {
        window.location.href = "crops.html";
    } else {
        document.getElementById("error-message").innerText = "Invalid login credentials!";
    }
});
