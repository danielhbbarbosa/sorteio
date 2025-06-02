const button = document.querySelector(".button-sortear")


function sorteio(cor, tamanho) {
    const min = parseInt(document.querySelector("#min-sorteio").value)
    const max = parseInt(document.querySelector("#max-sorteio").value)
    const result = document.querySelector(".result")
    const error = document.querySelector(".error")

    const divImg = document.querySelector(".img")
    const circle = document.querySelector(".circle")


    const randomNumber = min + Math.floor(Math.random() * (max - min + 1))


    if (isNaN(min) || isNaN(max) || min > max) {
        divImg.style.display = "flex"

        circle.style.display = "none"
        circle.style.backgroundColor = "#000000"
        circle.style.width = "auto"
        circle.style.height = "auto"
        circle.style.borderRadius = "0px"
        circle.style.padding = "0px"

        error.style.display = "block"

        error.innerHTML = "Por favor, insira números válidos e garanta que o mínimo seja menor ou igual ao máximo."
    }

    else {
        divImg.style.display = "none"

        circle.style.display = "flex"
        circle.style.backgroundColor = "#005f73"
        circle.style.width = "200px"
        circle.style.height = "200px"
        circle.style.borderRadius = "50%"
        circle.style.padding = "20px"
        circle.style.marginBottom = "45px"

        error.style.display = "none"

        result.innerHTML = new Intl.NumberFormat("pt-BR").format(randomNumber)

    }





}
