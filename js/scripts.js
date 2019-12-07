window.onload = () => {
    // On va chercher la balise link
    let themeLink = document.getElementById("theme-link")

    // Y a-t-il un thème stocké dans le localStorage
    if(localStorage.theme != null){
        themeLink.href = `css/style_${localStorage.theme}.css`
    }else{
        themeLink.href = "css/style_clair.css"
        localStorage.theme = "clair"
    }

    // Ecouteur d'évènement "click" sur la span
    document.getElementById("theme").addEventListener("click", function(){
        if (localStorage.theme == "clair") {
            localStorage.theme = "sombre"
            this.innerText = "Thème clair"
        } else {
            localStorage.theme = "clair"
            this.innerText = "Thème sombre"
        }
        themeLink.href = `css/style_${localStorage.theme}.css`
    })
}