document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Подсчет ответов
  var answerCounts = {
    A: 0,
    B: 0,
    C: 0
  };

  // Получение выбранных ответов
  var selectedInputs = document.querySelectorAll("input[type='radio']:checked");
  for (var i = 0; i < selectedInputs.length; i++) {
    var selectedValue = selectedInputs[i].value;
    answerCounts[selectedValue]++;
  }

  // Определение области финансовой грамотности
  var maxCount = Math.max(answerCounts.A, answerCounts.B, answerCounts.C);
  var area = "";
  if (maxCount === answerCounts.A) {
    area = "Инвестиции и привлечение капитала";
  } else if (maxCount === answerCounts.B) {
    area = "Факторы, влияющие на кредитный рейтинг и кредитные показатели";
  } else {
    area = "Макроэкономические понятия и финансовое планирование";
  }

  // Отображение результатов
  var resultContainer = document.getElementById("result");
  resultContainer.style.display = "block";
  resultContainer.innerHTML = `
    <h2>Результаты тестирования</h2>
    <p>Вариант A: ${answerCounts.A}</p>
    <p>Вариант B: ${answerCounts.B}</p>
    <p>Вариант C: ${answerCounts.C}</p>
    <p>Область финансовой грамотности: ${area}</p>
  `;
});
