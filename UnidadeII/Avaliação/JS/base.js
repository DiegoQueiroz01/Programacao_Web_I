const btnJogar = document.querySelector(".button-enter"); //faz o botão de jogar funcionar.

btnJogar.addEventListener("click", () => { //abre o jogo quando clicado
    const nome = document.getElementById("create-usuario").value.trim();
    if(nome === ""){
        alert("Escolha um nome para iniciar a aventura!");
        return;
    }

    localStorage.setItem("jogador", nome); // Salva o nome do jogador.

    window.location.href = "game.html"; //Move para o jogo.
});