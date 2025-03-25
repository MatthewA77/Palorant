let report = document.getElementById('report-content');
let username = document.getElementById('inpUser');
let tagline = document.getElementById('inpTag');
let email = document.getElementById('inpEmail');
let server = document.getElementById('inpServer');
let bugs = document.getElementById('inpBugs');

function showError(input, message) {
    let existingError = input.nextElementSibling;
    if (existingError && existingError.classList.contains("error-message")) {
        existingError.remove();
    }

    if (message) {
        let errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "14px";
        errorMessage.style.marginTop = "5px";
        errorMessage.textContent = message;
        input.after(errorMessage);
    }
}

function validUsername() {
    const usernameArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";

    if (username.value == '') {
        showError(username, "Username must be filled");
        return false;
    } else if (username.value.length < 3 || username.value.length > 10) {
        showError(username, "Username must be between 3 and 10 characters");
        return false;
    } else {
        for (let i = 0; i < username.value.length; i++) {
            if (!usernameArray.includes(username.value[i])) {
                showError(username, "Username must contain only letters, numbers, and underscore with no whitespace");
                return false;
            }
        }
    }
    showError(username, '');
    return true;
}

function validTagline() {
    if (tagline.value == '') {
        showError(tagline, "Tagline must be filled");
        return false;
    } else if (tagline.value.length != 4) {
        showError(tagline, "Tagline must be 4 characters long");
        return false;
    } else {
        for (let i  = 0; i < tagline.value.length; i++) {
            if (tagline.value[i] < '0' || tagline.value[i] > '9') {
                showError(tagline, "Tagline must contain only digits");
                return false;
            }
        }
    }
    showError(tagline, '');
    return true;
}

function validEmail() {
    if (email.value == '') {
        showError(email, "Email must be filled");
        return false;
    } else if (!email.value.endsWith('@gmail.com') && !email.value.endsWith('@binus.ac.id')) {
        showError(email, "Email must end with @gmail.com or @binus.ac.id");
        return false;
    }
    showError(email, '');
    return true;
}

function validServer() {
    if (server.value == '') {
        showError(server, "Server must be selected");
        return false;
    }

    showError(server, '');
    return true;
}

function validBugs() {
    if (bugs.value == '') {
        showError(bugs, "Bugs must be filled");
        return false;
    }

    showError(bugs, '');
    return true;
}

function showPopupNotification() {
    let popup = document.getElementById("popup-notification");
    
    popup.classList.add("show"); // Slide in
    console.log('show');
    
    // Hide after 3 seconds with fade-out
    setTimeout(() => {
        popup.classList.add("hide"); // Apply fade-out
        console.log('hide');
    }, 3000);
    
    setTimeout(() => {
        popup.style.right = "-300px"; // Move back off-screen
        popup.classList.remove("show", "hide"); // Reset for next use
        console.log('clear');
    }, 4000); // Wait for fade-out to complete
}

username.addEventListener('input', validUsername);
tagline.addEventListener('input', validTagline);
email.addEventListener('input', validEmail);
server.addEventListener('input', validServer);
bugs.addEventListener('input', validBugs);

report.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValidUser = validUsername();
    let isValidTag = validTagline();
    let isValidEmail = validEmail();
    let isValidServer = validServer();
    let isValidBugs = validBugs();

    if (isValidUser && isValidTag && isValidEmail && isValidServer && isValidBugs) {
        showPopupNotification();
        report.reset();
        document.querySelectorAll('.error-message').forEach(error => error.remove());
    }
});