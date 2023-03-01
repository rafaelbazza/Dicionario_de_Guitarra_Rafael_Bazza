var stringcromatica = "C n, C s, C ss, D bb, D b, D, D s, D ss, E bb, E b, E, E s, E ss, F b, F, F s, F ss, G bb, G b, G, G s, G ss, A bb, A b, A, A s, A ss, B bb, B b, B, B s, C bb, C b"
var cromatica = stringcromatica.split(",");

var elementodesejadoArray = [];

//console.log(cromatica)

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

function reset(){

    var acessanotas = document.getElementsByClassName


}

function algoritmoSegundaMenor(tonica) {

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

    console.log(elementodesejadoArray)

}

function algoritmoSegundaMaior(tonica) {

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

    console.log(elementodesejadoArray)

}

function algoritmoTerçaMenor(tonica) {

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

    console.log(elementodesejadoArray)

}






function umdoistrês(tonica){
 
algoritmoSegundaMaior(tonica);
algoritmoTerçaMenor(tonica);

}

/*
umdoistrês(C);
umdoistrês(Cs);
umdoistrês(Db);
umdoistrês(D);
umdoistrês(Ds);
umdoistrês(Eb);
umdoistrês(E);
umdoistrês(Es);
umdoistrês(F);
umdoistrês(Fs);
umdoistrês(Gb);
umdoistrês(G);
umdoistrês(Gs);
umdoistrês(Ab);
umdoistrês(A);
umdoistrês(As);
umdoistrês(Bb);
umdoistrês(B);
umdoistrês(Bs);
umdoistrês(Cb);*/