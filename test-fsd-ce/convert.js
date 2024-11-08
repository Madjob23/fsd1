const convertBtn = document.getElementById("convertButton");

function convertCurrency() {
    const inpAmount = +document.getElementById("input").value;
    const inpCurrency = document.getElementById("inputCurrency").value;
    const outAmount = document.getElementById("output").value;
    const outCurrency = document.getElementById("outputCurrency").value;
    if (outAmount) {
        return "Don't enter output amount!";
    }
    if (inpCurrency === outCurrency) {
        document.getElementById("output").value = inpAmount;
    }
    else if (inpAmount === "") {
        return "Enter input amount!";
    } else {
        const rate = fetch('https://api.exchangerate-api.com/v4/latest/USD')
        rate.then((res) => res.json()).then((data) => {
            const conversionRate = data.rates[outCurrency];
            console.log(conversionRate);
            console.log(inpAmount);
            const out = inpAmount * conversionRate;
            console.log(out);
            return out;
        })
    }
}
convertBtn.addEventListener('click', (e) => {
    const result = convertCurrency();
    document.getElementById('output').value = result;
})