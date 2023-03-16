function buscar() {
   let input = document.getElementById('search').value
   input = input.toLowerCase()
   let elemento = document.querySelectorAll('.magia')
   let titulo = document.querySelectorAll('.title')
   for (posição = 0; posição < elemento.length; posição ++) { 
       if (!titulo[posição].innerHTML.toLowerCase().includes(input)) {
           elemento[posição].style.display="none"
       }
       else {
           elemento[posição].style.display="block"                
       }
   }
}
