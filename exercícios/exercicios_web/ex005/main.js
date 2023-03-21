const form = document.querySelector('#form')
const n1 = form.querySelector('#n1')
const n2 = form.querySelector('#n2')
const n3 = form.querySelector('#n3')
const res = document.querySelector('#resposta')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const numero1 = Number(n1.value)
    const numero2 = Number(n2.value)
    const numero3 = Number(n2.value)

    const media = (numero1 + numero2 + numero3)/3

    let p = document.createElement('p')

    p.innerText = media.toFixed(2)

    res.appendChild(p)
})
   


