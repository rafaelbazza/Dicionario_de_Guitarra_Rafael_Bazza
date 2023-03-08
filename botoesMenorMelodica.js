function botaoMenorMelodicaBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("melodicaa")
    var botaotomE = document.getElementById("melodicae")
    var botaotomB = document.getElementById("melodicab")
    var botaotomFs = document.getElementById("melodicafs")
    var botaotomCs = document.getElementById("melodicacs")
    var botaotomGs = document.getElementById("melodicags")
    var botaotomDs = document.getElementById("melodicads")
    var botaotomD = document.getElementById("melodicad")
    var botaotomG = document.getElementById("melodicag")
    var botaotomC = document.getElementById("melodicac")
    var botaotomF = document.getElementById("melodicaf")
    var botaotomBb = document.getElementById("melodicabb")
    var botaotomEb = document.getElementById("melodicaeb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { menorMelodica(A) })
    botaotomE.addEventListener("click", () => { menorMelodica(E) })
    botaotomB.addEventListener("click", () => { menorMelodica(B) })
    botaotomFs.addEventListener("click", () => { menorMelodica(Fs) })
    botaotomCs.addEventListener("click", () => { menorMelodica(Cs) })
    botaotomGs.addEventListener("click", () => { menorMelodica(Gs) })
    botaotomDs.addEventListener("click", () => { menorMelodica(Ds) })
    botaotomD.addEventListener("click", () => { menorMelodica(D) })
    botaotomG.addEventListener("click", () => { menorMelodica(G) })
    botaotomC.addEventListener("click", () => { menorMelodica(C) })
    botaotomF.addEventListener("click", () => { menorMelodica(F) })
    botaotomBb.addEventListener("click", () => { menorMelodica(Bb) })
    botaotomEb.addEventListener("click", () => { menorMelodica(Eb) })

};

botaoMenorMelodicaBraçoTodo();