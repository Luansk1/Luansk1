let character = document.getElementById("character");
let block = document.getElementById("block");

function jump(){

    if (character.classList != "animation"){
        character.classList.add("animation");
    }
    
    setTimeout(function(){
        character.classList.remove("animation");
    }, 400)
}

let check = setInterval(function(){
    let characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft= 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft< 20 && blockLeft > 0 && characterTop >= 130){
        block.classList.remove("start");
        character.style.animation="none";
        alert("Du hast Verloren");
    }
})

function start(){
    if (block.classList != "start"){
        block.classList.add("start");
    }
}

let count = document.getElementById("count") = () =>{

    
}