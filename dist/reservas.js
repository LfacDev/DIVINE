'use strict'

import {Validate} from "./validate.js";
import {addReserva,modalAlert} from "./paintReserva.js";
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
    teleObject: false,
    horaObject:false,
    fechaObject :false

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

        case 'hora':    
            objectValid.horaObject = validator.validTime(inputValue);
            objectValid.horaObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        case 'fecha':    
        objectValid.fechaObject = validator.validDate(inputValue);
        objectValid.fechaObject ? validClass() : invalidClass();
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