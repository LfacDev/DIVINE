'use strict'

/* ------------------------------ validar  */
import {Validate} from "./validate.js";
import {addReserva,modalAlert} from "./paintReserva.js";
/************************************ RESERVAS **************************************/
    
const btnEnviar = document.getElementById("Registrarse");
const contenedorReserva = document.querySelector("#registro");

const btnEnviar2 = document.getElementById("IniciaSesion");
const contenedorReserva2 = document.querySelector("#formulario");


 

//instanciar un objeto de la clase VALIDATE
let validator = new Validate();


//OBJETO DE VALIDACION
const objectValid={
    nameObject:false,
    mailObject:false,
    contraObject: false
    

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
        case 'nombre': 
            //aqui usamos el objeto instanciado
            //devuelve un true o false y lo aisgna automaticamente al objeto
            objectValid.nameObject = validator.validNames(inputValue);
            
            //si es true validClass  si es falso invalid Class 
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case 'email':    
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case 'contraseña':    
            objectValid.contraObject = validator.validContra(inputValue);
            objectValid.contraObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
    }
});


//asociar el evento al boton 
btnEnviar.addEventListener("click", (e)=>{
    //evitar que se refresque la pagina 
    e.preventDefault();

    

  /*   //seleccionar los datos del formulario
    const Nombre = document.getElementById("nombre").value;
    const Apellido = document.getElementById("email").value;
    const Correo = document.getElementById("contraseña").value; */

    
    

    //si todos los valores son true devolvera un -1
    if(validator.validform(objectValid)=== -1){
        //traemos los valores
    const name = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#contraseña').value

    //Aqui buscamos el storage que nos permitira guardar lo usuarios y simular una base de datos
    const Users = JSON.parse(localStorage.getItem('users')) || []

    //con el find buscamos si el email ingresado ya existe, si es verdadero mandamos alerta
    const usuarioRegistrado = Users.find(user => user.email === email)
    if(usuarioRegistrado){
        return alert('El usuario ya esta registado!')
    }

    //si no existe lo guardamos en el arreglo y lo guardamos en el localstorage
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')

    registro.reset();
    }else{
        modalAlert("Error en los datos");
        
    }
    
});





