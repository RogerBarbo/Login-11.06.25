function fazerLogin()
{
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (usuario === "" || senha === "") 
  {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }

  if (usuario === "batata" && senha === "12345") 
  {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.className = "sucesso";
    window.location.href = "imc.html"
  } 

  else 
  {
    mensagem.textContent = "Usuário ou senha inválidos.";
    mensagem.className = "erro";
  }
}