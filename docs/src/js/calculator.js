const display = document.getElementById('display')

function addInputToDisplay(input) {
  const displayValue = display.value.trim(); // Elimina espacios en blanco al principio y al final
  const lastChar = displayValue.slice(-1); // Obtiene el último carácter

  // Si el último carácter es un operador matemático y el nuevo input también lo es,
  // reemplaza el último carácter con el nuevo input
  if (isOperator(lastChar) && isOperator(input)) {
    display.value = displayValue.slice(0, -1) + input;
  } else {
    display.value = displayValue + input;
  }
}

// Función para verificar si un carácter es un operador matemático
function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function calculate() {
  if (display.value === '') return

  const result = eval(display.value)
  display.value = result
}

function resetDisplayValue() {
  display.value = ""
}

function removeLastInput() {
  display.value = display.value.slice(0, -1)
}
