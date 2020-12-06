const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
    const currencyOneValue = currencyElOne.value;
    const currencyTwoValue = currencyElTwo.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOneValue}`)
    .then(response => response.json())
    .then(data => {

        const rates = data.rates[currencyTwoValue];
        amountTwo.value = (amountOne.value * rates).toFixed(2)
        rate.innerText = `1 ${currencyOneValue} = ${rates} ${currencyTwoValue}`
    })
}

// Event Listeners
currencyElOne.addEventListener('change', calculate);
currencyElTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
})

calculate()