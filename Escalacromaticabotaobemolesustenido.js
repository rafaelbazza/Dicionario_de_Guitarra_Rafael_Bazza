
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

var notas = document.getElementsByClassName("a ")
var notassustenido = document.getElementsByClassName('s')
var notasbemol = document.getElementsByClassName('b')



var mostranotasbemol =document.getElementById("escalacromaticacomacidentesembemol")

mostranotasbemol.addEventListener('click', function(){

    for (i=0; i<notas.length; i++){

      var bug = i
        notas[i].style.display="block"
       if ( bug == 12 || bug == 35){notas[bug].style.display="none"}                  
}

    for (i=0; i<notassustenido.length; i++){

        notassustenido[i].style.display="none"
    


    }




})


var mostranotassustenido =document.getElementById("escalacromaticacomacidentesemsustenido")

mostranotassustenido.addEventListener('click', function(){

    for (i=0; i<notas.length; i++){

         

      var bug = i
        notas[i].style.display="block"
       if ( bug == 1 || bug == 34){notas[bug].style.display="none"}                  
}

    for (i=0; i<notasbemol.length; i++){

        notasbemol[i].style.display="none"
    


    }




})












