function buscar() {
   let input = document.getElementById('search').value
   input = input.toLowerCase();
   let elemento = document.querySelectorAll('.magia');
   for (posição = 0; posição < elemento.length; posição++) { 
       if (!elemento[posição].innerHTML.toLowerCase().includes(input)) {
           elemento[posição].style.display="none";
       }
       else {
           elemento[posição].style.display="block";                 
       }
   }
}