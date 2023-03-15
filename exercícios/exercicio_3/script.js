function contar() {
    let ini = document.getElementById('inicio')
    let fi = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let resul = document.getElementById('res')
    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0 ) {
        window.alert('Preencha os dados')
    } else {
        resul.innerHTML = 'contando:'
        let i = Number(ini.value)
        let f = Number(fi.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resul.innerHTML += `${c} = `
            }
        } else {
            for (let c = i; c >= f; c-= p){
                resul.innerHTML += `${c} = `
            }
        }
        resul.innerHTML += 'fim'
    }
}

