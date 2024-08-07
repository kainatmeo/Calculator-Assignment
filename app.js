function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function caculate() {
    let display = document.getElementById('display');
    try {
        // Evaluate the expression and update the display
        display.value = eval(display.value);
    } catch (e) {
        // If there's an error (e.g., invalid expression), display an error message
        display.value = 'Error';
    }
}