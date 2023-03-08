function botaoEscalaTonsInteirosBraçoTodo() {


    //botões braço todo 

    var botaotomF = document.getElementById("tonsinteirosf")
   
    var botaotomC = document.getElementById("tonsinteirosc")
  


    //clicks dos botões braço todo  
 
    botaotomF.addEventListener("click", () => { tonsInteiros(F) })
   
    botaotomC.addEventListener("click", () => { tonsInteiros(C) })
  

};

botaoEscalaTonsInteirosBraçoTodo();