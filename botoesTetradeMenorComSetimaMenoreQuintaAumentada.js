function botaoTetradeMenorComSetimaMenorBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("m7b5a")
    var botaotomE = document.getElementById("m7b5e")
    var botaotomB = document.getElementById("m7b5b")
    var botaotomFs = document.getElementById("m7b5fs")
    var botaotomCs = document.getElementById("m7b5cs")
    var botaotomGs = document.getElementById("m7b5gs")
    var botaotomDs = document.getElementById("m7b5ds")
    var botaotomD = document.getElementById("m7b5d")
    var botaotomG = document.getElementById("m7b5g")
    var botaotomC = document.getElementById("m7b5c")
    var botaotomF = document.getElementById("m7b5f")
    var botaotomBb = document.getElementById("m7b5bb")
    var botaotomEb = document.getElementById("m7b5eb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { tetradeMeioDiminuta(A) })
    botaotomE.addEventListener("click", () => { tetradeMeioDiminuta(E) })
    botaotomB.addEventListener("click", () => { tetradeMeioDiminuta(B) })
    botaotomFs.addEventListener("click", () => { tetradeMeioDiminuta(Fs) })
    botaotomCs.addEventListener("click", () => { tetradeMeioDiminuta(Cs) })
    botaotomGs.addEventListener("click", () => { tetradeMeioDiminuta(Gs) })
    botaotomDs.addEventListener("click", () => { tetradeMeioDiminuta(Ds) })
    botaotomD.addEventListener("click", () => { tetradeMeioDiminuta(D) })
    botaotomG.addEventListener("click", () => { tetradeMeioDiminuta(G) })
    botaotomC.addEventListener("click", () => { tetradeMeioDiminuta(C) })
    botaotomF.addEventListener("click", () => { tetradeMeioDiminuta(F) })
    botaotomBb.addEventListener("click", () => { tetradeMeioDiminuta(Bb) })
    botaotomEb.addEventListener("click", () => { tetradeMeioDiminuta(Eb) })

};

botaoTetradeMenorComSetimaMenorBraçoTodo();