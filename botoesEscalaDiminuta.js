function botaoEscalaDiminutaBraçoTodo() {


    //botões braço todo 

    var botaotomA = document.getElementById("diminutaa")
    var botaotomD = document.getElementById("diminutad")
    var botaotomG = document.getElementById("diminutag")
  


    //clicks dos botões braço todo  
 
    botaotomA.addEventListener("click", () => { escalaDiminuta(A) })
    botaotomD.addEventListener("click", () => { escalaDiminuta(D) })
    botaotomG.addEventListener("click", () => { escalaDiminuta(G) })
  

};

botaoEscalaDiminutaBraçoTodo();