

function botaoTetradeMaiorComSetimaMenorBraçoTodo() {


    //botões braço todo 
    var botaotomC = document.getElementById("7c")
    var botaotomG = document.getElementById("7g")
    var botaotomD = document.getElementById("7d")
    var botaotomA = document.getElementById("7a")
    var botaotomE = document.getElementById("7e")
    var botaotomB = document.getElementById("7b")
    var botaotomFs = document.getElementById("7fs")
    var botaotomF = document.getElementById("7f")
    var botaotomBb = document.getElementById("7bb")
    var botaotomEb = document.getElementById("7eb")
    var botaotomAb = document.getElementById("7ab")
    var botaotomDb = document.getElementById("7db")
    var botaotomGb = document.getElementById("7gb")


    //clicks dos botões braço todo  
    botaotomC.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(C) })
    botaotomG.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(G) })
    botaotomD.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(D) })
    botaotomA.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(A) })
    botaotomE.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(E) })
    botaotomB.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(B) })
    botaotomFs.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(Fs) })
    botaotomF.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(F) })
    botaotomBb.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(Bb) })
    botaotomEb.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(Eb) })
    botaotomAb.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(Ab) })
    botaotomDb.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(Db) })
    botaotomGb.addEventListener("click", () => { tetradeMaiorcomSetimaMenor(Gb) })

};

botaoTetradeMaiorComSetimaMenorBraçoTodo();