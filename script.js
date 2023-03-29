const contato = document.getElementById("contato");
const conteudo = document.getElementsByClassName("conteudo");
const conteudoPrincipal = document.getElementsByClassName("conteudoPrincipal");
const mostrarProj = document.getElementById("mostrarProj");
const voltarPrincipal = document.getElementById("voltarPrincipal");
const proj = document.getElementById("proj");
const projetos = document.getElementsByClassName("projetos");
const header = document.getElementsByTagName("header");
const footer = document.getElementsByTagName("footer");

//TEXTO ICONES CONTATO
contato.addEventListener("mouseover", textIcon);
contato.addEventListener("mouseout", limpaTextIcon);

var nomeIcon = document.getElementById("nomeIcon");

function textIcon(e) {
    if (e.target.id == "email") {
        nomeIcon.innerText = "Email";
        contato.style.borderBottomColor = "#2fff2f";
    } else if (e.target.id == "github") {
        nomeIcon.innerText = "GitHub";
        contato.style.borderBottomColor = "#753cfc" ;
    } else if (e.target.id == "linkedin") {
        nomeIcon.innerText = "Linkedin";
        contato.style.borderBottomColor = "#00a6ff";
    }
}

function limpaTextIcon() {
    nomeIcon.innerText = "";
    contato.style.borderBottomColor = "#fff";
}

// DIV PROJETOS
mostrarProj.addEventListener("click", aparecerDivProj);

function aparecerDivProj(){
    proj.style.display = "block";
    setTimeout(()=>{
        conteudoPrincipal[0].style.display = "none";
        proj.style.position = "relative";
        projetos[0].style.display = "grid";
        voltarPrincipal.style.display = "inline-block";
        aparecerHeaderFooter(20);
        proj.classList.remove('proj'); 
    }, 1500);   
}

voltarPrincipal.addEventListener("click", desaparecerDivProj);

function desaparecerDivProj(){   
    let divAnimada = document.createElement('div');
    let elementoPai = conteudo[0];
    elementoPai.appendChild(divAnimada);
    divAnimada.classList.add('posicaoDivAnimada');
    divAnimada.classList.add('animacaoVoltar');
    conteudo[0].classList.add('opacidadeAnimada');

    setTimeout(() =>{
    aparecerHeaderFooter(20);
    conteudo[0].classList.remove('opacidadeAnimada');
    proj.classList.add('proj');
    projetos[0].removeAttribute('style');
    voltarPrincipal.removeAttribute('style');
    proj.removeAttribute('style');
    conteudoPrincipal[0].style.display = "block";
    }, 1500);
}

function aparecerHeaderFooter(tempo){
    header[0].style.display = "none";
    footer[0].style.display = "none";
    setTimeout(()=>{
        header[0].style.display = "flex";
        footer[0].style.display = "grid";
    }, tempo);
}