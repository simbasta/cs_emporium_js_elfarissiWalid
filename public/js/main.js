

var body = document.getElementById("body")

// btns Mode nuit
let btnNuit = document.querySelector("button")
btnNuit.addEventListener("click", function(){
    document.body.classList.toggle("modeNuit")
    document.body.classList.toggle("modeJour") 

    // ntBtn.classList.toggle('BtnModentsun')
    // ntBtn.classList.toggle(' BtnModent')
})
console.log(document.body);
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

// ________________________________________________________________________
// carousel

const buttonsWrapper = document.querySelector(".btnCarou");
const slides = document.querySelector(".G2divInSection5");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-25.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-50.6666666667%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('quatriem')){
        slides.style.transform = 'translatex(-74.98999999%)';
        e.target.classList.add('active');
      }
  }
});