
const input = document.getElementById("binaryInput");
const binaryButton = document.getElementById("convertToBinary")
const decimalButton = document.getElementById("convertToDecimal")
const result = document.getElementById("binaryResult")
const error = document.getElementById("binaryError")

/* 
Button that converts binary to decimal.
*/
binaryButton.addEventListener("click", function() {

    result.textContent = "";
    error.textContent = "";

    const binary = input.value;

    // Check if input is only 1 and 0
    if (!/^[01]+$/.test(binary)) {
        error.textContent = "Please enter a valid binary number (only 0s and 1s)";
        error.style.color = "red";
        return;
    }

    const decimal = parseInt(binary, 2);

    result.textContent = `${decimal}`;
    result.style.color = "#70c3ff";
});
/* 
Button that converts decimal to binary.
*/
decimalButton.addEventListener("click", function() {

    result.textContent = "";
    error.textContent = "";

    const decimal = input.value;

    // Check if input is a number
    if (!/^\d+$/.test(decimal)) {
        error.textContent = "Please enter a valid numbe";
        error.style.color = "red";
        return;
    }

    const binary = parseInt(decimal).toString(2);

    result.textContent = `${binary}`
    result.style.color = "#70c3ff";
})
