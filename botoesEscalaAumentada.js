

function botaoEscalaAumentadaBraçoTodo() {


    //botões braço todo 
    var botaotomC = document.getElementById("aumentadac")
    var botaotomG = document.getElementById("aumentadag")
    var botaotomD = document.getElementById("aumentadad")
    var botaotomA = document.getElementById("aumentadaa")
    var botaotomE = document.getElementById("aumentadae")
    var botaotomB = document.getElementById("aumentadab")
    var botaotomFs = document.getElementById("aumentadafs")
    var botaotomF = document.getElementById("aumentadaf")
    var botaotomBb = document.getElementById("aumentadabb")
    var botaotomEb = document.getElementById("aumentadaeb")
    var botaotomAb = document.getElementById("aumentadaab")
    var botaotomDb = document.getElementById("aumentadadb")
    var botaotomGb = document.getElementById("aumentadagb")


    //clicks dos botões braço todo  
    botaotomC.addEventListener("click", () => { escalaAumentada(C) })
    botaotomG.addEventListener("click", () => { escalaAumentada(G) })
    botaotomD.addEventListener("click", () => { escalaAumentada(D) })
    botaotomA.addEventListener("click", () => { escalaAumentada(A) })
    botaotomE.addEventListener("click", () => { escalaAumentada(E) })
    botaotomB.addEventListener("click", () => { escalaAumentada(B) })
    botaotomFs.addEventListener("click", () => { escalaAumentada(Fs) })
    botaotomF.addEventListener("click", () => { escalaAumentada(F) })
    botaotomBb.addEventListener("click", () => { escalaAumentada(Bb) })
    botaotomEb.addEventListener("click", () => { escalaAumentada(Eb) })
    botaotomAb.addEventListener("click", () => { escalaAumentada(Ab) })
    botaotomDb.addEventListener("click", () => { escalaAumentada(Db) })
    botaotomGb.addEventListener("click", () => { escalaAumentada(Gb) })

};

botaoEscalaAumentadaBraçoTodo();