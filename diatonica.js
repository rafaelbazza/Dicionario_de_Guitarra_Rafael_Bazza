//consts para facilitar a vida com as strings das notas no cliclo das quartas e os indices das notas da escala no ciclo das quartas 

const classNameEscalaBotão = ['c', 'g', 'd', 'a', 'e', 'b', 'fs', 'f', 'bb', 'eb', 'ab', 'db', 'gb'];
const indicesDiatonicaEmQuartas = [0, 11, 3, 14, 6, 17, 9, 8, 16, 5, 13, 2, 10];
const CAGED = ['C', 'G', 'A', 'D', 'E']

const C = indicesDiatonicaEmQuartas[0];
const G = indicesDiatonicaEmQuartas[1];
const D  = indicesDiatonicaEmQuartas[2];
const A = indicesDiatonicaEmQuartas[3];
const E = indicesDiatonicaEmQuartas[4];
const B = indicesDiatonicaEmQuartas[5];
const Fs = indicesDiatonicaEmQuartas[6];
const F = indicesDiatonicaEmQuartas[7];
const Bb = indicesDiatonicaEmQuartas[8];
const Eb = indicesDiatonicaEmQuartas[9];
const Ab = indicesDiatonicaEmQuartas[10];
const Db = indicesDiatonicaEmQuartas[11];
const Gb = indicesDiatonicaEmQuartas[12];





//variaveis da criação das esalas e acordes

var diatonica = [];

var triade = [];

var distanciasdiatonica = "TTSTTTS"

var distanciastriade = "135"

var stringcromatica = "C n,C s,D b,D n,D s,E b,E n,E s,F n,F s,G b,G n,G s,A b,A n,A s,B b,B n,C b";

var cromatica = stringcromatica.split(",");

//console.log(cromatica)

var elementodesejadoArray = [];




// function responsavél por apagar todas as notas do braço
function reset() {

     //reset display para criar nova escala 
     var todasasNotas = document.getElementsByClassName("a");
     for (b = 0; b < todasasNotas.length; b++) {
          //console.log(b)
          //console.log(todasasNotas[b])

          if (todasasNotas[b].style.display = "block") { todasasNotas[b].style.display = "none" }
     };

};


//function com for que joga os TTSTTTS pra dentro da array diatonica 
function iniciaDiatonica() {

     for (i = 0; i < distanciasdiatonica.length; i++) {
          diatonica.push(distanciasdiatonica[i])

     }
};

function iniciaTriade() {
     for (i = 0; i < distanciastriade.length; i++) {
          triade.push(distanciastriade[i])
     };
}

//algorimo adaptado victor, que gera a diatonica e cria a array escalaDesejadaArray

function algoritmoDiatonica(tonica) {

     //variaveis em que parametro é o numero do indice da nota da escala cromatica que inicia a função. 
     let j = tonica
     var escaladesejada = [cromatica[j]];


     //for responsavel por inserir a cromatica para cada tonalidade a depender do parametro 
     for (i = 0; i < diatonica.length; i++) {


          //condicional do tom 

          if (diatonica[i] == "T") {

               if (j < 16) { j = j + 3 }
               else {

                    if (j >= 16) { j = j - 16 }
                   
               }
          }

          //condicional do semitom 

          if (diatonica[i] == "S") {

               if (j < 17) { j = j + 2; }
               else {
                    if (j >= 17) { j = j - 17 }
               }

          }


          //cria string da escala chamada no parametro na variavel escaladesejada 
          //dentro do escopo do for da diatonica 

          escaladesejada = escaladesejada + "," + cromatica[j];




     }

     //transforma a estring gerada no ultimo for, em array.
     elementodesejadoArray = escaladesejada.split(",");




};

//algorimo adaptado victor, que gera a triade Maior e cria a array triademaiorDesejada

function algoritmotriadeMaior(tonica) {

     //variaveis em que parametro é o numero do indice da nota da escala cromatica que inicia a função. 
     let j = tonica
     var triadeDesejada = [cromatica[j]];


     //for responsavel por inserir a cromatica para cada tonalidade a depender do parametro 
     for (i = 0; i < triade.length; i++) {


          //condicional da tonica  

          if (triade[i] == "1") {

               if (j < 13) { j = j + 6 }
               else {
                      if (j >= 13) { j = j -13 }
                   
               }
          }

          //condicional da terça 

          if (triade[i] == "3") {

               if (j < 14) { j = j + 5; }
               else {
                    if (j >= 14) { j = j - 14 }
                   
               }
          }

      //condicional da quinta 

               if (triade[i] == "5") {

                    if (j < 11) { j = j + 8; }
                    else {
                         if (j >= 11) { j = j - 11 }
                        }
                    }

               //cria string da escala chamada no parametro na variavel escaladesejada 
               //dentro do escopo do for da diatonica 

               triadeDesejada = triadeDesejada + "," + cromatica[j];

             
             

          }


          elementodesejadoArray = triadeDesejada.split(",");
          
        
          
     }
     ;

     //algoritmo triade menor

     function algoritmotriadeMenor(tonica) {

          //variaveis em que parametro é o numero do indice da nota da escala cromatica que inicia a função. 
          let j = tonica
          var triadeDesejada = [cromatica[j]];
     
     
          //for responsavel por inserir a cromatica para cada tonalidade a depender do parametro 
          for (i = 0; i < triade.length; i++) {
     
     
               //condicional da tonica  
     
               if (triade[i] == "1") {
     
                    if (j < 14) { j = j + 5 }
                    else {
                           if (j >= 14) { j = j -14 }
                        
                    }
               }
     
               //condicional da terça 
     
               if (triade[i] == "3") {
     
                    if (j < 13) { j = j + 6; }
                    else {
                         if (j >= 13) { j = j - 13 }
                        
                    }
               }
     
           //condicional da quinta 
     
                    if (triade[i] == "5") {
     
                         if (j < 11) { j = j + 8; }
                         else {
                              if (j >= 11) { j = j - 11 }
                             }
                         }
     
                    //cria string da escala chamada no parametro na variavel escaladesejada 
                    //dentro do escopo do for da diatonica 
     
                    triadeDesejada = triadeDesejada + "," + cromatica[j];
     
                  
                  
     
               }
     
     
               elementodesejadoArray = triadeDesejada.split(",");
               
             
               
          }
 

