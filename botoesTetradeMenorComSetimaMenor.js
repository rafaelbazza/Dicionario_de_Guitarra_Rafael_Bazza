function botaoTetradeMenorComSetimaMenorBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("m7a")
    var botaotomE = document.getElementById("m7e")
    var botaotomB = document.getElementById("m7b")
    var botaotomFs = document.getElementById("m7fs")
    var botaotomCs = document.getElementById("m7cs")
    var botaotomGs = document.getElementById("m7gs")
    var botaotomDs = document.getElementById("m7ds")
    var botaotomD = document.getElementById("m7d")
    var botaotomG = document.getElementById("m7g")
    var botaotomC = document.getElementById("m7c")
    var botaotomF = document.getElementById("m7f")
    var botaotomBb = document.getElementById("m7bb")
    var botaotomEb = document.getElementById("m7eb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { tetradeMenorcomSetimaMenor(A) })
    botaotomE.addEventListener("click", () => { tetradeMenorcomSetimaMenor(E) })
    botaotomB.addEventListener("click", () => { tetradeMenorcomSetimaMenor(B) })
    botaotomFs.addEventListener("click", () => { tetradeMenorcomSetimaMenor(Fs) })
    botaotomCs.addEventListener("click", () => { tetradeMenorcomSetimaMenor(Cs) })
    botaotomGs.addEventListener("click", () => { tetradeMenorcomSetimaMenor(Gs) })
    botaotomDs.addEventListener("click", () => { tetradeMenorcomSetimaMenor(Ds) })
    botaotomD.addEventListener("click", () => { tetradeMenorcomSetimaMenor(D) })
    botaotomG.addEventListener("click", () => { tetradeMenorcomSetimaMenor(G) })
    botaotomC.addEventListener("click", () => { tetradeMenorcomSetimaMenor(C) })
    botaotomF.addEventListener("click", () => { tetradeMenorcomSetimaMenor(F) })
    botaotomBb.addEventListener("click", () => { tetradeMenorcomSetimaMenor(Bb) })
    botaotomEb.addEventListener("click", () => { tetradeMenorcomSetimaMenor(Eb) })

};

botaoTetradeMenorComSetimaMenorBraçoTodo();