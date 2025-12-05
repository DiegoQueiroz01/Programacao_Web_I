// js/base.js
const btnJogar = document.querySelector(".button-enter");

btnJogar.addEventListener("click", () => {
  const nome = document.getElementById("create-usuario").value.trim();

  if (nome === "") {
    alert("Escolha um nome para iniciar a aventura!");
    return;
  }

  localStorage.setItem("jogador", nome);
  // redireciona para a página do jogo (mesma pasta)
  window.location.href = "game.html";
});