//function acorde desejado para mostrar o acorde no instrumento 

function mostraTriade (){
     for(i=0; i<triadedesejadaArray.length; i++){


          console.log(i)
          var acessanotas = document.getElementsByClassName(`${triadedesejadaArray[i]}`)

          for(j=0; j<acessanotas.length; j++){

               acessanotas[j].style.display = "block"
          }
          

          }

     



}


function criaTriadeMaior(tonica, corda){

     if (corda == undefined) { corda = "" }

     reset()
     algoritmotriadeMaior(tonica);
     mostraElemento(corda);
}

function criaTriadeMenor(tonica, corda){

     if (corda == undefined) { corda = "" }

     reset()
     algoritmotriadeMenor(tonica);
     mostraElemento(corda);


}




 





// função que mostra a escala braço todo, escala por corda e escala duas cordas 

function mostraElemento(corda) {

     //for que faz dentro do escopo da função aparecer as notas   
     for (i = 0; i < elementodesejadoArray.length; i++) {


          //console.log(i)
          //console.log(escaladesejadaArray[i])

          var acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]}  ${corda} `)
          //console.log(acessanotas)

         // console.log(`${escaladesejadaArray[i]} ${corda} `)




          for (j = 0; j < acessanotas.length; j++) {

               //console.log(acessanotas[j])

               acessanotas[j].style.display = "block"
          }


     }

}

//função que junta o algorimoDiatonica e o mostraEscala para criar a escala no braço a partir dos botões      

function criaescala(tonica, corda) {

     //console.log(corda)


     if (corda == undefined) { corda = "" }

     //console.log(corda)

     algoritmoDiatonica(tonica)




     mostraElemento(corda)




}


// FUNÇÕES DOS BOTÕES 



/*função que define o argumento das funções de botão para os botões que chamam braço todo 
,por corda e duas cordas. */

function ComportamentoBotão(props, corda, corda2) {

     if (corda2 == undefined) { corda2 = corda }

     reset();
     criaescala(props, corda)
     criaescala(props, corda2)

     //console.log(corda2)

};

// botões braço todo 
function botõesBraçoTodo() {


     //botões braço todo 
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
     var botaobraçotodoGb = document.getElementById("diatonicagb")


     //clicks dos botões braço todo  
     botaobraçotodoC.addEventListener("click", () => { ComportamentoBotão(0) })
     botaobraçotodoG.addEventListener("click", () => { ComportamentoBotão(11) })
     botaobraçotodoD.addEventListener("click", () => { ComportamentoBotão(3) })
     botaobraçotodoA.addEventListener("click", () => { ComportamentoBotão(14) })
     botaobraçotodoE.addEventListener("click", () => { ComportamentoBotão(6) })
     botaobraçotodoB.addEventListener("click", () => { ComportamentoBotão(17) })
     botaobraçotodoFs.addEventListener("click", () => { ComportamentoBotão(9) })
     botaobraçotodoF.addEventListener("click", () => { ComportamentoBotão(8) })
     botaobraçotodoBb.addEventListener("click", () => { ComportamentoBotão(16) })
     botaobraçotodoEb.addEventListener("click", () => { ComportamentoBotão(5) })
     botaobraçotodoAb.addEventListener("click", () => { ComportamentoBotão(13) })
     botaobraçotodoDb.addEventListener("click", () => { ComportamentoBotão(2) })
     botaobraçotodoGb.addEventListener("click", () => { ComportamentoBotão(10) })

};

//função que libera uma corda só para todas tonalidades 

function PorCorda(props) {

     var porcordaC = document.getElementById(`porcorda${props}c`)
     var porcordaG = document.getElementById(`porcorda${props}g`)
     var porcordaD = document.getElementById(`porcorda${props}d`)
     var porcordaA = document.getElementById(`porcorda${props}a`)
     var porcordaE = document.getElementById(`porcorda${props}e`)
     var porcordaB = document.getElementById(`porcorda${props}b`)
     var porcordaFs = document.getElementById(`porcorda${props}fs`)
     var porcordaF = document.getElementById(`porcorda${props}f`)
     var porcordaBb = document.getElementById(`porcorda${props}bb`)
     var porcordaEb = document.getElementById(`porcorda${props}eb`)
     var porcordaAb = document.getElementById(`porcorda${props}ab`)
     var porcordaDb = document.getElementById(`porcorda${props}db`)
     var porcordaGb = document.getElementById(`porcorda${props}gb`)

     //clicks dos botões por corda 1 
     porcordaC.addEventListener("click", () => { ComportamentoBotão(0, `${props}`) })
     porcordaG.addEventListener("click", () => { ComportamentoBotão(11, `${props}`) })
     porcordaD.addEventListener("click", () => { ComportamentoBotão(3, `${props}`) })
     porcordaA.addEventListener("click", () => { ComportamentoBotão(14, `${props}`) })
     porcordaE.addEventListener("click", () => { ComportamentoBotão(6, `${props}`) })
     porcordaB.addEventListener("click", () => { ComportamentoBotão(17, `${props}`) })
     porcordaFs.addEventListener("click", () => { ComportamentoBotão(9, `${props}`) })
     porcordaF.addEventListener("click", () => { ComportamentoBotão(8, `${props}`) })
     porcordaBb.addEventListener("click", () => { ComportamentoBotão(16, `${props}`) })
     porcordaEb.addEventListener("click", () => { ComportamentoBotão(5, `${props}`) })
     porcordaAb.addEventListener("click", () => { ComportamentoBotão(13, `${props}`) })
     porcordaDb.addEventListener("click", () => { ComportamentoBotão(2, `${props}`) })
     porcordaGb.addEventListener("click", () => { ComportamentoBotão(10, `${props}`) })


};

//for que ativa a função para todas 
function AtivaPorCorda() {

     for (i = 1; i < 7; i++) {

          PorCorda(i)

     }
}
//função que libera duas cordas em todas tonalidades 

function DuasCordas(props, drops) {


     var duascordasC = document.getElementById(`duascordas${props}${drops}c`)
     var duascordasG = document.getElementById(`duascordas${props}${drops}g`)
     var duascordasD = document.getElementById(`duascordas${props}${drops}d`)
     var duascordasA = document.getElementById(`duascordas${props}${drops}a`)
     var duascordasE = document.getElementById(`duascordas${props}${drops}e`)
     var duascordasB = document.getElementById(`duascordas${props}${drops}b`)
     var duascordasFs = document.getElementById(`duascordas${props}${drops}fs`)
     var duascordasF = document.getElementById(`duascordas${props}${drops}f`)
     var duascordasBb = document.getElementById(`duascordas${props}${drops}bb`)
     var duascordasEb = document.getElementById(`duascordas${props}${drops}eb`)
     var duascordasAb = document.getElementById(`duascordas${props}${drops}ab`)
     var duascordasDb = document.getElementById(`duascordas${props}${drops}db`)
     var duascordasGb = document.getElementById(`duascordas${props}${drops}gb`)


     duascordasC.addEventListener("click", () => { ComportamentoBotão(0, props, drops) });
     duascordasG.addEventListener("click", () => { ComportamentoBotão(11, props, drops) });
     duascordasD.addEventListener("click", () => { ComportamentoBotão(3, props, drops) });
     duascordasA.addEventListener("click", () => { ComportamentoBotão(14, props, drops) });
     duascordasE.addEventListener("click", () => { ComportamentoBotão(6, props, drops) });
     duascordasB.addEventListener("click", () => { ComportamentoBotão(17, props, drops) });
     duascordasFs.addEventListener("click", () => { ComportamentoBotão(9, props, drops) });
     duascordasF.addEventListener("click", () => { ComportamentoBotão(8, props, drops) });
     duascordasBb.addEventListener("click", () => { ComportamentoBotão(16, props, drops) });
     duascordasEb.addEventListener("click", () => { ComportamentoBotão(5, props, drops) });
     duascordasAb.addEventListener("click", () => { ComportamentoBotão(13, props, drops) });
     duascordasDb.addEventListener("click", () => { ComportamentoBotão(2, props, drops) });
     duascordasGb.addEventListener("click", () => { ComportamentoBotão(10, props, drops) });


}

//for que inicializa a função duas cordas pro braço todo

function AtivaDuasCordas() {
     for (i = 1; i < 6; i++) {


          DuasCordas(i, i + 1);

     }


};





//functions com fragmentos de 3 ou 2 notas grau conjunto onde props é a corda 


function TônicaSegundaTerça(props) {

     for (i = 0; i < 9; i++) {
          if (i > -1 & i < 3) {

               acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };
          }

     };

};

function SegundaTerçaQuarta(props) {
     for (i = 0; i < 9; i++) {
          if (i > 0 & i < 4) {

               acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };
          }

     };
};


function TerçaQuartaQuinta(props) {

     for (i = 0; i < 9; i++) {

          if (i > 1 & i < 5) {

               var acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };


          };

     }
};

function QuartaQuintaSexta(props) {
     for (i = 0; i < 9; i++) {

          if (i > 2 & i < 6) {

               var acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };


          };

     }

};

function QuintaSextaSétima(props) {

     for (i = 0; i < 9; i++) {

          if (i > 3 & i < 7) {

               var acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };


          };

     }
};

function SextaSétimaTônica(props) {

     for (i = 0; i < 9; i++) {

          if (i > 4 & i < 8) {


               acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };
          };
     }
};

function SétimaTônicaSegunda(props) {

     for (i = 0; i < 9; i++) {

          if (i > 5 & i < 9) {

               if (i == 8) { i = 1 };

               acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`);


               for (j = 0; j < acessanotas.length; j++) {

                    acessanotas[j].style.display = "block"
               }

               if (i == 1) { i = 8 }

          }

     }




};


