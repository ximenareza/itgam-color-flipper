const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//Get the button element
const btn = document.getElementById("btn");
//Get the color element
const  color = document.querySelector(".color");

// Add event listener to the button
btn.addEventListener("click", ()=>{
    //Obtener Numero Aleatorio entre 0 y 3
    const randomNumber = getRandomNumber();
    //Seleccionado un Elemento
    // del arreglo de colors
    const colorPicked = colors[randomNumber];
    // Cambia el color del Body
    document.body.style.backgroundColor = colorPicked;
    //Cambiar el color del Texto
    color.textContent = colorPicked;
});

//FUNCION PARA OBTENER UN NUMERO ALEATORIO
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

/* TIPOS DE FUNCTION

function sayHi01(){
    console.log("Hi⭐")
    }

const sayHi02 = function(){
console.log("Oh my Hi 🤣")
}

const sayHi03 = ()=> { console log."Say Hi 3 🪅") } */
