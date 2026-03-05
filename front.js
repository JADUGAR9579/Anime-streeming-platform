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


let ep1 = document.getElementById("ep-chainsaw-man");
let ep2 = document.getElementById("ep-AOT");
let ep3 = document.getElementById("ep-Horimiya");
let ep4 = document.getElementById("ep-Gachiakuta");
let ep5 = document.getElementById("ep-Mushoku-tensei");

ep1.addEventListener('mouseover', function() {
    ep1.style.background = "#381b35";
});
ep1.addEventListener('mouseout', function() {
    ep1.style.backgroundImage = "linear-gradient(to left, #2a2538, #3f3169)";
});
ep2.addEventListener('mouseover', function() {
    ep2.style.background = "#381b35";
});
ep2.addEventListener('mouseout', function() {
    ep2.style.backgroundImage = "linear-gradient(to left, #2a2538, #3f3169)";
});
ep3.addEventListener('mouseover', function() {
    ep3.style.background = "#381b35";
});
ep3.addEventListener('mouseout', function() {
    ep3.style.backgroundImage = "linear-gradient(to left, #2a2538, #3f3169)";
});
ep4.addEventListener('mouseover', function() {
    ep4.style.background = "#381b35";
});
ep4.addEventListener('mouseout', function() {
    ep4.style.backgroundImage = "linear-gradient(to left, #2a2538, #3f3169)";
});
ep5.addEventListener('mouseover', function() {
    ep5.style.background = "#381b35";
});
ep5.addEventListener('mouseout', function() {
    ep5.style.backgroundImage = "linear-gradient(to left, #2a2538, #3f3169)";
});