function QuintaSexta(props) {
     for (i = 0; i < 9; i++) {
          if (i > 3 & i < 6) {




               acessanotas = document.getElementsByClassName(`${elementodesejadoArray[i]} ${props}`)
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i])




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block"
               }

          }




     }
};









//functions CAGED 



//MODELO C

//function responsavel por criar os MODELOS DE C 
function criaCAGEDC(tonica) {

     reset();

     algoritmoDiatonica(tonica)


     MODELODEC()





}

//function com os fors que criam modelo de C 

function MODELODEC() {


     //for que faz dentro do escopo da função aparecer as notas do CAGED



     //console.log(i);
     //console.log(escaladesejadaArray[i])


     //functions das cordas 


     TerçaQuartaQuinta("6")

     SextaSétimaTônica("5")

     SegundaTerçaQuarta("4")

     QuintaSexta("3")

     SétimaTônicaSegunda("2")

     TerçaQuartaQuinta("1")



}

//função que gera os botões para o CAGED MODELO DE C
function botãoCAGEDC() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var cagedCc = document.getElementById(`CAGEDC${classNameEscalaBotão[0]}`)
     var cagedCg = document.getElementById(`CAGEDC${classNameEscalaBotão[1]}`)
     var cagedCd = document.getElementById(`CAGEDC${classNameEscalaBotão[2]}`)
     var cagedCa = document.getElementById(`CAGEDC${classNameEscalaBotão[3]}`)
     var cagedCe = document.getElementById(`CAGEDC${classNameEscalaBotão[4]}`)
     var cagedCb = document.getElementById(`CAGEDC${classNameEscalaBotão[5]}`)
     var cagedCfs = document.getElementById(`CAGEDC${classNameEscalaBotão[6]}`)
     var cagedCf = document.getElementById(`CAGEDC${classNameEscalaBotão[7]}`)
     var cagedCbb = document.getElementById(`CAGEDC${classNameEscalaBotão[8]}`)
     var cagedCeb = document.getElementById(`CAGEDC${classNameEscalaBotão[9]}`)
     var cagedCab = document.getElementById(`CAGEDC${classNameEscalaBotão[10]}`)
     var cagedCdb = document.getElementById(`CAGEDC${classNameEscalaBotão[11]}`)
     var cagedCgb = document.getElementById(`CAGEDC${classNameEscalaBotão[12]}`)


     cagedCc.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[0]) })
     cagedCg.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[1]) })
     cagedCd.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[2]) })
     cagedCa.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[3]) })
     cagedCe.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[4]) })
     cagedCb.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[5]) })
     cagedCfs.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[6]) })
     cagedCf.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[7]) })
     cagedCbb.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[8]) })
     cagedCeb.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[9]) })
     cagedCab.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[10]) })
     cagedCdb.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[11]) })
     cagedCgb.addEventListener('click', () => { criaCAGEDC(indicesDiatonicaEmQuartas[12]) })

}






