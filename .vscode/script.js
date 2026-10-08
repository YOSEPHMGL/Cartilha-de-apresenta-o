function  toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
   

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/assets/Avatar-light.png')
    } else {
        img.setAttribute("src", "./assets/assets/avatar.png")
    }

      //  html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}

    //pegar a tag img e substituir a imagem

    
}