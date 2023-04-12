import {Validate} from "./validate.js";
import {addReserva,modalAlert} from "./paintReserva.js";

/* -------------------------------- VALIDACION -------------------------------- */
const terminarCompra = document.getElementById("terminarCompra");
const contenedorModal = document.querySelector("#contenedorModal");
const modalconfirm = document.querySelector("#modalconfirm");
const modalTotal = document.querySelector("#modalTotal");


 

//instanciar un objeto de la clase VALIDATE
let validate = new Validate();


//OBJETO DE VALIDACION
const objectValido={
    nameObject:true,
    lastNameObject:true,
    tarObject: true,
    fechaUnoObject: true,
    fechaDosObject:true,
    cvcObject:true
}


//evento para que cada vez que los hijos tenga un cambio se genera la validacion
contenedorModal.addEventListener("change",(event)=>{
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
            objectValido.nameObject = validate.validNames(inputValue);
            
            //si es true validClass  si es falso invalid Class 
            objectValido.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValido));
            break;
        case 'apellido':    
        objectValido.lastNameObject = validate.validNames(inputValue);
        objectValido.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValido));
            break;

        case 'numTar':    
        objectValido.tarObject = validate.validTar(inputValue);
        objectValido.tarObject ? validClass() : invalidClass();
            console.log(Object.values(objectValido));
            break;

        case 'fechaUno':    
        objectValido.fechaUnoObject = validate.validExp(inputValue);
        objectValido.fechaUnoObject ? validClass() : invalidClass();
            console.log(Object.values(objectValido));
        break;
        case 'fechaDos':    
        objectValido.fechaDosObject = validate.validExp(inputValue);
        objectValido.fechaDosObject ? validClass() : invalidClass();
            console.log(Object.values(objectValido));
        break;
        case 'cvc':    
        objectValido.cvcObject = validate.validcvc(inputValue);
        objectValido.cvcObject ? validClass() : invalidClass();
        console.log(Object.values(objectValido));
    break;

    }
});


 
    //asociar el evento al boton 
    terminarCompra.addEventListener("click", (e)=>{
    //evitar que se refresque la pagina 
    e.preventDefault();

    

    //seleccionar los datos del formulario
    const Nombre = document.getElementById("nombre").value;
    const Apellido = document.getElementById("apellido").value;
    const Correo = document.getElementById("numTar").value;
    const Telefono = document.getElementById("fechaUno").value;
    const fecha = document.getElementById("fechaDos").value;
    const hora = document.getElementById("cvc").value;
    
    

    //si todos los valores son true devolvera un -1
    if(validate.validform(objectValido)=== -1){
        modalconfirm.classList.toggle("mostar--confirm");
        modalTotal.classList.toggle("modal--mostrar");
    }else{
        modalAlert("Ingrese todos los datos")
        
    }
    
});