//MODELO A

//function responsavel por criar os MODELOS DE A
function criaCAGEDA(tonica) {

     reset();

     algoritmoDiatonica(tonica)


     MODELODEA()





}

//function com os fors que criam modelo de A 

function MODELODEA() {







     QuintaSexta("6")

     SétimaTônicaSegunda("5")

     TerçaQuartaQuinta("4")

     SextaSétimaTônica("3")

     SegundaTerçaQuarta("2")

     QuintaSexta("1")

}

//função que gera os botões para o CAGED MODELO DE A
function botãoCAGEDA() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var cagedAc = document.getElementById(`CAGEDA${classNameEscalaBotão[0]}`)
     var cagedAg = document.getElementById(`CAGEDA${classNameEscalaBotão[1]}`)
     var cagedAd = document.getElementById(`CAGEDA${classNameEscalaBotão[2]}`)
     var cagedAa = document.getElementById(`CAGEDA${classNameEscalaBotão[3]}`)
     var cagedAe = document.getElementById(`CAGEDA${classNameEscalaBotão[4]}`)
     var cagedAb = document.getElementById(`CAGEDA${classNameEscalaBotão[5]}`)
     var cagedAfs = document.getElementById(`CAGEDA${classNameEscalaBotão[6]}`)
     var cagedAf = document.getElementById(`CAGEDA${classNameEscalaBotão[7]}`)
     var cagedAbb = document.getElementById(`CAGEDA${classNameEscalaBotão[8]}`)
     var cagedAeb = document.getElementById(`CAGEDA${classNameEscalaBotão[9]}`)
     var cagedAab = document.getElementById(`CAGEDA${classNameEscalaBotão[10]}`)
     var cagedAdb = document.getElementById(`CAGEDA${classNameEscalaBotão[11]}`)
     var cagedAgb = document.getElementById(`CAGEDA${classNameEscalaBotão[12]}`)


     cagedAc.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[0]) })
     cagedAg.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[1]) })
     cagedAd.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[2]) })
     cagedAa.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[3]) })
     cagedAe.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[4]) })
     cagedAb.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[5]) })
     cagedAfs.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[6]) })
     cagedAf.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[7]) })
     cagedAbb.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[8]) })
     cagedAeb.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[9]) })
     cagedAab.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[10]) })
     cagedAdb.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[11]) })
     cagedAgb.addEventListener('click', () => { criaCAGEDA(indicesDiatonicaEmQuartas[12]) })

}







//Modelo  G

//function responsavel por criar os MODELOS DE G

function criaCAGEDG(tonica) {

     reset();

     algoritmoDiatonica(tonica)


     MODELODEG()





}

//function com os fors que criam modelo de G

function MODELODEG() {





     console.log(i);
     console.log(escaladesejadaArray[i])

     SextaSétimaTônica("6")

     SegundaTerçaQuarta("5")

     QuintaSexta("4")

     SétimaTônicaSegunda("3")

     TerçaQuartaQuinta("2")

     SextaSétimaTônica("1")





}

