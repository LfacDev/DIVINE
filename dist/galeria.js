'use strict'


/*****************  GALERIA ********************/

const imgGV = document.querySelectorAll("#img"),
      lightbox = document.querySelector("#lightbox"),
      imgLightbox = document.querySelector(".img_mostrar"),
      copy = document.querySelector("#copy");

      
      imgGV.forEach((img, i) =>{
        imgGV[i].addEventListener('click', (e)=>{
          e.preventDefault();
          //obtendremos los atributos src y alt
          console.log(imgGV[i].getAttribute('src'));
            añadirImagen(img.getAttribute('src'), img.getAttribute('alt')); 
        });
      })

      const añadirImagen = (src, alt)=>{
        lightbox.classList.toggle('mostrar');
        //que el src de la imagen del lightbox sea igual al src que nos mandan como atributo
        imgLightbox.src = src;
        console.log(imgLightbox);
        copy.innerHTML= alt;

      } 

      //para que cuando toque alguna parte del lightbox se cierre 
       lightbox.addEventListener("click",()=>{
        lightbox.classList.toggle('mostrar');
      }); 