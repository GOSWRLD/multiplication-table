// Function to validate input values
function validateInput(principal, rate, time) {
    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a valid principal amount.");
        return false;
    }
    if (isNaN(rate) || rate <= 0) {
        alert("Please enter a valid interest rate.");
        return false;
    }
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid time period.");
        return false;
    }
    return true;
}

// Function to calculate Simple Interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Function to calculate Compound Interest
function calculateCompoundInterest(principal, rate, time) {
    return principal * (Math.pow((1 + rate / 100), time)) - principal;
}

// Main function to calculate loan based on user input
function calculateLoan() {
    // Retrieve input values
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);
    let interestType = document.getElementById('interestType').value;

    // Validate inputs
    if (!validateInput(principal, rate, time)) {
        return; // Stop execution if validation fails
    }

    let interest; // Declare variable to store calculated interest

    // Calculate interest based on selected interest type
    if (interestType === 'simple') {
        interest = calculateSimpleInterest(principal, rate, time);
    } else {
        interest = calculateCompoundInterest(principal, rate, time);
    }

    // Display the result using an alert
    let totalAmount = principal + interest;
    alert(`The total amount to be paid is: $${totalAmount.toFixed(2)}`);
    
    // Display the result on the web page
    document.getElementById('result').innerHTML = `Total Interest: $${interest.toFixed(2)}<br>Total Amount: $${totalAmount.toFixed(2)}`;
}


