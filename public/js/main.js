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


// header navbar collapse j'ajoute ce ommentaire car oublier ce details
btnColapse = document.getElementsByClassName("buttonColapse1")[0]
divCollapse = document.getElementsByClassName("divCollapse")[0]

btnColapse.addEventListener("click",function(){
    divCollapse.classList.remove("dNone")
})

// ____________________________________________________________
// section modal
let btnConnexion = document.getElementById("btnConnexion")
let secmodal = document.getElementsByClassName("sectionmodal1")[0]

btnConnexion.addEventListener("click", function(){
    secmodal.classList.remove("dNone")
})

console.log(secmodal);

let btnLModal2 = document.getElementById("btnLModal2")
let secmodal2 = document.getElementsByClassName("sectionmodal2")[0]

btnLModal2.addEventListener("click", function(){
    secmodal.classList.add("dNone")
    secmodal2.classList.remove("dNone")
})

// header navbar js
let navbar = document.getElementsByClassName("navbarborder")[0]
let header = document.getElementsByClassName("h1inheader")[0]
window.addEventListener("scroll", function(){
        let jssScroll = window.scrollY
        if (jssScroll >= 175) {
            navbar.classList.add("borderback")
        }
        else{
            navbar.classList.remove("borderback")
        }
    })
