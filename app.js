let currentAction = ""; // its for  user clicked "login" or "register"

// Open popup (for login/register)
function openregister(action) {
  currentAction = action;
  document.getElementById("Title").innerText =
    action === "login" ? "Login" : "Register";
  document.getElementById("registration").style.display = "flex";
}

// Close popup
function closeregister() {
  document.getElementById("registration").style.display = "none";
  document.getElementById("usernameInput").value = "";
  document.getElementById("passwordInput").value = "";
}

// Handle login/register form submission
function submitregister() {
  let username = document.getElementById("usernameInput").value.trim();
  let password = document.getElementById("passwordInput").value.trim();

  if (username && password) {
    // Save username in localStorage
    localStorage.setItem("username", username);

    // Update navbar 
    updateNavbar(username);

    // Show different message based on action
    alert(
      currentAction === "login"
        ? "Login successful! Welcome back " + username + " 🚀"
        : "Welcome " + username + "! You are registered successfully."
    );

    closeregister();
  } else {
    alert("⚠️ Please enter username and password.");
  }
}

// Logout user
function logout() {
  localStorage.removeItem("username");
  updateNavbar(null);
  alert("You have logged out.");
}

// Updating navbar 
function updateNavbar(user) {
  if (user) {
    // If logged in → Show name + Logout button
    document.getElementById("userName").innerText = "Hi, " + user;
    document.getElementById("registerbtn").style.display = "none";
    document.getElementById("loginbtn").style.display = "none";
    document.getElementById("logoutbtn").style.display = "inline-block";
  } else {
    // If not logged in → Show Register + Login buttons
    document.getElementById("userName").innerText = "";
    document.getElementById("registerbtn").style.display = "inline-block";
    document.getElementById("loginbtn").style.display = "inline-block";
    document.getElementById("logoutbtn").style.display = "none";
  }
}

function buyNow() {
  let user = localStorage.getItem("username");

  if (user) {
    alert("✅ Thanks for your purchase, " + user + "! 🚀 Your order is confirmed.");
    // Later you can redirect to order page:
    // window.location.href = "checkout.html";
  } else {
    alert("⚠️ Please login or register before buying.");
    openregister("login"); // Open login popup automatically
  }
}


// When page reloads, check if user already logged in
window.onload = function () {
  let savedUser = localStorage.getItem("username");
  updateNavbar(savedUser);
};
