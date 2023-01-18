
/*classlist nomenclatura

a = notas
letra = cifra da nota
numero = corda 
n = naturais
b bemois 
s= sustenido
ra =região aguda
rg= região grave
*/ 

var notas = document.getElementsByClassName("a")
var notassustenido = document.getElementsByClassName('s')
var notasbemol = document.getElementsByClassName('b')
var dobemol = document.getElementsByClassName('C b')
var misustenido = document.getElementsByClassName('E s')
var mostranotasbemol =document.getElementById("escalacromaticacomacidentesembemol")
var mostranotassustenido =document.getElementById("escalacromaticacomacidentesemsustenido")


mostranotasbemol.addEventListener('click', function(){

   

    for ( i = 0; i<notas.length; i++){
              notas[i].style.display="block"
                   
}

    for (i = 0; i<notassustenido.length; i++){
       notassustenido[i].style.display="none"
     }
     
     
     for ( i=0; i<dobemol.length; i++){
     
        dobemol[i].style.display="none"
    }
    
    for (i = 0; i<misustenido.length; i++){
        misustenido[i].style.display="none"
      }



})

mostranotassustenido.addEventListener('click', function(){

    for (i = 0; i<notas.length; i++){

        notas[i].style.display="block"
                   
}

    for (i = 0; i<notasbemol.length; i++){

        notasbemol[i].style.display="none"
    
}
for ( i=0; i<dobemol.length; i++){
     
    dobemol[i].style.display="none"
}

for (i = 0; i<misustenido.length; i++){
    misustenido[i].style.display="none"
  }




})
