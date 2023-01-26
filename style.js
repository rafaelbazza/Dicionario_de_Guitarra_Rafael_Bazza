
var botao = document.getElementById('tendi')

var diatonica = [];

var distanciasdiatonica ="TTSTTTS"

var stringcromatica = "C,C#,Db,D,D#,Eb,E,E#,F,F#,Gb,G,G#,Ab,A,A#,Bb,B,Cb";

var cromatica = stringcromatica.split(",");




for(i=0; i<distanciasdiatonica.length; i++){
   diatonica.push(distanciasdiatonica[i])

}













function criaescala(parametro){

let j = parametro
var escaladesejada = cromatica[j]
let i

for(i=0; i<diatonica.length; i++){



 
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


if(diatonica[i]=="S"){

 if(j<17){j=j+2;}
                 else{
                      if(j==17){j=0}
                 }

                }  
               
           
              escaladesejada = escaladesejada + "," + cromatica[j]
             

                }

            

            console.log(escaladesejada)

            }


            

  


function diatonicaC(){

     criaescala(0)
}

function diatonicaG(){
     criaescala(11)
}



diatonicaG()