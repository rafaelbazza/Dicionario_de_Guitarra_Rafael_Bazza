function botaoTriadeMenorBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("triademenora")
    var botaotomE = document.getElementById("triademenore")
    var botaotomB = document.getElementById("triademenorb")
    var botaotomFs = document.getElementById("triademenorfs")
    var botaotomCs = document.getElementById("triademenorcs")
    var botaotomGs = document.getElementById("triademenorgs")
    var botaotomDs = document.getElementById("triademenords")
    var botaotomD = document.getElementById("triademenord")
    var botaotomG = document.getElementById("triademenorg")
    var botaotomC = document.getElementById("triademenorc")
    var botaotomF = document.getElementById("triademenorf")
    var botaotomBb = document.getElementById("triademenorbb")
    var botaotomEb = document.getElementById("triademenoreb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { triadeMenor(A) })
    botaotomE.addEventListener("click", () => { triadeMenor(E) })
    botaotomB.addEventListener("click", () => { triadeMenor(B) })
    botaotomFs.addEventListener("click", () => { triadeMenor(Fs) })
    botaotomCs.addEventListener("click", () => { triadeMenor(Cs) })
    botaotomGs.addEventListener("click", () => { triadeMenor(Gs) })
    botaotomDs.addEventListener("click", () => { triadeMenor(Ds) })
    botaotomD.addEventListener("click", () => { triadeMenor(D) })
    botaotomG.addEventListener("click", () => { triadeMenor(G) })
    botaotomC.addEventListener("click", () => { triadeMenor(C) })
    botaotomF.addEventListener("click", () => { triadeMenor(F) })
    botaotomBb.addEventListener("click", () => { triadeMenor(Bb) })
    botaotomEb.addEventListener("click", () => { triadeMenor(Eb) })

};

botaoTriadeMenorBraçoTodo();