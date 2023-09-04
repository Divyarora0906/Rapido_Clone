const cs = document.getElementsByClassName("cs")[0];
const ct = document.getElementsByClassName("ct")[0];
const cs1 = document.getElementsByClassName("cs")[1];
const ct1 = document.getElementsByClassName("ct")[1]
const part_1 = document.getElementsByClassName("flex_wrapper_what")[0];
const part_2 = document.getElementsByClassName("flex_wrapper_what_2")[0];
const part_11 = document.getElementsByClassName("flex_wrapper_what")[1];
const part_22 = document.getElementsByClassName("flex_wrapper_what_2")[1];


cs.classList.add("active_in")
cs.addEventListener("click" , function(){
    console.log("CLICK")
    cs.classList.add("active_in")
    ct.classList.remove("active_in");
    part_1.style.display = "block"
    part_2.style.display = "none"

});
ct.addEventListener("click" , function(){
    console.log("CLICK")
    ct.classList.add("active_in")
    cs.classList.remove("active_in")
    part_2.style.display = "block"
    part_1.style.display = "none"

});
//SLIDER

cs1.classList.add("active_in")
cs1.addEventListener("click" , function(){
    console.log("CLICK")
    cs1.classList.add("active_in")
    ct1.classList.remove("active_in");
    part_11.style.display = "block"
    part_22.style.display = "none"

});
ct1.addEventListener("click" , function(){
    console.log("CLICK")
    ct1.classList.add("active_in")
    cs1.classList.remove("active_in")
    part_22.style.display = "block"
    part_11.style.display = "none"

});


let ham = document.getElementsByClassName("fa-bars")[0];
let acti = document.getElementsByTagName("ul")[0];

ham.addEventListener("click", () => {
  acti.classList.toggle("Activate");
  console.log(acti)
});
