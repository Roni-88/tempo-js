function carregar () {
var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date ()
var hora = data.getHours ()

msg.innerHTML = `<h3>Agora são ${hora} horas.</h3>`

if (hora >= 0 && hora < 12) {
    msg.innerHTML += `Bom dia!`
    img.src = 'src/imagens/amanhecer.jpg'
} else if (hora >=12 && hora < 18) {
    msg.innerHTML += `Boa tarde!`
    img.src = 'src/imagens/entardecer.jpg'
} else {
    msg.innerHTML += `Boa noite!`
    img.src = 'src/imagens/anoitecer.jpg'
}}
