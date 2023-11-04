let iniciaSesion = document.querySelector("#logIn");
let form = document.querySelector("#form");
let principalContainer = document.querySelector("#principal-container");
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const quitar = document.querySelector("#btn-home");
const btnNew = document.querySelector("#btn-new");
const products = document.querySelector("#btn-products");

iniciaSesion.addEventListener("click", () => {
    form.style.display = "block";
    principalContainer.className = "difuminado"
});

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

quitar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

btnNew.addEventListener("click", () => {
    nav.classList.remove("visible");
})

products.addEventListener("click", () => {
    nav.classList.remove("visible");
})
