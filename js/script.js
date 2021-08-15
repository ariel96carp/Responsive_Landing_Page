addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("main-menu-toggle")
    const navMenu = document.getElementById("nav")
    const menu = document.getElementById("menu")
    const menuItems = menu.querySelectorAll("li")
    for(let item of menuItems){
        item.addEventListener("click", () => {
            if (navMenu.classList.contains("show")){
                navMenu.classList.toggle("show")
            }
        })
    }

    /* En DISPOSITIVOS CHICOS, le quito al ELEMENTO perteneciente a la VARIABLE "menu", la CLASE "menu-hover", y le AGREGO 
    la CLASE "menu-active. */
    const smallBp = matchMedia("(max-width: 500px)")
    const quitHover = () => {
        if (smallBp.matches){
            for (let item of menuItems){
                if (item.classList.contains("menu-hover"))
                {
                    item.classList.toggle("menu-hover")
                    item.classList.toggle("menu-active")
                }
            }
        }
        else
        {
            for (let item of menuItems){
                if (item.classList.contains("menu-hover") == false)
                {
                    item.classList.toggle("menu-hover")
                    item.classList.toggle("menu-active")
                }
            }
        }
    }
    quitHover()

    /* Si en el "breakpoint" indicado en la VARIABLE "mediaBp", el ELEMENTO perteneciente a la VARIABLE "navMenu" 
    contiene la CLASE "show", la ELIMINO. */
    const mediaBp = matchMedia("(min-width: 640px)")
    const hideMenu = () => {
        if (mediaBp.matches)
        {
            if (navMenu.classList.contains("show"))
            {
                navMenu.classList.toggle("show")
            }
        }
    }

    // La FUNCIONES "hideMenu" y "quitHover" van a EJECUTARSE cada vez que se REDIMENSIONE la PANTALLA.
    window.addEventListener("resize", () => {
        hideMenu()
        quitHover()
    })
    
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show")
    })
})