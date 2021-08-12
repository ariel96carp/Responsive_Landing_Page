addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("main-menu-toggle")
    const navMenu = document.getElementById("nav")

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show")
    })
})