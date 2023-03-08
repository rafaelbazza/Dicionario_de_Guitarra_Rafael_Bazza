

function botaoPentatonicaBluesBraçoTodo() {


    //botões braço todo 
    var botaotomC = document.getElementById("pentatonicabluesc")
    var botaotomG = document.getElementById("pentatonicabluesg")
    var botaotomD = document.getElementById("pentatonicabluesd")
    var botaotomA = document.getElementById("pentatonicabluesa")
    var botaotomE = document.getElementById("pentatonicabluese")
    var botaotomB = document.getElementById("pentatonicabluesb")
    var botaotomFs = document.getElementById("pentatonicabluesfs")
    var botaotomF = document.getElementById("pentatonicabluesf")
    var botaotomBb = document.getElementById("pentatonicabluesbb")
    var botaotomEb = document.getElementById("pentatonicablueseb")
    var botaotomAb = document.getElementById("pentatonicabluesab")
    var botaotomDb = document.getElementById("pentatonicabluesdb")
    var botaotomGb = document.getElementById("pentatonicabluesgb")


    //clicks dos botões braço todo  
    botaotomC.addEventListener("click", () => { pentaBlues(C) })
    botaotomG.addEventListener("click", () => { pentaBlues(G) })
    botaotomD.addEventListener("click", () => { pentaBlues(D) })
    botaotomA.addEventListener("click", () => { pentaBlues(A) })
    botaotomE.addEventListener("click", () => { pentaBlues(E) })
    botaotomB.addEventListener("click", () => { pentaBlues(B) })
    botaotomFs.addEventListener("click", () => { pentaBlues(Fs) })
    botaotomF.addEventListener("click", () => { pentaBlues(F) })
    botaotomBb.addEventListener("click", () => { pentaBlues(Bb) })
    botaotomEb.addEventListener("click", () => { pentaBlues(Eb) })
    botaotomAb.addEventListener("click", () => { pentaBlues(Ab) })
    botaotomDb.addEventListener("click", () => { pentaBlues(Db) })
    botaotomGb.addEventListener("click", () => { pentaBlues(Gb) })

};

botaoPentatonicaBluesBraçoTodo();