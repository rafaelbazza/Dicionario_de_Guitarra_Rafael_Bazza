

function botaoPentatonicaBraçoTodo() {


    //botões braço todo 
    var botaotomC = document.getElementById("pentatonicac")
    var botaotomG = document.getElementById("pentatonicag")
    var botaotomD = document.getElementById("pentatonicad")
    var botaotomA = document.getElementById("pentatonicaa")
    var botaotomE = document.getElementById("pentatonicae")
    var botaotomB = document.getElementById("pentatonicab")
    var botaotomFs = document.getElementById("pentatonicafs")
    var botaotomF = document.getElementById("pentatonicaf")
    var botaotomBb = document.getElementById("pentatonicabb")
    var botaotomEb = document.getElementById("pentatonicaeb")
    var botaotomAb = document.getElementById("pentatonicaab")
    var botaotomDb = document.getElementById("pentatonicadb")
    var botaotomGb = document.getElementById("pentatonicagb")


    //clicks dos botões braço todo  
    botaotomC.addEventListener("click", () => { pentatonica(C) })
    botaotomG.addEventListener("click", () => { pentatonica(G) })
    botaotomD.addEventListener("click", () => { pentatonica(D) })
    botaotomA.addEventListener("click", () => { pentatonica(A) })
    botaotomE.addEventListener("click", () => { pentatonica(E) })
    botaotomB.addEventListener("click", () => { pentatonica(B) })
    botaotomFs.addEventListener("click", () => { pentatonica(Fs) })
    botaotomF.addEventListener("click", () => { pentatonica(F) })
    botaotomBb.addEventListener("click", () => { pentatonica(Bb) })
    botaotomEb.addEventListener("click", () => { pentatonica(Eb) })
    botaotomAb.addEventListener("click", () => { pentatonica(Ab) })
    botaotomDb.addEventListener("click", () => { pentatonica(Db) })
    botaotomGb.addEventListener("click", () => { pentatonica(Gb) })

};

botaoPentatonicaBraçoTodo();