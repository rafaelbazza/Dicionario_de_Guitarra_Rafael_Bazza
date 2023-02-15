//consts para facilitar a vida com as strings das notas no cliclo das quartas e os indices das notas da escala no ciclo das quartas 

const classNameEscalaBotão = ['c', 'g', 'd', 'a', 'e', 'b', 'fs', 'f', 'bb', 'eb', 'ab', 'db', 'gb'];
const indicesDiatonicaEmQuartas = [0, 11, 3, 14, 6, 17, 9, 8, 16, 5, 13, 2, 10];
const CAGED = ['C', 'G', 'A', 'D', 'E']

//variaveis da criação das esalas 

var diatonica = [];

var distanciasdiatonica = "TTSTTTS"

var stringcromatica = "C n,C s,D b,D n,D s,E b,E n,E s,F n,F s,G b,G n,G s,A b,A n,A s,B b,B n,C b";

var cromatica = stringcromatica.split(",");

//console.log(cromatica)

var escaladesejadaArray = [];


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
function iniciaDiatonica(){ 

for (i = 0; i < distanciasdiatonica.length; i++) {
     diatonica.push(distanciasdiatonica[i])

}
};

//algorimo adaptado victor, que gera a diatonica e cria a array escalaDesejadaArray

function algoritmoDiatonica(tonica){

     //variaveis em que parametro é o numero do indice da nota da escala cromatica que inicia a função. 
     let j = tonica
     var escaladesejada = [cromatica[j]];


     //for responsavel por inserir a cromatica para cada tonalidade a depender do parametro 
     for (i = 0; i < diatonica.length; i++) {


          //condicional do tom 

          if (diatonica[i] == "T") {

               if (j < 16) { j = j + 3 }
               else {

                    if (j == 16) { j = 0 }
                    else {
                         if (j == 17) { j = 1 }
                         else {
                              if (j == 18) { j = 2 }
                         }

                    }
               }
          }

          //condicional do semitom 

          if (diatonica[i] == "S") {

               if (j < 17) { j = j + 2; }
               else {
                    if (j == 17) { j = 0 }
               }

          }


          //cria string da escala chamada no parametro na variavel escaladesejada 
          //dentro do escopo do for da diatonica 

          escaladesejada = escaladesejada + "," + cromatica[j];




     }

     //transforma a estring gerada no ultimo for, em array.
     escaladesejadaArray = escaladesejada.split(",");

};

// função que mostra a escala braço todo, escala por corda e escala duas cordas 