//função que gera os botões para o CAGED MODELO DE G
function botãoCAGEDG() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var cagedGc = document.getElementById(`CAGEDG${classNameEscalaBotão[0]}`)
     var cagedGg = document.getElementById(`CAGEDG${classNameEscalaBotão[1]}`)
     var cagedGd = document.getElementById(`CAGEDG${classNameEscalaBotão[2]}`)
     var cagedGa = document.getElementById(`CAGEDG${classNameEscalaBotão[3]}`)
     var cagedGe = document.getElementById(`CAGEDG${classNameEscalaBotão[4]}`)
     var cagedGb = document.getElementById(`CAGEDG${classNameEscalaBotão[5]}`)
     var cagedGfs = document.getElementById(`CAGEDG${classNameEscalaBotão[6]}`)
     var cagedGf = document.getElementById(`CAGEDG${classNameEscalaBotão[7]}`)
     var cagedGbb = document.getElementById(`CAGEDG${classNameEscalaBotão[8]}`)
     var cagedGeb = document.getElementById(`CAGEDG${classNameEscalaBotão[9]}`)
     var cagedGab = document.getElementById(`CAGEDG${classNameEscalaBotão[10]}`)
     var cagedGdb = document.getElementById(`CAGEDG${classNameEscalaBotão[11]}`)
     var cagedGgb = document.getElementById(`CAGEDG${classNameEscalaBotão[12]}`)


     cagedGc.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[0]) })
     cagedGg.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[1]) })
     cagedGd.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[2]) })
     cagedGa.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[3]) })
     cagedGe.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[4]) })
     cagedGb.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[5]) })
     cagedGfs.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[6]) })
     cagedGf.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[7]) })
     cagedGbb.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[8]) })
     cagedGeb.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[9]) })
     cagedGab.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[10]) })
     cagedGdb.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[11]) })
     cagedGgb.addEventListener('click', () => { criaCAGEDG(indicesDiatonicaEmQuartas[12]) })

}



//Modelo  E

//function responsavel por criar os MODELOS DE E

function criaCAGEDE(tonica) {

     reset();

     algoritmoDiatonica(tonica)


     MODELODEE()





}

//function com os fors que criam modelo de E 

function MODELODEE() {






     SétimaTônicaSegunda("6")

     TerçaQuartaQuinta("5")

     SextaSétimaTônica("4")

     SegundaTerçaQuarta("3")

     QuintaSexta("2")

     SétimaTônicaSegunda("1")



}

//função que gera os botões para o CAGED MODELO DE E
function botãoCAGEDE() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var cagedEc = document.getElementById(`CAGEDE${classNameEscalaBotão[0]}`)
     var cagedEg = document.getElementById(`CAGEDE${classNameEscalaBotão[1]}`)
     var cagedEd = document.getElementById(`CAGEDE${classNameEscalaBotão[2]}`)
     var cagedEa = document.getElementById(`CAGEDE${classNameEscalaBotão[3]}`)
     var cagedEe = document.getElementById(`CAGEDE${classNameEscalaBotão[4]}`)
     var cagedEb = document.getElementById(`CAGEDE${classNameEscalaBotão[5]}`)
     var cagedEfs = document.getElementById(`CAGEDE${classNameEscalaBotão[6]}`)
     var cagedEf = document.getElementById(`CAGEDE${classNameEscalaBotão[7]}`)
     var cagedEbb = document.getElementById(`CAGEDE${classNameEscalaBotão[8]}`)
     var cagedEeb = document.getElementById(`CAGEDE${classNameEscalaBotão[9]}`)
     var cagedEab = document.getElementById(`CAGEDE${classNameEscalaBotão[10]}`)
     var cagedEdb = document.getElementById(`CAGEDE${classNameEscalaBotão[11]}`)
     var cagedEgb = document.getElementById(`CAGEDE${classNameEscalaBotão[12]}`)


     cagedEc.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[0]) })
     cagedEg.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[1]) })
     cagedEd.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[2]) })
     cagedEa.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[3]) })
     cagedEe.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[4]) })
     cagedEb.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[5]) })
     cagedEfs.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[6]) })
     cagedEf.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[7]) })
     cagedEbb.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[8]) })
     cagedEeb.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[9]) })
     cagedEab.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[10]) })
     cagedEdb.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[11]) })
     cagedEgb.addEventListener('click', () => { criaCAGEDE(indicesDiatonicaEmQuartas[12]) })

}







//Modelo  D

//function responsavel por criar os MODELOS DE D

function criaCAGEDD(tonica) {

     reset();

     algoritmoDiatonica(tonica)


     MODELODED()





}

//function com os fors que criam modelo de D 

function MODELODED() {






     SegundaTerçaQuarta("6")

     QuintaSexta("5")

     SétimaTônicaSegunda("4")

     TerçaQuartaQuinta("3")

     SextaSétimaTônica("2")

     SegundaTerçaQuarta("1")


}

