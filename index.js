let iniciaSesion = document.querySelector("#logIn")
let form = document.querySelector("#form")
let principalContainer = document.querySelector("#principal-container")

iniciaSesion.addEventListener("click", () => {
    form.style.display = "block";
    principalContainer.className = "difuminado"
});