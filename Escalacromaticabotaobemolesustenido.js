
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

var notascorda6  = document.getElementsByClassName(" a") 


var notascorda6array = []

for(i=0; i<notascorda6.length; i++){

notascorda6array.push(notascorda6[i])

} // puxa as notas 


var notasnaturais = document.getElementsByClassName(" n 6") 

var notasnaturaisarray=[]

for (i=0; i<notasnaturais.length; i++){
         
    notasnaturaisarray.push(notasnaturais[i])



} // puxa só naturais 

var notasbemol = document.getElementsByClassName(" b 6")

var notasbemolarray=[]

for (i=0; i<notasbemol.length; i++){
   notasbemolarray.push(notasbemol[i])

  

} // puxa só bemol 

var notassustenido = document.getElementsByClassName(" s 6")

var notassustenidoarray=[]

for (i=0; i<notassustenido.length; i++){
   notassustenidoarray.push(notassustenido[i])

} // puxa só sustenido





document.getElementById("escalacromaticacomacidentesembemol").addEventListener("click",  function(){


for(i=0; i<notasnaturaisarray.length; i++){
     
    if(notasnaturaisarray[i].style.display="none"){notasnaturaisarray[i].style.display="block"}


}

for(i=0; i<notasbemolarray.length; i++){
     
    if(notasbemolarray[i].style.display="none"){notasbemolarray[i].style.display="block"}
     
        
        if(notasbemolarray[3].style.display="block"){notasbemolarray[3].style.display="none"}
       
    


}

for(i=0; i<notassustenidoarray.length; i++){
         
    if(notassustenidoarray[i].style.display="block"){notassustenidoarray[i].style.display="none"}
     
    
}



})

document.getElementById("escalacromaticacomacidentesemsustenido").addEventListener("click",  function(){


    for(i=0; i<notasnaturaisarray.length; i++){
         
        if(notasnaturaisarray[i].style.display="none"){notasnaturaisarray[i].style.display="block"}
    
    
    }
    
    for(i=0; i<notassustenidoarray.length; i++){
         
        if(notassustenidoarray[i].style.display="none"){notassustenidoarray[i].style.display="block"}
         
        if(notassustenidoarray[0].style.display="block"){notassustenidoarray[0].style.display="none"}
           
       
    }

    for(i=0; i<notasbemolarray.length; i++){
     
        if(notasbemolarray[i].style.display="block"){notasbemolarray[i].style.display="none"}
         
            
    
    }
    
    
    
    })











