function fazerLogin()
{
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  const usuarioSalvo = localStorage.getItem("emailCadastro");
  const senhaSalvo = localStorage.getItem("senhaCadastro");

  if (usuario === "" || senha === "") 
  {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }

  if (usuario === usuarioSalvo && senha === senhaSalvo) 
  {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.className = "sucesso";
     window.location.href = "odf.html";
  } 

  else 
  {
    mensagem.textContent = "Usuário ou senha inválidos.";
    mensagem.className = "erro";
  }
}