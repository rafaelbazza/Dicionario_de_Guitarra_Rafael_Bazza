var notascorda6  = document.getElementsByClassName("a 6") 

var notascorda6array = []

for(i=0; i<notascorda6.length; i++){

notascorda6array.push(notascorda6[i])

} // puxa as notas 


var notasnaturais = document.getElementsByClassName("a 6 n") 

var notasnaturaisarray=[]

for (i=0; i<notasnaturais.length; i++){
         
    notasnaturaisarray.push(notasnaturais[i])



} // puxa só naturais 

var notasbemol = document.getElementsByClassName("a 6 b")

var notasbemolarray=[]

for (i=0; i<notasbemol.length; i++){
   notasbemolarray.push(notasbemol[i])

} // puxa só bemol 

var notassustenido = document.getElementsByClassName("a 6 s")

var notassustenidoarray=[]

for (i=0; i<notassustenido.length; i++){
   notassustenidoarray.push(notassustenido[i])

} // puxa só sustenido

console.log(notassustenidoarray)











