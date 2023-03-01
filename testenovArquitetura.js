
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

function mostraElemento(notas){
    
    for(i=0; i<notas.length;i++){
    
    
        var acessanotas = document.getElementsByClassName(`${notas[i]}`)
    
       for(l=0;l<acessanotas.length;l++){
    
        acessanotas[l].style.display = "Block"
       }
    }
    }

//aloritmos para os intervalos

function segundaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 0) { j = j };




        if (i = 1) {


            if (j < 29) { j = j + 4 } 
            else {


                if (j >= 29) { j = j - 29 }


            }

        }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    mostraElemento(elementodesejadoArray);

}

function segundaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 0) { j = j };

        if (i = 1) {

            if (j < 28) { j = j + 5 } 
            else {
                    if (j >= 28) { j = j - 28 }
}
 }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");


    //for responsavel por jogar a escala pro braço 


mostraElemento(elementodesejadoArray);
    

}

function terçaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 0) { j = j };




        if (i = 1) {


            if (j < 24) { j = j + 9 } 
            else {


                if (j >= 24) { j = j - 24 }


            }

        }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    mostraElemento(elementodesejadoArray);
}

function terçaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 0) { j = j };




        if (i = 1) {


            if (j < 23) { j = j + 10 } 
            else {


                if (j >= 23) { j = j - 23 }


            }

        }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    mostraElemento(elementodesejadoArray);

  
}

function quartaJusta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 0) { j = j };




        if (i = 1) {


            if (j < 19) { j = j + 14 } 
            else {


                if (j >= 19) { j = j - 19 }


            }

        }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    mostraElemento(elementodesejadoArray);
    
 
  
}

function quintaJusta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 0) { j = j };




        if (i = 1) {


            if (j < 14) { j = j + 19 } 
            else {


                if (j >= 14) { j = j - 14 }


            }

        }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    mostraElemento(elementodesejadoArray);
    
  
  
}


function sextaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 0) { j = j };




        if (i = 1) {


            if (j < 9) { j = j + 24 } 
            else {


                if (j >= 9) { j = j - 9 }


            }

        }

        intervalo = intervalo + "," + cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    mostraElemento(elementodesejadoArray);
    
  reset();
  console.log(elementodesejadoArray);
  
}
















//testes das funções 

sextaMaior(C);
sextaMaior(Cs);
sextaMaior(Db);
sextaMaior(D);
sextaMaior(Ds);
sextaMaior(Eb);
sextaMaior(E);
sextaMaior(Es);
sextaMaior(F);
sextaMaior(Fs);
sextaMaior(Gb);
sextaMaior(G);
sextaMaior(Gs);
sextaMaior(Ab);
sextaMaior(A);
sextaMaior(As);
sextaMaior(Bb);
sextaMaior(B);
sextaMaior(Bs);
sextaMaior(Cb);