function mostraEscala(corda){

     //for que faz dentro do escopo da função aparecer as notas   
          for (i = 0; i < escaladesejadaArray.length; i++) {
     
     
               //console.log(i)
               //console.log(escaladesejadaArray[i])
     
               var acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]}  ${corda} `)
               //console.log(acessanotas)
     
               console.log(`${escaladesejadaArray[i]} ${corda} `)
     
     
     
     
               for (j = 0; j < acessanotas.length; j++) {
     
                    //console.log(acessanotas[j])
     
                    acessanotas[j].style.display = "block"
               }
     
     
          }
     
     }

//função que junta o algorimoDiatonica e o mostraEscala para criar a escala no braça a partir dos botões      

function criaescala(tonica, corda) {

     //console.log(corda)
  

     if (corda == undefined) { corda = "" }

     //console.log(corda)

algoritmoDiatonica(tonica)
     



mostraEscala(corda)




}

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
function botõesBraçoTodo (){


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

//function responsavel por criar os MODELOS do caged 
function criaCAGED(tonica) {

     reset();

     //variaveis em que parametro é o numero do indice da nota da escala cromatica que inicia a função. 
     let j = tonica
     var escaladesejada = [cromatica[j]];


     //for responsavel por inserir a cromatica para cada tonalidade a depender do parametro 
     for (i = 0; i < diatonica.length; i++) {


          //condicional do tom 

          if (diatonica[i] == "T") {

               if (j < 16) { j = j + 3 }
               else {

                    if (j == 16) { j = 0 }
                    else {
                         if (j == 17) { j = 1 }
                         else {
                              if (j == 18) { j = 2 }
                         }

                    }
               }
          }

          //condicional do semitom 

          if (diatonica[i] == "S") {

               if (j < 17) { j = j + 2; }
               else {
                    if (j == 17) { j = 0 }
               }

          }


          //cria string da escala chamada no parametro na variavel escaladesejada 
          //dentro do escopo do for da diatonica 

          escaladesejada = escaladesejada + "," + cromatica[j];




     }

     //transforma a estring gerada no ultimo for, em array.
     escaladesejadaArray = escaladesejada.split(",");




MODELODEC()


}

//function com os fors que criam modelo de C 

function MODELODEC (){

     //for que faz dentro do escopo da função aparecer as notas do CAGED
     for (i = 0; i < 9; i++) {


          //console.log(i);
          //console.log(escaladesejadaArray[i])


          //if responsavel pela corda 6

          if (i > 1 & i < 5) {

               var acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]} 6`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };


          };



          // if responsavél pela corda 5

          if (i > 4 & i < 8) {


               acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]} 5`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };
          };

          //if responsável pela corda 4


          if (i > 0 & i < 4) {

               acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]} 4`);
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i]);




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block";
               };


          };


          //if responsável pela corda 3

          if (i > 3 & i < 6) {




               acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]} 3`)
               //console.log(acessanotas)

               //console.log(escaladesejadaArray[i])




               for (j = 0; j < acessanotas.length; j++) {

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display = "block"
               }






          }

          //if responsável pela corda 2

          if (i > 5) {

               if (i == 8) { i = 1 };

               acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]} 2`);


               for (j = 0; j < acessanotas.length; j++) {

                    acessanotas[j].style.display = "block"
               }

               if (i == 1) { i = 8 }

          }

          // if responsável pela corda 1
          if (i > 1 & i < 5) {

               acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]} 1`);

               for (j = 0; j < acessanotas.length; j++) {

                    acessanotas[j].style.display = "block"
               }


          }



     }

}

//função que gera os botões para o CAGED 
function botãoCAGED(props) {

     //puxando botões CAGED Modelo C para desenvolver algoritmo 
     var cagedCc = document.getElementById(`CAGED${props}${classNameEscalaBotão[0]}`)
     var cagedCg = document.getElementById(`CAGED${props}${classNameEscalaBotão[1]}`)
     var cagedCd = document.getElementById(`CAGED${props}${classNameEscalaBotão[2]}`)
     var cagedCa = document.getElementById(`CAGED${props}${classNameEscalaBotão[3]}`)
     var cagedCe = document.getElementById(`CAGED${props}${classNameEscalaBotão[4]}`)
     var cagedCb = document.getElementById(`CAGED${props}${classNameEscalaBotão[5]}`)
     var cagedCfs = document.getElementById(`CAGED${props}${classNameEscalaBotão[6]}`)
     var cagedCf = document.getElementById(`CAGED${props}${classNameEscalaBotão[7]}`)
     var cagedCbb = document.getElementById(`CAGED${props}${classNameEscalaBotão[8]}`)
     var cagedCeb = document.getElementById(`CAGED${props}${classNameEscalaBotão[9]}`)
     var cagedCab = document.getElementById(`CAGED${props}${classNameEscalaBotão[10]}`)
     var cagedCdb = document.getElementById(`CAGED${props}${classNameEscalaBotão[11]}`)
     var cagedCgb = document.getElementById(`CAGED${props}${classNameEscalaBotão[12]}`)


     cagedCc.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[0]) })
     cagedCg.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[1]) })
     cagedCd.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[2]) })
     cagedCa.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[3]) })
     cagedCe.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[4]) })
     cagedCb.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[5]) })
     cagedCfs.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[6]) })
     cagedCf.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[7]) })
     cagedCbb.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[8]) })
     cagedCeb.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[9]) })
     cagedCab.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[10]) })
     cagedCdb.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[11]) })
     cagedCgb.addEventListener('click', () => { criaCAGED(indicesDiatonicaEmQuartas[12]) })

}











iniciaDiatonica();

botõesBraçoTodo();

AtivaPorCorda();

AtivaDuasCordas();

botãoCAGED("C")





