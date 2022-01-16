

var body = document.getElementById("body")





// header navbar collapse j'ajoute ce ommentaire car oublier ce details
btnColapse = document.getElementsByClassName("buttonColapse1")[0]
divCollapse = document.getElementsByClassName("divCollapse")[0]


btnColapse.addEventListener("click", function () {

  divCollapse.classList.toggle("dNone")
  divCollapse.classList.toggle("nodNone")

})


// _______________________________________
// // section modal
let btnConnexion = document.getElementById("btnConnexion")

// // celui des medias queries
// btnConnexion2 = document.getElementById("btnConnexion2")

var btnDecoModal = document.getElementsByClassName("decoModal")[0]
var btnDecoModal1 = document.getElementsByClassName("decoModal1")[0]
console.log(btnDecoModal1);

var secmodal = document.getElementsByClassName("sectionmodal1")[0]
var secmodal2 = document.getElementsByClassName("sectionmodal2")[0]



btnConnexion.addEventListener("click", function () {
  secmodal.classList.remove("dNone")

  btnDecoModal.addEventListener("click", function () {
    secmodal.classList.add("dNone")
  })

})
console.log(secmodal);
// btn aller se connecter
let btnLModal2 = document.getElementById("btnLModal2")

btnLModal2.addEventListener("click", function () {
  secmodal.classList.add("dNone")
  secmodal2.classList.remove("dNone")

  btnDecoModal1.addEventListener("click", function () {
    secmodal2.classList.add("dNone")
  })
})

// btn retrourner s'inscrire
let btnLModal3 = document.getElementById("btnLModal3")

btnLModal3.addEventListener("click", function () {
  secmodal2.classList.add("dNone")
  secmodal.classList.remove("dNone")

})

// ___________________________________________________________________________

let divModal = document.getElementsByClassName("divGmodal")[0]
let divGmodal2 = document.getElementsByClassName("divGmodal1")[0]

// ____________________________________________________________________________
// btns Mode nuit
let btnNuit = document.querySelector(".btnModeNui1")
let btnNuit2 = document.querySelector(".btnModeNui2")

btnNuit.addEventListener("click", function () {
  document.body.classList.toggle("modeNuit")
  document.body.classList.toggle("modeJour")

  divModal.classList.toggle("modeNuit")
  divModal.classList.toggle("modeJour")

  divGmodal2.classList.toggle("modeNuit")
  divGmodal2.classList.toggle("modeJour")

  // ntBtn.classList.toggle('BtnModentsun')
  // ntBtn.classList.toggle(' BtnModent')
})
// le btn dans les medias queries
btnNuit2.addEventListener("click", function () {
  document.body.classList.toggle("modeNuit")
  document.body.classList.toggle("modeJour")

  divModal.classList.toggle("modeNuit")
  divModal.classList.toggle("modeJour")

  divGmodal2.classList.toggle("modeNuit")
  divGmodal2.classList.toggle("modeJour")

  // ntBtn.classList.toggle('BtnModentsun')
  // ntBtn.classList.toggle(' BtnModent')
})

// pour que le btn mode nuit change de couleur 
btnNuit.addEventListener("click", function () {
  btnNuit.classList.toggle("btnModeNui11")
  btnNuit.classList.toggle("btnModeNui1")
})

btnNuit2.addEventListener("click", function () {
  btnNuit2.classList.toggle("btnModeNui12")
  btnNuit2.classList.toggle("btnModeNui2")
})
// ______________________________________________________________________
// header navbar js
let navbar = document.getElementsByClassName("navbarborder")[0]
let header = document.getElementsByClassName("h1inheader")[0]
window.addEventListener("scroll", function () {
  let jssScroll = window.scrollY
  if (jssScroll >= 175) {
    navbar.classList.add("borderback")
  }
  else {
    navbar.classList.remove("borderback")
  }
})

// ________________________________________________________________________
// CAROUSEL

const buttonsWrapper = document.querySelector(".btnCarou");
const slides = document.querySelector(".G2divInSection5");



function playcarousel() {
  buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      Array.from(buttonsWrapper.children).forEach(item =>
        item.classList.remove("active")
      );
      // quand on appuie sur l'uns ces btn le carousel slide a au % demander
      if (e.target.classList.contains("first")) {
        slides.style.transform = "translateX(-0%)";

      } else if (e.target.classList.contains("second")) {
        slides.style.transform = "translateX(-25.33333333333333%)";

      } else if (e.target.classList.contains('third')) {
        slides.style.transform = 'translatex(-50.6666666667%)';

      } else if (e.target.classList.contains('quatriem')) {
        slides.style.transform = 'translatex(-74.98999999%)';

      }


    }
  });

  
}

playcarousel()
// -----------------------------------------------------------------------


// CAROUSEL AUTO

let pourcentage = 0;

setInterval(() => {
  if (pourcentage < -75) {
    pourcentage = 0
  }
  pourcentage -= 25.33333333333333
  
  slides.style.transform = "translateX(" + pourcentage + "%)";

  console.log(pourcentage);

}, 5000);



// ___________________________________________________________________________________________