function clearInput(){
 
  let inputClearOne= document.getElementById('Number1').value ="";
  let Operation = document.getElementById('Operation').value = "Operator";
  let inputClearTwo= document.getElementById('Number2').value = "";
}

function calculate() {
  var first_input = parseFloat(document.getElementById("Number1").value);
  var second_input = parseFloat(document.getElementById("Number2").value);
  var operation = document.getElementById("Operation").value;

  if (isNaN(first_input) || isNaN(second_input)) {
    displayError("Please enter valid numbers for both inputs.");
    return;
}

 
  var result;
  if (operation === "Addition(+)") {
    result = first_input + second_input;
  } else if (operation === "Subtraction(-)") {
    result = first_input - second_input;
  } else if (operation === "Multiplication(*)") {
    result = first_input * second_input;
  } else if (operation === "Division(/)") {
    if (second_input === 0) {
      displayError("Cannot divide by zero.");
      return;
    }
    result = first_input / second_input;
  } else {
    displayError("Invalid operation selected.");
    return;
  }

  displayResult(result);
  
  const inputFillClear = clearInput();
 
}

function displayResult(result) {
  var resultDiv = document.getElementById("result");
  resultDiv.textContent = "Result: " + result;
  resultDiv.className = "result success";
}

function displayError(message) {
  var resultDiv = document.getElementById("result");
  resultDiv.textContent = message;
  resultDiv.className = "result danger";
}

document.getElementById("Number1").addEventListener("click", clearResult);
document.getElementById("Number2").addEventListener("click", clearResult);

function clearResult() {
    var resultDiv = document.getElementById("result");
    resultDiv.textContent ='';
    resultDiv.className = "none";
  
}

