
function botaoPrimeirosAcordes() {


   
    var botaotomC = document.getElementById("primeirosacordesC")
    var botaotomA = document.getElementById("primeirosacordesA")
    var botaotomG = document.getElementById("primeirosacordesG")
    var botaotomE = document.getElementById("primeirosacordesE")
    var botaotomD = document.getElementById("primeirosacordesD")
    var botaotomEm = document.getElementById("primeirosacordesEm")
    var botaotomAm = document.getElementById("primeirosacordesAm")
    var botaotomDm = document.getElementById("primeirosacordesDm")

   
 
 
      botaotomC.addEventListener("click", () =>{triadeMaiorCAGEDC(C) })
      botaotomA.addEventListener("click", () =>{triadeMaiorCAGEDA(A) })
      botaotomG.addEventListener("click", () =>{triadeMaiorCAGEDG(G) })
      botaotomE.addEventListener("click", () =>{triadeMaiorCAGEDE(E) })
      botaotomD.addEventListener("click", () =>{triadeMaiorCAGEDD(D) })
      botaotomEm.addEventListener("click", () =>{triadeMenorCAGEDE(E) })
      botaotomAm.addEventListener("click", () =>{triadeMenorCAGEDA(A) })
      botaotomDm.addEventListener("click", () =>{triadeMenorCAGEDD(D) })

 
 };



 botaoPrimeirosAcordes();