function convertCurrency() {
    const apiKey = '1e87051d855a3456cd2b1f25'; // Replace with your actual API key
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            if (exchangeRate) {
                const convertedAmount = (amount * exchangeRate).toFixed(2);
                document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                alert('Invalid currency selection. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            alert('Error fetching exchange rates. Please try again.');
        });
}
