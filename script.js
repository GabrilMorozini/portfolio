const contato = document.getElementById("contato");
const conteudoPrincipal = document.getElementsByClassName("conteudoPrincipal");
const btnProjetos = document.getElementById("btnProjetos");
const proj = document.getElementsByClassName("proj");
const projetos = document.getElementsByClassName("projetos");
const header = document.getElementsByTagName("header");
const footer = document.getElementsByTagName("footer");

//TEXTO ICONES CONTATO
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


// DIV PROJETOS
btnProjetos.addEventListener("click", aparecerDivProj);

function aparecerDivProj(){
    proj[0].style.display = "block";
    setTimeout(()=>{
        proj[0].style.position = "relative";
        conteudoPrincipal[0].style.display = "none";
        projetos[0].style.display = "grid";
        header[0].style.display = "none";
        footer[0].style.display = "none";
        setTimeout(()=>{
            header[0].style.display = "flex";
            footer[0].style.display = "grid";
        }, 20)
    }, 1000);    
}