'use strict'



/* HOME-VEGANO */

const homeSlider = document.querySelector("#Contenedor_slider"),
      punto  = document.querySelectorAll("#punto");

      /* recorremos los puntos */
      punto.forEach((cadaPunto, i )=>{
        
         /* a cada punto le hacemos un evento de escucha de tipo click */
         punto[i].addEventListener("click", ()=>{
            /* obtener la posicion del punto */
            let posicion = i;

            /* aplicar un trasnform al homeSlider */
            /* operacion = posicion * -33.33 esto para que las imagenes e vayan desplzando a nedida que presionamos los botones */
            let operacion = posicion * -33.33;
            homeSlider.style.transform = `translateX(${operacion}%)`;

            
            /* quitamos la clase activo a todos los puntos */
            punto.forEach(( cadaPunto, i) =>{
                punto[i].classList.remove('activo');
            });
            //le ponemos la clase activo al punto seleccionado
            punto[i].classList.add('activo');
            
         });

      })
       //homeSlider.style.transform = `translateX(${0}%)`;

       /* tiene un retraso por el setTimeout de 6000 */
       let contador = 0;

      setInterval(()=>{
        let ope = -33.33* contador;
            homeSlider.style.transform = `translateX(${ope}%)`;
            contador++;
        
        if(contador>=2){
            setTimeout(()=>{
            homeSlider.style.transform = `translateX(${0}%)`; 
            contador=0;

            },6000)
        }
      },4000)


 /* SECCION ESPECIALIDADES */    
 const contenedor = document.querySelector("#parrafo_container"),
 subtitulos  = document.querySelectorAll("#subtitle");

 /* recorremos los puntos */
 subtitulos.forEach((cadaSub, i )=>{
   
    /* a cada punto le hacemos un evento de escucha de tipo click */
    subtitulos[i].addEventListener("click", ()=>{
       /* obtener la posicion del punto */
       let posicion = i;
       console.log(posicion);

       /* aplicar un trasnform al homeSlider */
       /* operacion = posicion * -33.33 esto para que las imagenes e vayan desplzando a nedida que presionamos los botones */
       let operacion = posicion * -33.33;
       contenedor.style.transform = `translateX(${operacion}%)`;

       /* quitamos la clase activo a todos los puntos */
       subtitulos.forEach(( cadaSub, i) =>{
        subtitulos[i].classList.remove('border');
        
        });
        //le ponemos la clase activo al punto seleccionado
        subtitulos[i].classList.add('border');
        

    });

 })


 /* SECCION TESTIMONIOS */

 const contenedorT = document.querySelector("#test_container");

  let contadorT = 0;

      setInterval(()=>{
        contenedorT.style.transform = `translateX(${-33.33*contadorT}%)`;
            contadorT++;
        
        if(contadorT>2){
            setTimeout(()=>{
                contenedorT.style.transform = `translateX(${0}%)`; 
            contadorT=0;

            },4000)
        }
      },4000)    



 
    

    
       
    
    
    
 
 



    
