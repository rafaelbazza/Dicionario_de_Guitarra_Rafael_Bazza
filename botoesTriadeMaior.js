

function botaoTriadeMaiorBraçoTodo() {


    //botões braço todo 
    var botaotomC = document.getElementById("triademaiorc")
    var botaotomG = document.getElementById("triademaiorg")
    var botaotomD = document.getElementById("triademaiord")
    var botaotomA = document.getElementById("triademaiora")
    var botaotomE = document.getElementById("triademaiore")
    var botaotomB = document.getElementById("triademaiorb")
    var botaotomFs = document.getElementById("triademaiorfs")
    var botaotomF = document.getElementById("triademaiorf")
    var botaotomBb = document.getElementById("triademaiorbb")
    var botaotomEb = document.getElementById("triademaioreb")
    var botaotomAb = document.getElementById("triademaiorab")
    var botaotomDb = document.getElementById("triademaiordb")
    var botaotomGb = document.getElementById("triademaiorgb")


    //clicks dos botões braço todo  
    botaotomC.addEventListener("click", () => { triadeMaior(C) })
    botaotomG.addEventListener("click", () => { triadeMaior(G) })
    botaotomD.addEventListener("click", () => { triadeMaior(D) })
    botaotomA.addEventListener("click", () => { triadeMaior(A) })
    botaotomE.addEventListener("click", () => { triadeMaior(E) })
    botaotomB.addEventListener("click", () => { triadeMaior(B) })
    botaotomFs.addEventListener("click", () => { triadeMaior(Fs) })
    botaotomF.addEventListener("click", () => { triadeMaior(F) })
    botaotomBb.addEventListener("click", () => { triadeMaior(Bb) })
    botaotomEb.addEventListener("click", () => { triadeMaior(Eb) })
    botaotomAb.addEventListener("click", () => { triadeMaior(Ab) })
    botaotomDb.addEventListener("click", () => { triadeMaior(Db) })
    botaotomGb.addEventListener("click", () => { triadeMaior(Gb) })

};

botaoTriadeMaiorBraçoTodo();