//função que gera os botões para o CAGED MODELO DE D
function botãoCAGEDD() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var cagedDc = document.getElementById(`CAGEDD${classNameEscalaBotão[0]}`)
     var cagedDg = document.getElementById(`CAGEDD${classNameEscalaBotão[1]}`)
     var cagedDd = document.getElementById(`CAGEDD${classNameEscalaBotão[2]}`)
     var cagedDa = document.getElementById(`CAGEDD${classNameEscalaBotão[3]}`)
     var cagedDe = document.getElementById(`CAGEDD${classNameEscalaBotão[4]}`)
     var cagedDb = document.getElementById(`CAGEDD${classNameEscalaBotão[5]}`)
     var cagedDfs = document.getElementById(`CAGEDD${classNameEscalaBotão[6]}`)
     var cagedDf = document.getElementById(`CAGEDD${classNameEscalaBotão[7]}`)
     var cagedDbb = document.getElementById(`CAGEDD${classNameEscalaBotão[8]}`)
     var cagedDeb = document.getElementById(`CAGEDD${classNameEscalaBotão[9]}`)
     var cagedDab = document.getElementById(`CAGEDD${classNameEscalaBotão[10]}`)
     var cagedDdb = document.getElementById(`CAGEDD${classNameEscalaBotão[11]}`)
     var cagedDgb = document.getElementById(`CAGEDD${classNameEscalaBotão[12]}`)


     cagedDc.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[0]) })
     cagedDg.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[1]) })
     cagedDd.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[2]) })
     cagedDa.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[3]) })
     cagedDe.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[4]) })
     cagedDb.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[5]) })
     cagedDfs.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[6]) })
     cagedDf.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[7]) })
     cagedDbb.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[8]) })
     cagedDeb.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[9]) })
     cagedDab.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[10]) })
     cagedDdb.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[11]) })
     cagedDgb.addEventListener('click', () => { criaCAGEDD(indicesDiatonicaEmQuartas[12]) })

}





//FUNÇÕES 7 DESENHOS 


//função 7 desenhos 1

function CriaSeteDesenhosUm(tonica) {

     reset();
     algoritmoDiatonica(tonica);
     seteDesenhosUm();

};

function seteDesenhosUm() {

     TônicaSegundaTerça("6")
     QuartaQuintaSexta("5")
     SétimaTônicaSegunda("4")
     TerçaQuartaQuinta("3")
     SextaSétimaTônica("2")
     SegundaTerçaQuarta("1")

};

function botãoSeteDesenhosUm() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var SeteDesenhosUmc = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[0]}`)
     var SeteDesenhosUmg = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[1]}`)
     var SeteDesenhosUmd = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[2]}`)
     var SeteDesenhosUma = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[3]}`)
     var SeteDesenhosUme = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[4]}`)
     var SeteDesenhosUmb = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[5]}`)
     var SeteDesenhosUmfs = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[6]}`)
     var SeteDesenhosUmf = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[7]}`)
     var SeteDesenhosUmbb = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[8]}`)
     var SeteDesenhosUmeb = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[9]}`)
     var SeteDesenhosUmab = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[10]}`)
     var SeteDesenhosUmdb = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[11]}`)
     var SeteDesenhosUmgb = document.getElementById(`setedesenhosdesenho1tom${classNameEscalaBotão[12]}`)


     SeteDesenhosUmc.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[0]) })
     SeteDesenhosUmg.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[1]) })
     SeteDesenhosUmd.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[2]) })
     SeteDesenhosUma.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[3]) })
     SeteDesenhosUme.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[4]) })
     SeteDesenhosUmb.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[5]) })
     SeteDesenhosUmfs.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[6]) })
     SeteDesenhosUmf.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[7]) })
     SeteDesenhosUmbb.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[8]) })
     SeteDesenhosUmeb.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[9]) })
     SeteDesenhosUmab.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[10]) })
     SeteDesenhosUmdb.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[11]) })
     SeteDesenhosUmgb.addEventListener('click', () => { CriaSeteDesenhosUm(indicesDiatonicaEmQuartas[12]) })

}





//função 7 desenhos 2 

function CriaSeteDesenhosDois(tonica) {

     reset();
     algoritmoDiatonica(tonica);
     seteDesenhosDois();

};

function seteDesenhosDois() {

     SegundaTerçaQuarta("6")
     QuintaSextaSétima("5")
     TônicaSegundaTerça("4")
     QuartaQuintaSexta("3")
     SétimaTônicaSegunda("2")
     TerçaQuartaQuinta("1")

};

function botãoSeteDesenhosDois() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var SeteDesenhosDoisc = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[0]}`)
     var SeteDesenhosDoisg = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[1]}`)
     var SeteDesenhosDoisd = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[2]}`)
     var SeteDesenhosDoisa = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[3]}`)
     var SeteDesenhosDoise = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[4]}`)
     var SeteDesenhosDoisb = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[5]}`)
     var SeteDesenhosDoisfs = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[6]}`)
     var SeteDesenhosDoisf = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[7]}`)
     var SeteDesenhosDoisbb = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[8]}`)
     var SeteDesenhosDoiseb = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[9]}`)
     var SeteDesenhosDoisab = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[10]}`)
     var SeteDesenhosDoisdb = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[11]}`)
     var SeteDesenhosDoisgb = document.getElementById(`setedesenhosdesenho2tom${classNameEscalaBotão[12]}`)


     SeteDesenhosDoisc.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[0]) })
     SeteDesenhosDoisg.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[1]) })
     SeteDesenhosDoisd.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[2]) })
     SeteDesenhosDoisa.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[3]) })
     SeteDesenhosDoise.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[4]) })
     SeteDesenhosDoisb.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[5]) })
     SeteDesenhosDoisfs.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[6]) })
     SeteDesenhosDoisf.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[7]) })
     SeteDesenhosDoisbb.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[8]) })
     SeteDesenhosDoiseb.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[9]) })
     SeteDesenhosDoisab.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[10]) })
     SeteDesenhosDoisdb.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[11]) })
     SeteDesenhosDoisgb.addEventListener('click', () => { CriaSeteDesenhosDois(indicesDiatonicaEmQuartas[12]) })

}




//função 7 desenhos 3

function CriaSeteDesenhosTrês(tonica) {


     reset();
     algoritmoDiatonica(tonica);
     seteDesenhosTrês();

};

