const convertBtn = document.getElementById("convertButton");

async function convertCurrency() {
    const inpCurrency = document.getElementById("inputCurrency").value;
    const outAmount = document.getElementById("output").value;
    const outCurrency = document.getElementById("outputCurrency").value;
    if (outAmount) {
        return "Don't enter output amount!";
    }
    if (inpCurrency === outCurrency) {
        document.getElementById("output").value = inpAmount;
    } else {
        const rate = await fetch(`https://api.exchangerate-api.com/v4/latest/${inpCurrency}`)
        const data = await rate.json();
        return data.rates[outCurrency];
    }
}
convertBtn.addEventListener('click', async (e) => {
    const inpAmount = Number(document.getElementById("input").value);
    console.log(inpAmount);
    const result = await convertCurrency();
    console.log(result);
    console.log(result * inpAmount);
    document.getElementById('output').value = result * inpAmount;
})