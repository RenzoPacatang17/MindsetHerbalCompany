const menuBtn = document.getElementById("menu");
const menuList = document.getElementById("menuList");

menuBtn.addEventListener("click", function () {
    if (getComputedStyle(menuList).display === "none") {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "none";
    }
});

const counter = document.getElementById('count');
const addBtns = document.querySelectorAll('.addBtn');
const removeBtns = document.querySelectorAll('.removeBtn');
const resetBtns = document.querySelectorAll('.resetBtn');

let count = 0;

// Add
addBtns.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });
});

// Remove
removeBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (count > 0) {
            count--;
            counter.textContent = count;
        }
    });
});

// Reset
resetBtns.forEach(button => {
    button.addEventListener('click', () => {
        count = 0;
        counter.textContent = count;
    });
});

// CONTACT SECTION

const contactForm = document.getElementById("contactForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("contact");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("form-message");

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    const phonePattern = /^(\+63|0)\d{10}$/;
    return phonePattern.test(phone);
}

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    formMessage.style.color = "red";

    if (username === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (!isValidName(username)) {
        formMessage.textContent = "Name should contain letters only.";
        return;
    }

    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    if (!isValidEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (phone === "") {
        formMessage.textContent = "Please enter your contact number.";
        return;
    }

    if (!isValidPhone(phone)) {
        formMessage.textContent =
            "Enter a valid Philippine mobile number.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }

    formMessage.style.color = "white";
    formMessage.textContent = "Form submitted successfully!";

    contactForm.reset();
});