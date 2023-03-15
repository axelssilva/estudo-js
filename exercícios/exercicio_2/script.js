function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'ciança_h.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_h.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_h.png')
            } else {
                img.setAttribute('src', 'idoso_h.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança_m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_m.png')
            } else {
                img.setAttribute('src', 'idoso_m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}