// Generator of 4 digit PINs.
const generateBtn = document.getElementById("generateBtn");
const generatedPin = document.getElementById("pin");

generateBtn.addEventListener("click", function() {
    const pin = Math.floor(1000 + Math.random() * 9000);
    generatedPin.value = pin;
});




// Function to handle number button clicks
const inputfield = document.getElementById("typedPin");

const keyButtons7 = document.getElementById("key-7");
const keyButtons8 = document.getElementById("key-8");
const keyButtons9 = document.getElementById("key-9");
const keyButtons4 = document.getElementById("key-4");
const keyButtons5 = document.getElementById("key-5");
const keyButtons6 = document.getElementById("key-6");
const keyButtons1 = document.getElementById("key-1");
const keyButtons2 = document.getElementById("key-2");
const keyButtons3 = document.getElementById("key-3");
const keyButtons0 = document.getElementById("key-0");

const backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener("click", function() {
    const currentValue = inputfield.value;
    inputfield.value = currentValue.slice(0, -1);
});


const clearButton = document.getElementById("key-C");

clearButton.addEventListener("click", function() {
    inputfield.value = "";
});

const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", function() {
    const generatedPinValue = generatedPin.value;
    const typedPinValue = inputfield.value;

    if (typedPinValue === generatedPinValue) {
        // Pin matched
        document.querySelector(".notify-section .notify:nth-child(2)").style.display = "block";
        document.querySelector(".notify-section").style.display = "block";
        document.querySelector(".notify-section .notify:nth-child(1)").style.display = "none";
    } else {
        // Pin didn't match
        document.querySelector(".notify-section .notify:nth-child(1)").style.display = "block";
        document.querySelector(".notify-section").style.display = "block";
        document.querySelector(".notify-section .notify:nth-child(2)").style.display = "none";
    }
});

// Show notification section on submit, then hide after 1.5 seconds
const submitBtn = document.getElementById("submitBtn");
const notifySection = document.querySelector(".notify-section");

submitBtn.addEventListener("click", function() {
    if (notifySection) {
        notifySection.style.display = "block";
        setTimeout(function() {
            notifySection.style.display = "none";
        }, 1500);
    }
});

keyButtons7.addEventListener("click", function() {
    inputfield.value += "7";
});
keyButtons8.addEventListener("click", function() {
    inputfield.value += "8";
});
keyButtons9.addEventListener("click", function() {
    inputfield.value += "9";
});
keyButtons4.addEventListener("click", function() {
    inputfield.value += "4";
});
keyButtons5.addEventListener("click", function() {
    inputfield.value += "5";
});
keyButtons6.addEventListener("click", function() {
    inputfield.value += "6";
});
keyButtons1.addEventListener("click", function() {
    inputfield.value += "1";
});
keyButtons2.addEventListener("click", function() {
    inputfield.value += "2";
});
keyButtons3.addEventListener("click", function() {
    inputfield.value += "3";
});
keyButtons0.addEventListener("click", function() {
    inputfield.value += "0";
});

// Initialize attempts left
let attemptsLeft = 3;
const tryLeft = document.querySelector(".action-left"); 

// Decrement the input field value by 1 when the submit button is clicked with wrong input
submitButton.addEventListener("click", function() {
    if (inputfield.value !== generatedPin.value) {
        attemptsLeft--;
        tryLeft.textContent = attemptsLeft;
    }
});

// disable submit button if attempts are exhausted
submitButton.addEventListener("click", function() {
    if (attemptsLeft <= 0) {
        submitButton.disabled = true;
        tryLeft.textContent = "No attempts left";
        submitButton.style.backgroundColor = "gray"; // Change button color to indicate it's disabled
    }
}
);
