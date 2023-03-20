const valores = document.querySelector('#form')

function maior () {
    const n1 = valores.querySelector('#n1').value
    const n2 = valores.querySelector('#n2').value
    const n3 = valores.querySelector('#n3').value
    let maior = n1

    if (maior < n2) {
        maior = n2
    } 

    if (maior < n3) {
        maior = n3
    }

    console.log(maior)
    window.alert(`O maior é ${maior}`)

}