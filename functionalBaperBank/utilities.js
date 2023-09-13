function getInputFiledValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFiledValueString = inputField.value;
  const inputFiledValue = parseFloat(inputFiledValueString);
  inputField.value = '';
  return inputFiledValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}