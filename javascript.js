// Generat pin

var generatPinFiled = document.querySelector("#generat-pin-input-file");
function generatPin() {
  var randomNumber = Math.random() * 10000;
  var stringGeneratPinNumber = Math.ceil(randomNumber).toString();

  if (stringGeneratPinNumber.length == 4) {
    generatPinFiled.value = stringGeneratPinNumber;
  }
  document.querySelector("#pin-match").style.display = "none";
  document.querySelector("#pin-no-match").style.display = "none";
}

// Number Input
var numberInputFile = document.querySelector("#number-input-file");
function numberHandle(num) {
  var numberInputFileNumber = numberInputFile.value;
  var finalNumberInputFile = numberInputFileNumber + num;
  numberInputFile.value = finalNumberInputFile;
}

// set Clear button "C"
function clearHandle() {
  numberInputFile.value = "";
}

// set Delete button "<"
function deleteLastNumber() {
  if (numberInputFile != "") {
    numberInputFile.value = numberInputFile.value.slice(0, -1);
  }
}

// set Submit Button

function submtiHandle() {
  var pinMatch = document.querySelector("#pin-match");
  var pinNoMatch = document.querySelector("#pin-no-match");

  var generatPinFiledNumber = parseInt(generatPinFiled.value);
  var numberInputFileNumber = parseInt(numberInputFile.value);

  if (generatPinFiled.value.length == 0 || numberInputFile.value.length == 0) {
    alert(" please check, Any input field is emtry");
  } else if (generatPinFiledNumber == numberInputFileNumber) {
    generatPinFiled.value = "";
    numberInputFile.value = "";
    pinMatch.style.display = "block";
    pinNoMatch.style.display = "none";
  } else {
    numberInputFile.value = "";
    pinNoMatch.style.display = "block";
  }
}
