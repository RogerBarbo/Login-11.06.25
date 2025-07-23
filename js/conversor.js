function converterMoeda() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultado = document.getElementById("resultado");

    if (!amount || !fromCurrency || !toCurrency || amount <= 0) {
      resultado.textContent = "Por favor, insira valores válidos";
      resultado.className = "ERRO";
      return;
    }

    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.rates || !data.rates[toCurrency]) {
          resultado.textContent = "Taxa de câmbio não disponível";
          resultado.className = "ERRO";
          return;
        }

        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultado.textContent = `Valor convertido: ${convertedAmount} ${toCurrency}`;
        resultado.className = "SUCESSO";
      })
      .catch(error => {
        console.error("Erro ao buscar a taxa de câmbio", error);
        resultado.textContent = "Erro ao buscar a taxa de câmbio";
        resultado.className = "ERRO";
      });
  }