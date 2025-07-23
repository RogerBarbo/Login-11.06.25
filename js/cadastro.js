function CadastrarUsuario()
{
    const cidade = document.getElementById("cidade").value;
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    localStorage.setItem("emailCadastro", email);
    localStorage.setItem("senhaCadastro", senha);

    console.log(usuario);

  if (usuario === "" || cidade === "" || email === "" || senha === "") 
  {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }
  else 
  {
    mensagem.textContent = "Conta criada com sucesso";
    mensagem.className = "sucesso";
    
    window.location.href = "login.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("./data/cidades-brasileiras.json")
      .then(response => response.json())
      .then(data => {
        const datalist = document.getElementById("lista-cidades");
        data.forEach(cidade => {
          const option = document.createElement("option");
          option.value = cidade.nome;
          datalist.appendChild(option);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar cidades:", error);
      });
    });
   