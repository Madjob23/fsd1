const convertBtn = document.getElementById("convertButton");

function displayError(error) {
    const errorBox = document.getElementById("error");
    errorBox.style.display = "block";
    errorBox.textContent += `\n${error}`;
}

async function convertCurrency(inpAmount, inpCurrency, outCurrency) {
        const rawData = await fetch(`https://api.exchangerate-api.com/v4/latest/${inpCurrency}`)
        const data = await rawData.json();
        const rate = await data.rates[outCurrency];
        return rate * inpAmount;
}

convertBtn.addEventListener('click', async (e) => {
    const inpAmount = Number(document.getElementById("input").value);
    const inpCurrency = document.getElementById("inputCurrency").value;
    const outAmount = document.getElementById("output").value;
    const outCurrency = document.getElementById("outputCurrency").value;
    if (typeof(inpAmount) != 'number') {
        displayError("Enter a valid number!");
        return;
    }
    if (outAmount) {
        displayError("Output field must be empty!");
        return;
    }
    if (inpCurrency.length() > 3 || outCurrency.length() > 3) {
        displayError("Select a currency from the dropdown!");
        return;
    }
    const convertedAmount = await convertCurrency(inpAmount);
    if (convertedAmount !== undefined) {
        document.getElementById('output').value = convertedAmount;
    }
})