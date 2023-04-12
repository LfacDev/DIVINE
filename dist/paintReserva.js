

const cardReserva = document.querySelector("#cardReserva");
const infoPersona = document.querySelector("#infoPersona");

const addReserva = (name,lastName, mail, tele, cantidad, fecha, hora) =>{
    //creamos un objeto

    let person ={
        pname:name,
        plastName : lastName,
        pmail: mail,
        ptele:tele,
        pcantidad:cantidad,
        pfecha:fecha,
        phora:hora
    };

    let text = `¿Esta seguro ${person.pname} ${person.plastName} de realizar la reserva?`;

    modalAlert(text, "aceptar", person);
}

function modalAlert(cad, tipo, persona){
    //crear elementos 
    const alerta= document.createElement('div');
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");

    //generar atributos 
    alerta.setAttribute("id", "alertaR" )
    alerta.setAttribute("class", "alertar" )
    texto.setAttribute("class", "textAlertaR");
    texto.innerHTML= `<strong>${cad}</strong>;`

    //atributos al boton 
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlertaR");
    btnCerrar.setAttribute("value", "cerrar");

    //agregar el boton y el texto dentro de alerta 
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){
        
        const btnEnviar = document.createElement("input");

        //atributos al boton 
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlertaR");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        //agregar el alwrta dentro del body
        document.body.appendChild(alerta);
        //evento del boton enviar
        btnEnviar.onclick=function(){
            paintCard(persona);
            //removemos cuando ya le haya dado aceptar
            console.log(document.getElementById("alertaR").remove());
        }
    }else{
        //agregar el alwrta dentro del body
        document.body.appendChild(alerta);
    }

    //removcer la alerta
    btnCerrar.onclick=function(){

        document.getElementById("alertaR").remove();
    }

}



//paint Card
//datos, tipo= estudiante, profesor
const paintCard = (datos) =>{

    //crear un fragmento (mini Dom)
    const fragmento = document.createDocumentFragment();
    //solo se quiere el contenido del template no toda la etiqueta
    const tempReserva = document.getElementById("tempReserva").content;  

        //se colnara temEstudiante
        let tempTemplate = tempReserva.cloneNode(true);
        tempTemplate.querySelector('.title-cardReserva').innerHTML = 'DATOS DE LA RESERVA';
        tempTemplate.querySelector('.nombres').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.celular').innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplate.querySelector('.correo').innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplate.querySelector('.cantidad').innerHTML = `CANTIDAD: ${datos.pcantidad} `;
        tempTemplate.querySelector('.fecha').innerHTML = `FECHA: ${datos.pfecha} `;
        tempTemplate.querySelector('.hora').innerHTML = `HORA: ${datos.phora} `;
        
        //agregar el tempTemplate al fragmento 
        fragmento.appendChild(tempTemplate);
        //ahora haremos visible el template
        cardReserva.appendChild(fragmento);
    

    //resetear el formulario
    

}



export {addReserva, modalAlert};