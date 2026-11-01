const menuBotao = document.getElementById("menu-botao");
const menu = document.getElementById("menu");

if (menuBotao && menu) {
  menuBotao.addEventListener("click", () => {
    menu.classList.toggle("aberto");
  });
}

const paginaAtual = window.location.pathname.split("/").pop();

if (menu) {
  menu.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href") === paginaAtual) {
      link.classList.add("ativo");
    }
  });
}

const aulasConcluidas = JSON.parse(localStorage.getItem("aulasConcluidas") || "[]");

const paginaAula = paginaAtual.startsWith("modulo-");

if (paginaAula) {
  const moduloNumero = paginaAtual.replace("modulo-", "").replace(".html", "");

  if (!aulasConcluidas.includes(moduloNumero)) {
    aulasConcluidas.push(moduloNumero);
    localStorage.setItem("aulasConcluidas", JSON.stringify(aulasConcluidas));
  }
}
