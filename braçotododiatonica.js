
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
botaobraçotodoC.addEventListener("click" , () => { ComportamentoBotão(0) })
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

//por corda corda 1

var porcordaC = document.getElementById("porcorda1c") 
var porcordaG = document.getElementById("porcorda1g")
var porcordaD = document.getElementById("porcorda1d")
var porcordaA = document.getElementById("porcorda1a")
var porcordaE = document.getElementById("porcorda1e")
var porcordaB = document.getElementById("porcorda1b")
var porcordaFs = document.getElementById("porcorda1fs")
var porcordaF = document.getElementById("porcorda1f")
var porcordaBb = document.getElementById("porcorda1bb")
var porcordaEb = document.getElementById("porcorda1eb")
var porcordaAb = document.getElementById("porcorda1ab")
var porcordaDb = document.getElementById("porcorda1db")
var porcordaGb= document.getElementById("porcorda1gb")




//clicks dos botões por corda 1 
porcordaC.addEventListener("click" , () => { console.log("cliclou"),ComportamentoBotão(0,1) })
porcordaG.addEventListener("click" , () => { ComportamentoBotão(11,1) })
porcordaD.addEventListener("click" , () => { ComportamentoBotão(3,1) })
porcordaA.addEventListener("click" , ()=>{ComportamentoBotão(14,1)})
porcordaE.addEventListener("click" , () => {ComportamentoBotão(6,1)})
porcordaB.addEventListener("click" , () => {ComportamentoBotão(17,1)})
porcordaFs.addEventListener("click" , () => {ComportamentoBotão(9,1)})
porcordaF.addEventListener("click" , () => {ComportamentoBotão(8,1)})
porcordaBb.addEventListener("click" , () => {ComportamentoBotão(16,1)})
porcordaEb.addEventListener("click" , () => {ComportamentoBotão(5,1)})
porcordaAb.addEventListener("click" , () => {ComportamentoBotão(13,1)})
porcordaDb.addEventListener("click" , () => {ComportamentoBotão(2,1)})
porcordaGb.addEventListener("click" , () => {ComportamentoBotão(10,1)})





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

     console.log(corda)


     if(corda==undefined){corda=""}

     console.log(corda)
     
   






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
                  
                  console.log(`${escaladesejadaArray[i]} ${corda} `)
            
                 

             
                for(j=0;j<acessanotas.length; j++){

                    //console.log(acessanotas[j])

                    acessanotas[j].style.display="block"
                }
               
               
          }

    
        

            }


            //var teste = document.getElementsByClassName("C n 1")

            //console.log(teste)



  function ComportamentoBotão(props,corda){

     reset();
     criaescala(props,corda)



  };
      