function seteDesenhosTrês() {

     TerçaQuartaQuinta("6")
     SextaSétimaTônica("5")
     SegundaTerçaQuarta("4")
     QuintaSextaSétima("3")
     TônicaSegundaTerça("2")
     QuartaQuintaSexta("1")

};

function botãoSeteDesenhosTrês() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var SeteDesenhosTrêsc = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[0]}`)
     var SeteDesenhosTrêsg = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[1]}`)
     var SeteDesenhosTrêsd = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[2]}`)
     var SeteDesenhosTrêsa = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[3]}`)
     var SeteDesenhosTrêse = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[4]}`)
     var SeteDesenhosTrêsb = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[5]}`)
     var SeteDesenhosTrêsfs = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[6]}`)
     var SeteDesenhosTrêsf = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[7]}`)
     var SeteDesenhosTrêsbb = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[8]}`)
     var SeteDesenhosTrêseb = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[9]}`)
     var SeteDesenhosTrêsab = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[10]}`)
     var SeteDesenhosTrêsdb = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[11]}`)
     var SeteDesenhosTrêsgb = document.getElementById(`setedesenhosdesenho3tom${classNameEscalaBotão[12]}`)


     SeteDesenhosTrêsc.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[0]) })
     SeteDesenhosTrêsg.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[1]) })
     SeteDesenhosTrêsd.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[2]) })
     SeteDesenhosTrêsa.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[3]) })
     SeteDesenhosTrêse.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[4]) })
     SeteDesenhosTrêsb.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[5]) })
     SeteDesenhosTrêsfs.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[6]) })
     SeteDesenhosTrêsf.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[7]) })
     SeteDesenhosTrêsbb.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[8]) })
     SeteDesenhosTrêseb.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[9]) })
     SeteDesenhosTrêsab.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[10]) })
     SeteDesenhosTrêsdb.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[11]) })
     SeteDesenhosTrêsgb.addEventListener('click', () => { CriaSeteDesenhosTrês(indicesDiatonicaEmQuartas[12]) })

}




//função 7 desenhos 4

function CriaSeteDesenhosQuatro(tonica) {


     reset();
     algoritmoDiatonica(tonica);
     seteDesenhosQuatro();

};

function seteDesenhosQuatro() {

     QuartaQuintaSexta("6")
     SétimaTônicaSegunda("5")
     TerçaQuartaQuinta("4")
     SextaSétimaTônica("3")
     SegundaTerçaQuarta("2")
     QuintaSextaSétima("1")

};

function botãoSeteDesenhosQuatro() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var SeteDesenhosQuatroc = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[0]}`)
     var SeteDesenhosQuatrog = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[1]}`)
     var SeteDesenhosQuatrod = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[2]}`)
     var SeteDesenhosQuatroa = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[3]}`)
     var SeteDesenhosQuatroe = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[4]}`)
     var SeteDesenhosQuatrob = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[5]}`)
     var SeteDesenhosQuatrofs = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[6]}`)
     var SeteDesenhosQuatrof = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[7]}`)
     var SeteDesenhosQuatrobb = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[8]}`)
     var SeteDesenhosQuatroeb = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[9]}`)
     var SeteDesenhosQuatroab = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[10]}`)
     var SeteDesenhosQuatrodb = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[11]}`)
     var SeteDesenhosQuatrogb = document.getElementById(`setedesenhosdesenho4tom${classNameEscalaBotão[12]}`)


     SeteDesenhosQuatroc.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[0]) })
     SeteDesenhosQuatrog.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[1]) })
     SeteDesenhosQuatrod.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[2]) })
     SeteDesenhosQuatroa.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[3]) })
     SeteDesenhosQuatroe.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[4]) })
     SeteDesenhosQuatrob.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[5]) })
     SeteDesenhosQuatrofs.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[6]) })
     SeteDesenhosQuatrof.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[7]) })
     SeteDesenhosQuatrobb.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[8]) })
     SeteDesenhosQuatroeb.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[9]) })
     SeteDesenhosQuatroab.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[10]) })
     SeteDesenhosQuatrodb.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[11]) })
     SeteDesenhosQuatrogb.addEventListener('click', () => { CriaSeteDesenhosQuatro(indicesDiatonicaEmQuartas[12]) })

}


//função 7 desenhos 5

function CriaSeteDesenhosCinco(tonica) {


     reset();
     algoritmoDiatonica(tonica);
     seteDesenhosCinco();

};

function seteDesenhosCinco() {

     QuintaSextaSétima("6")
     TônicaSegundaTerça("5")
     QuartaQuintaSexta("4")
     SétimaTônicaSegunda("3")
     TerçaQuartaQuinta("2")
     SextaSétimaTônica("1")

};

function botãoSeteDesenhosCinco() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var SeteDesenhosCincoc = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[0]}`)
     var SeteDesenhosCincog = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[1]}`)
     var SeteDesenhosCincod = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[2]}`)
     var SeteDesenhosCincoa = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[3]}`)
     var SeteDesenhosCincoe = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[4]}`)
     var SeteDesenhosCincob = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[5]}`)
     var SeteDesenhosCincofs = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[6]}`)
     var SeteDesenhosCincof = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[7]}`)
     var SeteDesenhosCincobb = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[8]}`)
     var SeteDesenhosCincoeb = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[9]}`)
     var SeteDesenhosCincoab = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[10]}`)
     var SeteDesenhosCincodb = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[11]}`)
     var SeteDesenhosCincogb = document.getElementById(`setedesenhosdesenho5tom${classNameEscalaBotão[12]}`)


     SeteDesenhosCincoc.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[0]) })
     SeteDesenhosCincog.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[1]) })
     SeteDesenhosCincod.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[2]) })
     SeteDesenhosCincoa.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[3]) })
     SeteDesenhosCincoe.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[4]) })
     SeteDesenhosCincob.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[5]) })
     SeteDesenhosCincofs.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[6]) })
     SeteDesenhosCincof.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[7]) })
     SeteDesenhosCincobb.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[8]) })
     SeteDesenhosCincoeb.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[9]) })
     SeteDesenhosCincoab.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[10]) })
     SeteDesenhosCincodb.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[11]) })
     SeteDesenhosCincogb.addEventListener('click', () => { CriaSeteDesenhosCinco(indicesDiatonicaEmQuartas[12]) })

}



