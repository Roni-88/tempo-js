function carregar () {
var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date ()
var hora = data.getHours ()
var fundo = document.getElementById ('fundo')

msg.innerHTML = `<h3>Agora são ${hora} horas.</h3>`

if (hora >= 0 && hora < 12) {
    msg.innerHTML += `Bom dia!`
    img.src = 'src/imagens/amanhecer.jpg'
    fundo.style.backgroundColor = 'rgb(147, 206, 243)'
    fundo.style.color = 'rgb(22, 22, 192)'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML += `Boa tarde!`
    img.src = 'src/imagens/entardecer.jpg'
    fundo.style.backgroundColor = 'rgb(234, 125, 125)'
    fundo.style.color = 'rgb(225, 234, 243)'
} else {
    msg.innerHTML += `Boa noite!`
    img.src = 'src/imagens/anoitecer.jpg'
    fundo.style.backgroundColor = 'rgb(67, 62, 62)'
    fundo.style.color = 'rgb(225, 234, 243)'
}}
