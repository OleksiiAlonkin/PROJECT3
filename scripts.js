
// const value = prompt("Назва товару").toLowerCase();
// let cost;
// switch(value) {
//     case "яблоко":
//         cost = 10;
//         alert(`${value} коштує ${cost} гривень`);
//         break;
//         case "грушка":
//             cost = 200;
//             alert(`${value} коштує ${cost} гривень`);
//             break;
//             case "динька":
//         cost = 330;
//         alert( `${value} коштує ${cost} гривень`);
//         break;
//         default: 
//         alert(`Товар ${value} відсутній`);
// }
// let a = "Hello JS"
// alert(a);
// const resultEl = document.getElementById('result')
// console.log(resultEl.textContent)

// Находим элемент для отображения результата
const resultElement = document.getElementById("result");

// Инициализируем переменные
let currentInput = ""; // Текущий ввод
let operation = "";    // Операция
let result = "";       // Результат

// Функция для обновления дисплея
function updateDisplay(value) {
  resultElement.textContent = value;
}

// Функция для обработки нажатия кнопок
function handleButtonClick(value) {
  if (!isNaN(value) || value === ".") {
    // Если это число или запятая
    currentInput += value;
    updateDisplay(currentInput);
  } else if (["+", "-", "*", "/"].includes(value)) {
    // Если это оператор
    if (currentInput !== "") {
      result = currentInput;
    }
    operation = value;
    currentInput = "";
  } else if (value === "=") {
    // Если это равно
    if (result !== "" && currentInput !== "" && operation !== "") {
      result = eval(`${result}${operation}${currentInput}`);
      updateDisplay(result);
      currentInput = "";
      operation = "";
    }
  } else if (value === "X") {
    // Если это сброс
    currentInput = "";
    operation = "";
    result = "";
    updateDisplay("");
  }
}

// Добавляем обработчики событий для кнопок
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    handleButtonClick(value);
  });
});