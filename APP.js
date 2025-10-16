// app.js
console.log("Welcome to the Student Portal - Step 5");

// Function to display a greeting message
function greetStudent(name) {
    console.log(`👋 Hello, ${name}! Welcome back to the portal.`);
}

// Function to show total registered students
function showTotalStudents(count) {
    console.log(`📊 Total students currently registered: ${count}`);
}

// Function to register a new student
function registerStudent(name, grade) {
    console.log(`✅ Student ${name} (Grade ${grade}) has been successfully registered.`);
}

// Function to check login credentials
function login(username, password) {
    if (username === "admin" && password === "1234") {
        console.log("🔐 Login successful! Access granted.");
        return true;
    } else {
        console.log("❌ Invalid credentials. Please try again.");
        return false;
    }
}

// 🆕 NEW: Function to log out
function logout(username) {
    console.log(`👋 ${username} has been logged out successfully.`);
}

// Function calls
greetStudent("Prasoona");
showTotalStudents(25);
registerStudent("Ravi", 9);

if (login("admin", "1234")) {
    logout("admin");
}
