const formulario = document.querySelector("#form-contato");
const retorno = document.querySelector("#retorno-form");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  if (!nome) {
    retorno.textContent = "Por favor, informe seu nome.";
    return;
  }

  retorno.textContent = `Obrigado, ${nome}! Esta demonstração ainda não envia mensagens para um servidor.`;
  formulario.reset();
});
