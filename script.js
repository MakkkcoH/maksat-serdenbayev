function calculate() {
    const name = document.getElementById('userName').value;
    const monthlyPayment = parseFloat(document.getElementById('monthlyAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseInt(document.getElementById('years').value);

    const resultDiv = document.getElementById('result');

    // Проверка на пустые поля
    if (!name || isNaN(monthlyPayment) || isNaN(annualRate) || isNaN(years)) {
        resultDiv.style.display = 'block';
        resultDiv.innerText = "Please fill in all fields correctly.";
        return;
    }

    // Проверка на отрицательные числа
    if (monthlyPayment < 0 || annualRate < 0 || years < 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerText = "Values cannot be negative. Please enter positive numbers.";
        return;
    }

    const months = years * 12;
    const monthlyRate = (annualRate / 100) / 12;
    let total = 0;

    for (let i = 0; i < months; i++) {
        total = (total + monthlyPayment) * (1 + monthlyRate);
    }

    const formatted = total.toLocaleString('en-US', {
        maximumFractionDigits: 0
    });

    resultDiv.style.display = 'block';
    resultDiv.innerText = `${name}, the final amount of your deposit is $${formatted}`;
}