//função 7 desenhos 6

function CriaSeteDesenhosSeis(tonica) {


     reset();
     algoritmoDiatonica(tonica);
     seteDesenhosSeis();

};

function seteDesenhosSeis() {

     SextaSétimaTônica("6")
     SegundaTerçaQuarta("5")
     QuintaSextaSétima("4")
     TônicaSegundaTerça("3")
     QuartaQuintaSexta("2")
     SétimaTônicaSegunda("1")

};

function botãoSeteDesenhosSeis() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var SeteDesenhosSeisc = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[0]}`)
     var SeteDesenhosSeisg = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[1]}`)
     var SeteDesenhosSeisd = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[2]}`)
     var SeteDesenhosSeisa = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[3]}`)
     var SeteDesenhosSeise = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[4]}`)
     var SeteDesenhosSeisb = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[5]}`)
     var SeteDesenhosSeisfs = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[6]}`)
     var SeteDesenhosSeisf = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[7]}`)
     var SeteDesenhosSeisbb = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[8]}`)
     var SeteDesenhosSeiseb = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[9]}`)
     var SeteDesenhosSeisab = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[10]}`)
     var SeteDesenhosSeisdb = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[11]}`)
     var SeteDesenhosSeisgb = document.getElementById(`setedesenhosdesenho6tom${classNameEscalaBotão[12]}`)


     SeteDesenhosSeisc.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[0]) })
     SeteDesenhosSeisg.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[1]) })
     SeteDesenhosSeisd.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[2]) })
     SeteDesenhosSeisa.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[3]) })
     SeteDesenhosSeise.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[4]) })
     SeteDesenhosSeisb.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[5]) })
     SeteDesenhosSeisfs.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[6]) })
     SeteDesenhosSeisf.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[7]) })
     SeteDesenhosSeisbb.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[8]) })
     SeteDesenhosSeiseb.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[9]) })
     SeteDesenhosSeisab.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[10]) })
     SeteDesenhosSeisdb.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[11]) })
     SeteDesenhosSeisgb.addEventListener('click', () => { CriaSeteDesenhosSeis(indicesDiatonicaEmQuartas[12]) })

}


//função 7 desenhos 7

function CriaSeteDesenhosSete(tonica) {


     reset();
     algoritmoDiatonica(tonica);
     seteDesenhosSete();

};

function seteDesenhosSete() {

     SétimaTônicaSegunda("6")
     TerçaQuartaQuinta("5")
     SextaSétimaTônica("4")
     SegundaTerçaQuarta("3")
     QuintaSextaSétima("2")
     TônicaSegundaTerça("1")

};

function botãoSeteDesenhosSete() {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var SeteDesenhosSetec = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[0]}`)
     var SeteDesenhosSeteg = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[1]}`)
     var SeteDesenhosSeted = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[2]}`)
     var SeteDesenhosSetea = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[3]}`)
     var SeteDesenhosSetee = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[4]}`)
     var SeteDesenhosSeteb = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[5]}`)
     var SeteDesenhosSetefs = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[6]}`)
     var SeteDesenhosSetef = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[7]}`)
     var SeteDesenhosSetebb = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[8]}`)
     var SeteDesenhosSeteeb = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[9]}`)
     var SeteDesenhosSeteab = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[10]}`)
     var SeteDesenhosSetedb = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[11]}`)
     var SeteDesenhosSetegb = document.getElementById(`setedesenhosdesenho7tom${classNameEscalaBotão[12]}`)


     SeteDesenhosSetec.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[0]) })
     SeteDesenhosSeteg.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[1]) })
     SeteDesenhosSeted.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[2]) })
     SeteDesenhosSetea.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[3]) })
     SeteDesenhosSetee.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[4]) })
     SeteDesenhosSeteb.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[5]) })
     SeteDesenhosSetefs.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[6]) })
     SeteDesenhosSetef.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[7]) })
     SeteDesenhosSetebb.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[8]) })
     SeteDesenhosSeteeb.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[9]) })
     SeteDesenhosSeteab.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[10]) })
     SeteDesenhosSetedb.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[11]) })
     SeteDesenhosSetegb.addEventListener('click', () => { CriaSeteDesenhosSete(indicesDiatonicaEmQuartas[12]) })

}









iniciaDiatonica();

iniciaTriade();

botõesBraçoTodo();

AtivaPorCorda();

AtivaDuasCordas();

botãoCAGEDC();

botãoCAGEDA();

botãoCAGEDG();

botãoCAGEDE();

botãoCAGEDD();

botãoSeteDesenhosUm();

botãoSeteDesenhosDois();

botãoSeteDesenhosTrês();

botãoSeteDesenhosQuatro();

botãoSeteDesenhosCinco();

botãoSeteDesenhosSeis();

botãoSeteDesenhosSete();






