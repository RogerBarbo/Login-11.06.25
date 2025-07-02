function calcularIMC() 
{
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const mensagem = document.getElementById("mensagem");

  if (!peso || !alturaCm || alturaCm <= 0)
  {
    mensagem.textContent = "Por favor, insira valores válidos.";
    mensagem.className = "erro";
    return;
  }

  const altura = alturaCm / 100;
  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) 
  {
    classificacao = "Abaixo do peso";
  } 

  else if (imc < 24.9)
  {
    classificacao = "Peso normal";
  } 

  else if (imc < 29.9) 
  {
    classificacao = "Sobrepeso";
  }

  else if (imc < 34.9)
  {
    classificacao = "Obesidade grau 1";
  } 

  else if (imc < 39.9) 
  {
    classificacao = "Obesidade grau 2";
  } 

  else
  {
    classificacao = "Obesidade grau 3 (mórbida)";
  }

  mensagem.textContent = `Seu IMC é: ${imc.toFixed(2)} - ${classificacao}`;
  mensagem.className = "sucesso";
}