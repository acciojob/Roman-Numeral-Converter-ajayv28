function convertToRoman(num) {
    const obj = [
          ['M', 1000],
        ['CM', 900], // 900
        ['D', 500],
        ['CD', 400], // 400
        ['C', 100],
        ['XC', 90],  // 90
        ['L', 50],
        ['XL', 40],  // 40
        ['X', 10],
        ['IX', 9],   // 9
        ['V', 5],
        ['IV', 4],   // 4
        ['I', 1]
    ];

    let str = "";

    // Loop through each symbol-value pair
    for (let i = 0; i < obj.length; i++) {
        const [symbol, val] = obj[i];
        // While the current number is greater than or equal to the value
        while (num >= val) {
            str += symbol;  // Append the symbol to the result
            num -= val;     // Subtract the value from the number
        }
    }
    return str; // Return the final Roman numeral string
}

// Event listener for the convert button
document.getElementById('convertButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value; // Get the input value
    const result = convertToRoman(Number(numberInput)); // Convert the input value
    document.getElementById('result').textContent = result; // Display the result
});

// You can test your code by running the above function and printing it to console
console.log(convertToRoman(36)); // Should print "XXXVI" to the console

// Do not edit below this line
module.exports = convertToRoman;
