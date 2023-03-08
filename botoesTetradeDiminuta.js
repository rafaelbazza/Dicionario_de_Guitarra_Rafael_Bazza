function botaoTetradeDiminutaBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("tetradediminutaa")
    var botaotomE = document.getElementById("tetradediminutae")
    var botaotomB = document.getElementById("tetradediminutab")
    var botaotomFs = document.getElementById("tetradediminutafs")
    var botaotomCs = document.getElementById("tetradediminutacs")
    var botaotomGs = document.getElementById("tetradediminutags")
    var botaotomDs = document.getElementById("tetradediminutads")
    var botaotomD = document.getElementById("tetradediminutad")
    var botaotomG = document.getElementById("tetradediminutag")
    var botaotomC = document.getElementById("tetradediminutac")
    var botaotomF = document.getElementById("tetradediminutaf")
    var botaotomBb = document.getElementById("tetradediminutabb")
    var botaotomEb = document.getElementById("tetradediminutaeb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { tetradeDiminuta(A) })
    botaotomE.addEventListener("click", () => { tetradeDiminuta(E) })
    botaotomB.addEventListener("click", () => { tetradeDiminuta(B) })
    botaotomFs.addEventListener("click", () => { tetradeDiminuta(Fs) })
    botaotomCs.addEventListener("click", () => { tetradeDiminuta(Cs) })
    botaotomGs.addEventListener("click", () => { tetradeDiminuta(Gs) })
    botaotomDs.addEventListener("click", () => { tetradeDiminuta(Ds) })
    botaotomD.addEventListener("click", () => { tetradeDiminuta(D) })
    botaotomG.addEventListener("click", () => { tetradeDiminuta(G) })
    botaotomC.addEventListener("click", () => { tetradeDiminuta(C) })
    botaotomF.addEventListener("click", () => { tetradeDiminuta(F) })
    botaotomBb.addEventListener("click", () => { tetradeDiminuta(Bb) })
    botaotomEb.addEventListener("click", () => { tetradeDiminuta(Eb) })

};

botaoTetradeDiminutaBraçoTodo();