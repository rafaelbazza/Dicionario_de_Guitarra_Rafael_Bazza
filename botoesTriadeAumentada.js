

function botaoTriadeAumentadaBraçoTodo() {


    //botões braço todo 
    var botaotomC = document.getElementById("triadeaumentadac")
    var botaotomG = document.getElementById("triadeaumentadag")
    var botaotomD = document.getElementById("triadeaumentadad")
    var botaotomA = document.getElementById("triadeaumentadaa")
    var botaotomE = document.getElementById("triadeaumentadae")
    var botaotomB = document.getElementById("triadeaumentadab")
    var botaotomFs = document.getElementById("triadeaumentadafs")
    var botaotomF = document.getElementById("triadeaumentadaf")
    var botaotomBb = document.getElementById("triadeaumentadabb")
    var botaotomEb = document.getElementById("triadeaumentadaeb")
    var botaotomAb = document.getElementById("triadeaumentadaab")
    var botaotomDb = document.getElementById("triadeaumentadadb")
    var botaotomGb = document.getElementById("triadeaumentadagb")


    //clicks dos botões braço todo  
    botaotomC.addEventListener("click", () => { triadeAumentada(C) })
    botaotomG.addEventListener("click", () => { triadeAumentada(G) })
    botaotomD.addEventListener("click", () => { triadeAumentada(D) })
    botaotomA.addEventListener("click", () => { triadeAumentada(A) })
    botaotomE.addEventListener("click", () => { triadeAumentada(E) })
    botaotomB.addEventListener("click", () => { triadeAumentada(B) })
    botaotomFs.addEventListener("click", () => { triadeAumentada(Fs) })
    botaotomF.addEventListener("click", () => { triadeAumentada(F) })
    botaotomBb.addEventListener("click", () => { triadeAumentada(Bb) })
    botaotomEb.addEventListener("click", () => { triadeAumentada(Eb) })
    botaotomAb.addEventListener("click", () => { triadeAumentada(Ab) })
    botaotomDb.addEventListener("click", () => { triadeAumentada(Db) })
    botaotomGb.addEventListener("click", () => { triadeAumentada(Gb) })

};

botaoTriadeAumentadaBraçoTodo();