function validateSyntax() {
    let input = document.getElementById('petInput').value;

    let result = ''; 
// Validation code
    let regex = /^pet_[a-zA-Z0-9]+$/; // This tells the user in what format it should be.

    if (regex.test(input)) {
        result = 'Validation passed!'; // If its correct
    } else {
        result = 'Validation failed!'; // If its incorrect
    }

    document.getElementById('result').innerText = result;
}



