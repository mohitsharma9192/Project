const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// bmi calculator 
// Function to calculate BMI
function calculateBMI(heightCm, weightKg) {
    var heightM = heightCm / 100;
    var bmi = weightKg / (heightM * heightM);
    return bmi.toFixed(2);
}

// Function to suggest fitness goals based on BMI
function suggestFitnessGoals(bmi) {
    var message = "";
    if (bmi < 18.5) {
        message = "You are underweight. Try to gain some weight through a balanced diet and strength training exercises. 💪";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = "You have a normal weight. Keep up the good work with regular exercise and a healthy diet. 🥗🏋️‍♂️";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        message = "You are overweight. Focus on losing weight through a combination of cardio exercises and portion control. 🏃‍♂️🥦";
    } else {
        message = "You are obese. Consult with a healthcare professional to create a weight loss plan tailored to your needs. 🩺";
    }
    return message;
}

// Event listener for form submission
document.getElementById("calculate-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var height = parseFloat(document.getElementById("calculate-cm").value);
    var weight = parseFloat(document.getElementById("calculate-kg").value);
    if (!isNaN(height) && !isNaN(weight)) {
        var bmi = calculateBMI(height, weight);
        document.getElementById("calculate-message").innerText = "Your BMI is: " + bmi;
        var fitnessMessage = suggestFitnessGoals(bmi);
        document.getElementById("fitness-goals-message").innerText = fitnessMessage;
    } else {
        document.getElementById("calculate-message").innerText = "Please enter valid numbers for height and weight.";
    }
});

// function for bottom to up 
// Get the button
var backButton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backButton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}