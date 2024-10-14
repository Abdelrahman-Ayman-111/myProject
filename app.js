// let heart = document.getElementById("heart")
let hearts = document.querySelectorAll(".image i")
let header = document.getElementById("header")


window.onscroll = function(){
    if(window.scrollY >= 105){
        header.style.backgroundColor = "#1b2cc6"
    } else{
        header.style.backgroundColor = ""
    }
}

hearts.forEach(function(heart) {
    heart.onclick = function() {
        if (heart.style.color == "white") {
            heart.style.color = "red";
        } else {
            heart.style.color = "white";
        }
    };
});