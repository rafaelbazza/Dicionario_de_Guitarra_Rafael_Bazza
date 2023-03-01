
//variaveis da escala cromatica com sustenidos, dobrados sustenidos, bemois e dobrado bemois. 

var stringcromatica = "C n, C s, C ss, D bb, D b, D n, D s, D ss, E bb, E b, E n, E s, E ss, F b, F n, F s, F ss, G bb, G b, G n, G s, G ss, A bb, A b, A n, A s, A ss, B bb, B b, B n, B s, C bb, C b"
var cromatica = stringcromatica.split(",");

//array criada fora das functions para usar nos algoritmos de intervalos 

var elementodesejadoArray = [];

console.log(cromatica)


//vars para facilitar o argumento das funções com o indice da escala cromatica setada para o nome da nota 

var C = 0;
var Cs = 1;
var Db = 4;
var D = 5;
var Ds = 6;
var Eb = 9;
var E = 10;
var Es = 11;
var F = 14;
var Fs = 15
var Gb = 18;
var G = 19;
var Gs = 20;
var Ab = 23;
var A = 24;
var As = 25;
var Bb = 28;
var B = 29;
var Bs = 30;
var Cb = 32;


//function teste para mostrar todas notas
function resetinverso(){

    var acessanotas = document.getElementsByClassName("a")
     
    
    for(i=0; i<acessanotas.length;i++){

        acessanotas[i].style.display = "block"
    }


}

//function que reseta o braço da guitarra e apaga todas as notass
function reset(){

    var acessanotas = document.getElementsByClassName("a")
     
    
    for(i=0; i<acessanotas.length;i++){

        acessanotas[i].style.display = "none"
    }


}

//function que mostra só corda um 

function resettodasmenosUm(){

    for(i=2; i<7; i++ ) {
     var acessanotas = document.getElementsByClassName(`${i}`)
      
     
     for(j=0; j<acessanotas.length;j++){
 
         if(acessanotas[j].style.display="block"){acessanotas[j].style.display="none"}
     }
 
 }
 }
 

//loop para mostrar notas do algoritmo do intervalo 

function mostraElemento(notas , corda){

    if(corda == undefined){ corda = ""}
    
    for(i=0; i<notas.length;i++){
    
    
        var acessanotas = document.getElementsByClassName(`${notas[i]}  ${corda}`)
    
       for(l=0;l<acessanotas.length;l++){
    
        acessanotas[l].style.display = "Block"
       }
    }
    }

//aloritmos para os intervalos

function Fundamental(tonica){

    let j = tonica;
    var intervalo = cromatica[j];

    



    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   


}

function segundaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {




        if (i = 1) {


            if (j < 29) { j = j + 4 } 
            else {


                if (j >= 29) { j = j - 29 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   

}

function segundaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 1) {

            if (j < 28) { j = j + 5 } 
            else {
                    if (j >= 28) { j = j - 28 }
}
 }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");


    //for responsavel por jogar a escala pro braço 



    

}

function terçaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        




        if (i = 1) {


            if (j < 24) { j = j + 9 } 
            else {


                if (j >= 24) { j = j - 24 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   
}

function terçaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        
        if (i = 1) {


            if (j < 23) { j = j + 10 } 
            else {


                if (j >= 23) { j = j - 23 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
 

  
}

function quartaJusta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 19) { j = j + 14 } 
            else {


                if (j >= 19) { j = j - 19 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   
    
 
  
}

function quartaAumentada(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

     




        if (i = 1) {


            if (j < 15) { j = j + 15 } 
            else {


                if (j == 15) { j = j - 15 }
                else{

                    if(j>15){j = j - 18}



                }


            }

        }

        intervalo =   cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    console.log(intervalo)
   
    
 
  
}

function quintaDiminuta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

     




        if (i = 1) {


            if (j < 15) { j = j + 18 }else{
           
            if(j>=15){j = j -15}

            }
                

        }

        intervalo =   cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

   
   //console.log(intervalo)
    
 
  
}


function quintaJusta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        




        if (i = 1) {


            if (j < 14) { j = j + 19 } 
            else {


                if (j >= 14) { j = j - 14 }


            }

        }

        intervalo = cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   
    
  
  
}

function quintaAumentada(tonica) {

   

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        




        if (i = 1) {

            
            if (j < 11) { j = j + 20 } 
            else {


                if (j == 11) { j = 1 }else{
                    if(j>13 & j<30){j=j-13}else{

                        if(j==30){j=20}else{
                            if(j==32)(j=19)
                        }
                    }
                }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    //console.log(intervalo)
    
  
  
}

function sextaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 10) { j = j + 23 } 
            else {


                if (j >= 10) { j = j - 10 }


            }

        }

        intervalo =  cromatica[j];

        


    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
      //console.log(intervalo)
    

  
}

function sextaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 9) { j = j + 24 } 
            else {


                if (j >= 9) { j = j - 9 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
  
    

  
}
function setimaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 5) { j = j + 28 } 
            else {


                if (j >= 5) { j = j - 5 }


            }

        }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    // console.log(intervalo)
 
  
}
function setimaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 4) { j = j + 29 } 
            else {


                if (j >= 4) { j = j - 4 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)

 
  
}


//escalas

function diatonica(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray);

  

};



//acordes

function triadeMaior(tonica){

    reset();
    terçaMaior(tonica);
    quintaJusta(tonica);
}


//CAGED DIATONICA

function diatonicaCAGEDC(tonica){

     reset();

     Fundamental(tonica)
     mostraElemento(elementodesejadoArray, 5 )
     mostraElemento(elementodesejadoArray, 2 )


     segundaMaior(tonica);
     mostraElemento(elementodesejadoArray, 4 )
     mostraElemento(elementodesejadoArray, 2 )

     terçaMaior(tonica)
     mostraElemento(elementodesejadoArray , 6)
     mostraElemento(elementodesejadoArray, 4)
     mostraElemento(elementodesejadoArray , 1)

     quartaJusta(tonica)
     mostraElemento(elementodesejadoArray , 6)
     mostraElemento(elementodesejadoArray, 4)
     mostraElemento(elementodesejadoArray , 1)

     quintaJusta(tonica)
     mostraElemento(elementodesejadoArray , 6)
     mostraElemento(elementodesejadoArray, 3)
     mostraElemento(elementodesejadoArray , 1)

     sextaMaior(tonica)
     mostraElemento(elementodesejadoArray, 5 )
     mostraElemento(elementodesejadoArray, 3 )

     setimaMaior(tonica)
     mostraElemento(elementodesejadoArray, 5 )
     mostraElemento(elementodesejadoArray, 2 )

};

function diatonicaCAGEDA(tonica){

    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 2 )

    terçaMaior(tonica)
    
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray , 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 1)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray , 1)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )

};



//diatonicaCAGEDA(C)






//testes das funções 

setimaMenor(C);
setimaMenor(Cs);
setimaMenor(Db);
setimaMenor(D);
setimaMenor(Ds);
setimaMenor(Eb);
setimaMenor(E);
setimaMenor(Es);
setimaMenor(F);
setimaMenor(Fs);
setimaMenor(Gb);
setimaMenor(G);
setimaMenor(Gs);
setimaMenor(Ab);
setimaMenor(A);
setimaMenor(As);
setimaMenor(Bb);
setimaMenor(B);
setimaMenor(Bs);
setimaMenor(Cb);