function burger(burger) {
    var Topnav = document.getElementById("myTopnav");
    if (Topnav.className === "topnav") {
        Topnav.className += " responsive";
    } else {
        Topnav.className = "topnav";
    }
    burger.classList.toggle("change");
}
