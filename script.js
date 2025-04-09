
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
        error.textContent = "Please enter a valid number";
        error.style.color = "red";
        return;
    }

    const binary = parseInt(decimal).toString(2);

    result.textContent = `${binary}`
    result.style.color = "#70c3ff";
})

const randomNumberDisplay = document.getElementById("randomNumber")
let currentNumber = 0;

/*
Function that generates a random number between 1-100
*/
function generateRandomNumber() {
    currentNumber = Math.floor(Math.random()*100) + 1;
    randomNumberDisplay.textContent = currentNumber;
}

const numberInput = document.getElementById("numberInput")
const numberResult = document.getElementById("numberResult")
const numberError = document.getElementById("numberError")
const checkNumberButton = document.getElementById("checkNumber")

/*
Button that checks if input is correct
*/
checkNumberButton.addEventListener("click", function() {

    numberError.textContent = "";
    numberResult.textContent = "";

    const number = numberInput.value;
    const amountBinary = Math.floor(Math.log2(currentNumber)) + 1;


    // Check if input is a number
    if (!/^\d+$/.test(number)) {
        numberError.textContent = "Please enter a valid number";
        numberError.style.color = "red";
        return;
    }

    if (parseInt(number) === amountBinary) {
        numberResult.textContent = "Correct!"
        numberResult.style.color = "#70c3ff";
    } else {
        numberError.textContent = `Your guess is too ${parseInt(number) > amountBinary ? "high" : "low"}`;
        numberError.style.color = "red"
    }
});

generateRandomNumber();