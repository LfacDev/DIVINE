'use strict'
/* INDEX */

const btnVegan = document.querySelector("#vegan");
const btnTrad = document.querySelector("#trad");
const btn = document.querySelector(".btnI");
const iconoI = document.querySelector("#iconoI");
const iconoI2 = document.querySelector("#iconoI2");
const iconoI3 = document.querySelector("#iconoI3");
const mainIndex = document.querySelector("#mainIndex");
const img1 = document.querySelector("#img1");



      document.addEventListener("mousemove", (e)=>{
        if(e.target === btnTrad){
            //toogle (agrega la clase si no existe, si existe la remueve)
            mainIndex.classList.add("fondo2T");
            btn.classList.add("inputT");
            btnTrad.classList.add("inputT");
            iconoI.classList.add("IconoT");
            iconoI2.classList.add("IconoT");
            iconoI3.classList.add("IconoT");
            img1.classList.add("img1T");

            //cambiar imagen
            document.getElementById("img1").src = "./content/img/logoTrad.png";
            
            
        }else if(e.target === btnVegan){
            mainIndex.classList.remove("fondo2T");
            btn.classList.remove("inputT");
            btnTrad.classList.remove("inputT");
            iconoI.classList.remove("IconoT");
            iconoI2.classList.remove("IconoT");
            iconoI3.classList.remove("IconoT");
            img1.classList.remove("img1T");

            //cambiar imagen
            document.getElementById("img1").src = "./content/img/logoVegano.png";
            
        }
    }); 