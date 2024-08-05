function generateTable() {
    // Get input values using prompt
    const x = parseInt(prompt('Enter the first number (x):'));
    const y = parseInt(prompt('Enter the second number (y):'));
    const maxI = 50;

    // Check if inputs are valid
    if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
        alert('Please enter valid positive numbers for x and y.');
        return;
    }

    // Generate table
    let resultDiv = document.getElementById('result');
    let tableHtml = '<table><thead><tr><th>i</th><th>x</th><th>y</th><th>Result</th></tr></thead><tbody>';

    for (let i = 1; i <= maxI; i++) {
        let result = x * y * i;
        tableHtml += `<tr><td>${i}</td><td>${x}</td><td>${y}</td><td>${result}</td></tr>`;
    }

    tableHtml += '</tbody></table>';
    resultDiv.innerHTML = tableHtml;

    // Alert the user that the table has been generated
    alert(`Multiplication table generated for x = ${x} and y = ${y} up to 50.`);
}