

var botaobraçotodoC = document.getElementById("diatonicac") 
var botaobraçotodoG = document.getElementById("diatonicag")
var botaobraçotodoD = document.getElementById("diatonicad")
var botaobraçotodoA = document.getElementById("diatonicaa")
var botaobraçotodoE = document.getElementById("diatonicae")
var botaobraçotodoB = document.getElementById("diatonicab")
var botaobraçotodoFs = document.getElementById("diatonicafs")
var botaobraçotodoF = document.getElementById("diatonicaf")
var botaobraçotodoBb = document.getElementById("diatonicabb")
var botaobraçotodoEb = document.getElementById("diatonicaeb")
var botaobraçotodoAb = document.getElementById("diatonicaab")
var botaobraçotodoDb = document.getElementById("diatonicadb")
var botaobraçotodoGb= document.getElementById("diatonicagb")





var diatonica = [];

var distanciasdiatonica ="TTSTTTS"

var stringcromatica = "C n,C s,D b,D n,D s,E b,E n,E s,F n,F s,G b,G n,G s,A b,A n,A s,B b,B n,C b";

var cromatica = stringcromatica.split(",");


console.log(cromatica)



var escaladesejadaArray =[];




for(i=0; i<distanciasdiatonica.length; i++){
   diatonica.push(distanciasdiatonica[i])

}


function criaescala(parametro){

let j = parametro
var escaladesejada = [cromatica[j]];
let i

//for responsavel por inserir a cromatica para cada tonalidade a depender do parametro 
for(i=0; i<diatonica.length; i++){


//condicional do tom 
 
if(diatonica[i]=="T"){

  if(j<16){j=j+3}
                  else{

                        if(j==16){j=0}
                                      else{
                                            if(j==17){j=1}
                                                           else{
                                                                if(j==18){j=2}
                                                           }

    }
 }
}

//condicional do semitom 

if(diatonica[i]=="S"){

 if(j<17){j=j+2;}
                 else{
                      if(j==17){j=0}
                 }

                }  
               
           
            //cria string da escala chamada no parametro na variavel escaladesejada 
            //dentro do escopo do for da diatonica 

              escaladesejada = escaladesejada + "," +  cromatica[j].split();

             
             

                }

             //transforma a estring gerada no ultimo for, em array.
             escaladesejadaArray = escaladesejada.split(",");


           //for que faz dentro do escopo da função aparecer as notas   
            for(i=0; i<escaladesejadaArray.length -1 ; i++){

              
              console.log(i)
               console.log(escaladesejadaArray[i])
              
             
               var acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]}`)
             
                for(j=0;j<acessanotas.length; j++){

                    console.log(acessanotas[j])
                    acessanotas[j].style.display="block"
                }
               
               
          }

    
        

            }


            
botaobraçotodoC.addEventListener("click" , function(){criaescala(0)})
botaobraçotodoG.addEventListener("click" , function(){criaescala(11)})
botaobraçotodoD.addEventListener("click" , function(){criaescala(3)})
/*botaobraçotodoA.addEventListener("click" , function(){criaescala(14)})
botaobraçotodoE.addEventListener("click" , function(){criaescala(6)})
botaobraçotodoB.addEventListener("click" , function(){criaescala(17)})
botaobraçotodoFs.addEventListener("click" , function(){criaescala(9)})
botaobraçotodoF.addEventListener("click" , function(){criaescala(8)})
botaobraçotodoBb.addEventListener("click" , function(){criaescala(16)})
botaobraçotodoEb.addEventListener("click" , function(){criaescala(5)})
botaobraçotodoAb.addEventListener("click" , function(){criaescala(13)})
botaobraçotodoDb.addEventListener("click" , function(){criaescala(2)})
botaobraçotodoGb.addEventListener("click" , function(){criaescala(10)})*/

  
      


