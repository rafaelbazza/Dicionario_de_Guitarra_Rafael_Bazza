function botaoTetradeMenorComSetimaMaiorBraçoTodo() {


    //botões braço todo 
    var botaotomA = document.getElementById("mMaj7a")
    var botaotomE = document.getElementById("mMaj7e")
    var botaotomB = document.getElementById("mMaj7b")
    var botaotomFs = document.getElementById("mMaj7fs")
    var botaotomCs = document.getElementById("mMaj7cs")
    var botaotomGs = document.getElementById("mMaj7gs")
    var botaotomDs = document.getElementById("mMaj7ds")
    var botaotomD = document.getElementById("mMaj7d")
    var botaotomG = document.getElementById("mMaj7g")
    var botaotomC = document.getElementById("mMaj7c")
    var botaotomF = document.getElementById("mMaj7f")
    var botaotomBb = document.getElementById("mMaj7bb")
    var botaotomEb = document.getElementById("mMaj7eb")


    //clicks dos botões braço todo  
    botaotomA.addEventListener("click", () => { tetradeMenorcomSetimaMaior(A) })
    botaotomE.addEventListener("click", () => { tetradeMenorcomSetimaMaior(E) })
    botaotomB.addEventListener("click", () => { tetradeMenorcomSetimaMaior(B) })
    botaotomFs.addEventListener("click", () => { tetradeMenorcomSetimaMaior(Fs) })
    botaotomCs.addEventListener("click", () => { tetradeMenorcomSetimaMaior(Cs) })
    botaotomGs.addEventListener("click", () => { tetradeMenorcomSetimaMaior(Gs) })
    botaotomDs.addEventListener("click", () => { tetradeMenorcomSetimaMaior(Ds) })
    botaotomD.addEventListener("click", () => { tetradeMenorcomSetimaMaior(D) })
    botaotomG.addEventListener("click", () => { tetradeMenorcomSetimaMaior(G) })
    botaotomC.addEventListener("click", () => { tetradeMenorcomSetimaMaior(C) })
    botaotomF.addEventListener("click", () => { tetradeMenorcomSetimaMaior(F) })
    botaotomBb.addEventListener("click", () => { tetradeMenorcomSetimaMaior(Bb) })
    botaotomEb.addEventListener("click", () => { tetradeMenorcomSetimaMaior(Eb) })

};

botaoTetradeMenorComSetimaMaiorBraçoTodo();