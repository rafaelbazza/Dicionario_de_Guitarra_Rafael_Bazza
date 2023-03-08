function botaoMenorHarmonicaBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("harmonicaa")
    var botaotomE = document.getElementById("harmonicae")
    var botaotomB = document.getElementById("harmonicab")
    var botaotomFs = document.getElementById("harmonicafs")
    var botaotomCs = document.getElementById("harmonicacs")
    var botaotomGs = document.getElementById("harmonicags")
    var botaotomDs = document.getElementById("harmonicads")
    var botaotomD = document.getElementById("harmonicad")
    var botaotomG = document.getElementById("harmonicag")
    var botaotomC = document.getElementById("harmonicac")
    var botaotomF = document.getElementById("harmonicaf")
    var botaotomBb = document.getElementById("harmonicabb")
    var botaotomEb = document.getElementById("harmonicaeb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { menorHarmonica(A) })
    botaotomE.addEventListener("click", () => { menorHarmonica(E) })
    botaotomB.addEventListener("click", () => { menorHarmonica(B) })
    botaotomFs.addEventListener("click", () => { menorHarmonica(Fs) })
    botaotomCs.addEventListener("click", () => { menorHarmonica(Cs) })
    botaotomGs.addEventListener("click", () => { menorHarmonica(Gs) })
    botaotomDs.addEventListener("click", () => { menorHarmonica(Ds) })
    botaotomD.addEventListener("click", () => { menorHarmonica(D) })
    botaotomG.addEventListener("click", () => { menorHarmonica(G) })
    botaotomC.addEventListener("click", () => { menorHarmonica(C) })
    botaotomF.addEventListener("click", () => { menorHarmonica(F) })
    botaotomBb.addEventListener("click", () => { menorHarmonica(Bb) })
    botaotomEb.addEventListener("click", () => { menorHarmonica(Eb) })

};

botaoMenorHarmonicaBraçoTodo();