//Criar conta
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 50){
        alert("Preencha o campo com um e-mail válido.");
        return;
    }
})