'use strict'

import {Validate} from "./validate.js";
import {addReserva,modalAlert} from "./paintReserva.js";

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


/************************************ RESERVAS **************************************/
    
const btnEnviar = document.getElementById("btnEnviarReserva");
const contenedorReserva = document.querySelector("#contenedorReserva");
const numPerson = document.querySelector("#NumPersona");
const mas = document.getElementById("mas");
const menos = document.getElementById("menos");
const turno=document.querySelector("#turnos");
const horaT = document.querySelectorAll("#horaT");

 

//instanciar un objeto de la clase VALIDATE
let validator = new Validate();


//OBJETO DE VALIDACION
const objectValid={
    nameObject:false,
    lastNameObject:false,
    mailObject: false,
    teleObject: false
}


//evento para que cada vez que los hijos tenga un cambio se genera la validacion
contenedorReserva.addEventListener("change",(event)=>{
    //saber cual de los hijos formulo el evento (capturar) se usara target 
    const inputId = event.target.id;
    console.log(inputId);
    //capturar el valor (no es lo mismo que el content)
    const inputValue = event.target.value;
    console.log(inputValue);
    //capturar clase 
    const inputClass = event.target.classList;
    console.log(inputClass);

    //si es valido 
    const validClass = ()=>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }

    //si en invalido
    const invalidClass = ()=>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    //segun el input hacer la validacion con el patron 
    switch(inputId){
        case 'name': 
            //aqui usamos el objeto instanciado
            //devuelve un true o false y lo aisgna automaticamente al objeto
            objectValid.nameObject = validator.validNames(inputValue);
            
            //si es true validClass  si es falso invalid Class 
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case 'lastName':    
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case 'mail':    
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case 'telephone':    
            objectValid.teleObject = validator.validTel(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
    }
});

 //obtener cantidad

    let cantidad = 1;
    window.addEventListener("load", ()=>{
        document.addEventListener("click", (e)=>{
            if(e.target===mas){
                console.log(mas);
                cantidad++;
                console.log(cantidad)
            }else if(e.target === menos){
                console.log(menos);
                cantidad--;
                console.log(cantidad)
            }
    
            numPerson.textContent = cantidad;
            
        })
    })


//asociar el evento al boton 
btnEnviar.addEventListener("click", (e)=>{
    //evitar que se refresque la pagina 
    e.preventDefault();

    

    //seleccionar los datos del formulario
    const Nombre = document.getElementById("name").value;
    const Apellido = document.getElementById("lastName").value;
    const Correo = document.getElementById("mail").value;
    const Telefono = document.getElementById("telephone").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const cant = cantidad;
    
    

    //si todos los valores son true devolvera un -1
    if(validator.validform(objectValid)=== -1){
        addReserva(Nombre,Apellido,Correo,Telefono, cant, fecha, hora);
    }else{
        modalAlert("Error en los datos");
        
    }
    
});
 
    

    
       
    
    
    
 
 



    
