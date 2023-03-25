var contato = document.getElementById("contato");
contato.addEventListener("mouseover", textIcon);
contato.addEventListener("mouseout", limpaTextIcon);

var nomeIcon = document.getElementById("nomeIcon")

function textIcon(e) {
    if (e.target.id == "email") {
        nomeIcon.innerText = "Email"
        contato.style.borderBottomColor = "#2fff2f"
    } else if (e.target.id == "github") {
        nomeIcon.innerText = "GitHub"
        contato.style.borderBottomColor = "#753cfc" 
    } else if (e.target.id == "linkedin") {
        nomeIcon.innerText = "Linkedin"
        contato.style.borderBottomColor = "#00a6ff"
    }
}

function limpaTextIcon() {
    nomeIcon.innerText = "";
    contato.style.borderBottomColor = "#fff"
}