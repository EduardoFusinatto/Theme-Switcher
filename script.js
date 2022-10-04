const sol = document.querySelector(".sol");
const lua = document.querySelector(".lua");
const body = document.querySelector("body");
lua.classList.add("ativo");
body.setAttribute("data-modo", "light");
sol.classList.remove("ativo");

function selecao() {
  if (this === sol) {
    sol.classList.add("ativo");
    body.setAttribute("data-modo", "dark");
    lua.classList.remove("ativo");
  } else {
    lua.classList.add("ativo");
    body.setAttribute("data-modo", "ligh");
    sol.classList.remove("ativo");
  }
}
sol.addEventListener("click", selecao);
lua.addEventListener("click", selecao);
