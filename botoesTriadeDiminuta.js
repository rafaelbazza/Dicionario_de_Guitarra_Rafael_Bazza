function botaoTriadeDiminutaBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("triadediminutaa")
    var botaotomE = document.getElementById("triadediminutae")
    var botaotomB = document.getElementById("triadediminutab")
    var botaotomFs = document.getElementById("triadediminutafs")
    var botaotomCs = document.getElementById("triadediminutacs")
    var botaotomGs = document.getElementById("triadediminutags")
    var botaotomDs = document.getElementById("triadediminutads")
    var botaotomD = document.getElementById("triadediminutad")
    var botaotomG = document.getElementById("triadediminutag")
    var botaotomC = document.getElementById("triadediminutac")
    var botaotomF = document.getElementById("triadediminutaf")
    var botaotomBb = document.getElementById("triadediminutabb")
    var botaotomEb = document.getElementById("triadediminutaeb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { triadeDiminuta(A) })
    botaotomE.addEventListener("click", () => { triadeDiminuta(E) })
    botaotomB.addEventListener("click", () => { triadeDiminuta(B) })
    botaotomFs.addEventListener("click", () => { triadeDiminuta(Fs) })
    botaotomCs.addEventListener("click", () => { triadeDiminuta(Cs) })
    botaotomGs.addEventListener("click", () => { triadeDiminuta(Gs) })
    botaotomDs.addEventListener("click", () => { triadeDiminuta(Ds) })
    botaotomD.addEventListener("click", () => { triadeDiminuta(D) })
    botaotomG.addEventListener("click", () => { triadeDiminuta(G) })
    botaotomC.addEventListener("click", () => { triadeDiminuta(C) })
    botaotomF.addEventListener("click", () => { triadeDiminuta(F) })
    botaotomBb.addEventListener("click", () => { triadeDiminuta(Bb) })
    botaotomEb.addEventListener("click", () => { triadeDiminuta(Eb) })

};

botaoTriadeDiminutaBraçoTodo();