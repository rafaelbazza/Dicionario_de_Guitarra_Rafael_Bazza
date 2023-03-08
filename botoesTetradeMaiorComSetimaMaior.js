

function botaoTetradeMaiorComSetimaMaiorBraçoTodo() {


    //botões braço todo 
    var botaotomC = document.getElementById("maj7c")
    var botaotomG = document.getElementById("maj7g")
    var botaotomD = document.getElementById("maj7d")
    var botaotomA = document.getElementById("maj7a")
    var botaotomE = document.getElementById("maj7e")
    var botaotomB = document.getElementById("maj7b")
    var botaotomFs = document.getElementById("maj7fs")
    var botaotomF = document.getElementById("maj7f")
    var botaotomBb = document.getElementById("maj7bb")
    var botaotomEb = document.getElementById("maj7eb")
    var botaotomAb = document.getElementById("maj7ab")
    var botaotomDb = document.getElementById("maj7db")
    var botaotomGb = document.getElementById("maj7gb")


    //clicks dos botões braço todo  
    botaotomC.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(C) })
    botaotomG.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(G) })
    botaotomD.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(D) })
    botaotomA.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(A) })
    botaotomE.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(E) })
    botaotomB.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(B) })
    botaotomFs.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(Fs) })
    botaotomF.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(F) })
    botaotomBb.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(Bb) })
    botaotomEb.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(Eb) })
    botaotomAb.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(Ab) })
    botaotomDb.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(Db) })
    botaotomGb.addEventListener("click", () => { tetradeMaiorcomSetimaMaior(Gb) })

};

botaoTetradeMaiorComSetimaMaiorBraçoTodo();