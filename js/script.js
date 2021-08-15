addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("main-menu-toggle")
    const navMenu = document.getElementById("nav") // VARIABLE en la que se ALMACENA el NAVEGADOR PRINCIPAL.
    const menu = document.getElementById("menu") // VARIABLE en la que se ALMACENA el MENU dentro del NAVEGADOR.
    const buttons = document.querySelectorAll("button,.button") // VARIABLE en la que se ALMACENAN TODOS los BOTONES.

    // Cada vez que se haga CLICK sobre UNO de los ITEMS dentro del MENU, ESTE se OCULTARA.
    const menuItems = menu.querySelectorAll("li")
    if (menuItems){
        for(let item of menuItems){
            item.addEventListener("click", () => {
                if (navMenu.classList.contains("show")){
                    navMenu.classList.toggle("show")
                }
            })
        }
    }

    const smallBp = matchMedia("(max-width: 500px)")
    const quitHover = (breakpoint,component,list) => {
        if (breakpoint.matches){
            for (let item of list){
                if (item.classList.contains(`${component}-hover`))
                {
                    item.classList.toggle(`${component}-hover`)
                    item.classList.toggle(`${component}-active`)
                }
            }
        }
        else
        {
            for (let item of list){
                if (item.classList.contains(`${component}-hover`) == false)
                {
                    item.classList.toggle(`${component}-hover`)
                    item.classList.toggle(`${component}-active`)
                }
            }
        }
    }
    /* En DISPOSITIVOS CHICOS, le quito a los ELEMENTOS pertenecientes a la VARIABLE "menu" y "buttons", la PSEUDOCLASE "hover" y
    le agrego la PSEUDOCLASE "active". */
    quitHover(smallBp,"menu",menuItems)
    quitHover(smallBp, "button", buttons)

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
        if (mediaBp){
            hideMenu()
        }
        quitHover(smallBp,"menu",menuItems)
        quitHover(smallBp, "button", buttons)
    })
    
    if (menuButton){
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show")
        })
    }
})