let nishbutton1 = document.getElementById("nish-button-1");
let nishbutton2 = document.getElementById("nish-button-2");
let nishbutton3 = document.getElementById("nish-button-3");
let nishbutton4 = document.getElementById("nish-button-4");
let nishbutton5 = document.getElementById("nish-button-5");

nishbutton1.addEventListener('mouseover', function() {
    nishbutton1.style.background = "linear-gradient(to top right,  #f803fc, #0320fc )";
    nishbutton2.style.background = "#2d2e2d";
    nishbutton3.style.background = "#2d2e2d";
    nishbutton4.style.background = "#2d2e2d";
    nishbutton5.style.background = "#2d2e2d";
});
nishbutton2.addEventListener('mouseover', function() {
    nishbutton1.style.background = "#2d2e2d";
    nishbutton2.style.background = "linear-gradient(to top right,  #f803fc, #0320fc )";
    nishbutton3.style.background = "#2d2e2d";
    nishbutton4.style.background = "#2d2e2d";
    nishbutton5.style.background = "#2d2e2d";
});
nishbutton3.addEventListener('mouseover', function() {
    nishbutton1.style.background = "#2d2e2d";
    nishbutton2.style.background = "#2d2e2d";
    nishbutton3.style.background = "linear-gradient(to top right,  #f803fc, #0320fc )";
    nishbutton4.style.background = "#2d2e2d";
    nishbutton5.style.background = "#2d2e2d";
});
nishbutton4.addEventListener('mouseover', function() {
    nishbutton1.style.background = "#2d2e2d";
    nishbutton2.style.background = "#2d2e2d";
    nishbutton3.style.background = "#2d2e2d";
    nishbutton4.style.background = "linear-gradient(to top right, #f803fc, #0320fc)";
    nishbutton5.style.background = "#2d2e2d";
});
nishbutton5.addEventListener('mouseover', function() {
    nishbutton1.style.background = "#2d2e2d";
    nishbutton2.style.background = "#2d2e2d";
    nishbutton3.style.background = "#2d2e2d";
    nishbutton4.style.background = "#2d2e2d";
    nishbutton5.style.background = "linear-gradient(to top right, #f803fc, #0320fc)";
});
