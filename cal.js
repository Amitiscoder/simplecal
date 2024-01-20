function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('result').textContent = `Result: ${result}`;
}

function subtract() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = num1 - num2;
    document.getElementById('result').textContent = `Result: ${result}`;
}

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').textContent = result;
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    // Check if num2 is not zero to avoid division by zero
    if (num2 !== 0) {
        let result = num1 / num2;
        document.getElementById('result').textContent = `Result: ${result}`;
    } else {
        document.getElementById('result').textContent = "Cannot divide by zero";
    }
}
