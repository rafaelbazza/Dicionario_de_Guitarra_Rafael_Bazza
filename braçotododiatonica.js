
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
var botaobraçotodoGb= document.getElementById("diatonicagb")


//clicks dos botões braço todo  
botaobraçotodoC.addEventListener("click" , () => { ComportamentoBotão(0)})
botaobraçotodoG.addEventListener("click" , () => { ComportamentoBotão(11) })
botaobraçotodoD.addEventListener("click" , () => { ComportamentoBotão(3) })
botaobraçotodoA.addEventListener("click" , ()=>{ComportamentoBotão(14)})
botaobraçotodoE.addEventListener("click" , () => {ComportamentoBotão(6)})
botaobraçotodoB.addEventListener("click" , () => {ComportamentoBotão(17)})
botaobraçotodoFs.addEventListener("click" , () => {ComportamentoBotão(9)})
botaobraçotodoF.addEventListener("click" , () => {ComportamentoBotão(8)})
botaobraçotodoBb.addEventListener("click" , () => {ComportamentoBotão(16)})
botaobraçotodoEb.addEventListener("click" , () => {ComportamentoBotão(5)})
botaobraçotodoAb.addEventListener("click" , () => {ComportamentoBotão(13)})
botaobraçotodoDb.addEventListener("click" , () => {ComportamentoBotão(2)})
botaobraçotodoGb.addEventListener("click" , () => {ComportamentoBotão(10)})





//função que libera uma corda só para todas tonalidades 


function PorCorda(props){
     
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
var porcordaGb= document.getElementById(`porcorda${props}gb`)

//clicks dos botões por corda 1 
porcordaC.addEventListener("click" , () => {ComportamentoBotão(0,`${props}`) })
porcordaG.addEventListener("click" , () => { ComportamentoBotão(11,`${props}`) })
porcordaD.addEventListener("click" , () => { ComportamentoBotão(3,`${props}`) })
porcordaA.addEventListener("click" , ()=>{ComportamentoBotão(14,`${props}`)})
porcordaE.addEventListener("click" , () => {ComportamentoBotão(6,`${props}`)})
porcordaB.addEventListener("click" , () => {ComportamentoBotão(17,`${props}`)})
porcordaFs.addEventListener("click" , () => {ComportamentoBotão(9,`${props}`)})
porcordaF.addEventListener("click" , () => {ComportamentoBotão(8,`${props}`)})
porcordaBb.addEventListener("click" , () => {ComportamentoBotão(16,`${props}`)})
porcordaEb.addEventListener("click" , () => {ComportamentoBotão(5,`${props}`)})
porcordaAb.addEventListener("click" , () => {ComportamentoBotão(13,`${props}`)})
porcordaDb.addEventListener("click" , () => {ComportamentoBotão(2,`${props}`)})
porcordaGb.addEventListener("click" , () => {ComportamentoBotão(10,`${props}`)})


};

//for que ativa a função para todas 

for(i=1; i<7 ; i++){

   PorCorda(i)

}

//função que libera duas cordas em todas tonalidades 

function DuasCordas(props,drops){


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
     var duascordasGb= document.getElementById(`duascordas${props}${drops}gb`)


duascordasC.addEventListener("click" , ()=>{ComportamentoBotão(0,props,drops)});  
duascordasG.addEventListener("click" , ()=>{ComportamentoBotão(11,props,drops)}); 
duascordasD.addEventListener("click" , ()=>{ComportamentoBotão(3,props,drops)}); 
duascordasA.addEventListener("click" , ()=>{ComportamentoBotão(14,props,drops)});
duascordasE.addEventListener("click" , ()=>{ComportamentoBotão(6,props,drops)}); 
duascordasB.addEventListener("click" , ()=>{ComportamentoBotão(17,props,drops)}); 
duascordasFs.addEventListener("click" , ()=>{ComportamentoBotão(9,props,drops)});
duascordasF.addEventListener("click" , ()=>{ComportamentoBotão(8,props,drops)}); 
duascordasBb.addEventListener("click" , ()=>{ComportamentoBotão(16,props,drops)});
duascordasEb.addEventListener("click" , ()=>{ComportamentoBotão(5,props,drops)});
duascordasAb.addEventListener("click" , ()=>{ComportamentoBotão(13,props,drops)});
duascordasDb.addEventListener("click" , ()=>{ComportamentoBotão(2,props,drops)});
duascordasGb.addEventListener("click" , ()=>{ComportamentoBotão(10,props,drops)});

     
}

//for que inicializa a função duas cordas pro braço todo
for (i = 1; i<6 ; i++){
    
   
DuasCordas(i,i+1);

  
  
 
}



var diatonica = [];

var distanciasdiatonica ="TTSTTTS"

var stringcromatica = "C n,C s,D b,D n,D s,E b,E n,E s,F n,F s,G b,G n,G s,A b,A n,A s,B b,B n,C b";

var cromatica = stringcromatica.split(",");


//console.log(cromatica)



var escaladesejadaArray =[];




for(i=0; i<distanciasdiatonica.length; i++){
   diatonica.push(distanciasdiatonica[i])

}

function reset(){
     
     //reset display para criar nova escala 
var todasasNotas = document.getElementsByClassName("a");
for(b=0;b<todasasNotas.length;b++){
     //console.log(b)
     //console.log(todasasNotas[b])

     if(todasasNotas[b].style.display="block"){todasasNotas[b].style.display="none"}
};

};
function criaescala(tonica, corda){

     //console.log(corda)


     if(corda==undefined){corda=""}

     //console.log(corda)
     
   






//variaveis em que parametro é o numero do indice da nota da escala cromatica que inicia a função. 
let j = tonica
var escaladesejada = [cromatica[j]];


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

              escaladesejada = escaladesejada + "," +  cromatica[j];

             
             

                }

             //transforma a estring gerada no ultimo for, em array.
             escaladesejadaArray = escaladesejada.split(",");


           //for que faz dentro do escopo da função aparecer as notas   
            for(i=0; i<escaladesejadaArray.length; i++){

              
               //console.log(i)
               //console.log(escaladesejadaArray[i])
              
               var acessanotas = document.getElementsByClassName(`${escaladesejadaArray[i]}  ${corda} `  )
                  //console.log(acessanotas)
                  
                  //console.log(`${escaladesejadaArray[i]} ${corda} `)
            
                 

             
                for(j=0;j<acessanotas.length; j++){

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display="block"
                }
               
               
          }

    
        

            }
 function ComportamentoBotão(props,corda,corda2){

     if(corda2==undefined){corda2=corda }

     reset();
     criaescala(props,corda)
     criaescala(props,corda2)

     //console.log(corda2)

  };
      


