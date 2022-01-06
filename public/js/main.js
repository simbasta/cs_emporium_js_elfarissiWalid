let body = document.getElementById("body")

// btns Mode nuit
let btnJour = document.getElementById("btnModeJour")
let btnNuit = document.getElementById("btnModeNuit")

btnNuit.addEventListener("click", function(){
    body.classList.add("modeNuit")
})
btnJour.addEventListener("click", function(){
    body.classList.add("modeJour")
})



console.log(btnNuit);

console.log(body);