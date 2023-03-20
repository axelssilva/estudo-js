function idadeCalc () {
    const form = document.querySelector('#form')
    const valor = form.querySelector('#idade').value

    console.log(valor)
    if (valor >= 18) {
        window.alert('Maior de idade!')
    } else {
        window.alert('Menor de idade')
    }
}