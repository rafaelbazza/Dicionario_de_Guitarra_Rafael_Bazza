
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
var naturais = document.getElementsByClassName("n")
var notassustenido = document.getElementsByClassName('s')
var notasbemol = document.getElementsByClassName('b')
var dobemol = document.getElementsByClassName('C b')
var misustenido = document.getElementsByClassName('E s')
var mostranotasbemol =document.getElementById("escalacromaticacomacidentesembemol")
var mostranotassustenido =document.getElementById("escalacromaticacomacidentesemsustenido")


mostranotasbemol.addEventListener('click', function(){

    reset();

    for(a=0;a<naturais.length;a++){
      naturais[a].style.display="block"

    }

    for(a=0;a<notasbemol.length;a++){
       console.log(notasbemol[a].classList[3])

        notasbemol[a].style.display="block"

        if(notasbemol[a].classList[3]=="C"||notasbemol[a].classList[3]=="F"){
            notasbemol[a].style.display="none"
        }
  
      }
   

    

})

mostranotassustenido.addEventListener('click', function(){

reset();

for(a=0;a<naturais.length;a++){
    naturais[a].style.display="block"

  }

  for(a=0;a<notassustenido.length;a++){
     console.log(notassustenido[a].classList[3])

      notassustenido[a].style.display="block"

      if(notassustenido[a].classList[3]=="E"||notassustenido[a].classList[3]=="B"){
          notassustenido[a].style.display="none"
      }

    }


})
