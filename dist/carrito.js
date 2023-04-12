'use strict'

/* -------------MODAL------------------- */
const carrito = document.querySelector("#carrito"); 
const vaciarCarrito = document.querySelector("#vaciar");
const modal = document.querySelector("#alerta");
const closeModal = document.querySelector("#btnCerrar");
const carritoContador = document.querySelector("#carritoContenedor");
const precioTotal = document.querySelector("#precioTotal");
const continuar = document.querySelector("#continuar");
const modalTotal = document.querySelector("#modalTotal")
const totalCompra = document.querySelector("#totalCompra")
const cancelar = document.querySelector("#cancelar")
const terminarCompra = document.querySelector("#terminarCompra");
const modalconfirm = document.querySelector("#modalconfirm");
const cerrarConfirm = document.querySelector("#cerrarConfirm")


closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("alerta--show");
});


carrito.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("alerta--show");
    mostrarCarrito();
    
});




const stockProductos = [
    {
        id: 1,
        nombre: 'Arroz Criollo',
        precio: 36000,
        imagen: '../content/img/galeria1 (21).jpg',
        cantidad: 1
    },
    {
        id: 2,
        nombre: 'Vegetales y Seitan Kung Pao',
        precio: 46000,
        imagen: '../content/img/galeria1 (16).jpg',
        cantidad: 1
    },
    {
        id: 3,
        nombre: 'Bowl mixto',
        precio: 78000,
        imagen: '../content/img/ralph-ravi-kayden-zTap5OUPDAE-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 4,
        nombre: 'Tasa de cafe',
        precio: 6000,
        imagen: '../content/img/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 5,
        nombre: 'Ensalada de Algas',
        precio: 32000,
        imagen: '../content/img/hermes-rivera-OzBLe_Eg1mg-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 6,
        nombre: 'Ensalada de Quinoa',
        precio: 29000,
        imagen: '../content/img/hermes-rivera-k-sTTFdcZek-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 7,
        nombre: 'Copa chocolate',
        precio: 18000,
        imagen: '../content/img/klara-avsenik-CYJP0T5-6xs-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 8,
        nombre: 'Wrap de falafel',
        precio: 56000,
        imagen: '../content/img/cocobols-zW8wA4QwS2M-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 9,
        nombre: 'Coctel de granada',
        precio: 13000,
        imagen: '../content/img/galeria1 (5).jpg',
        cantidad: 1
    },
    {
        id: 10,
        nombre: 'Margarita',
        precio: 25000,
        imagen: '../content/img/galeria1 (7).jpg',
        cantidad: 1
    },
    {
        id: 11,
        nombre: 'Sopa de Quinoa Tofu y Verduras',
        precio: 29000,
        imagen: '../content/img/galeria1 (1).jpg',
        cantidad: 1
    },
    {
        id: 12,
        nombre: 'Sushi',
        precio: 46000,
        imagen: '../content/img/abillion-i4jrjvPQCXQ-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 13,
        nombre: 'Bowl win',
        precio: 33000,
        imagen: '../content/img/sonny-mauricio-yhc4pSbl01A-unsplash-removebg-preview.png',
        cantidad: 1
    },
    {
        id: 14,
        nombre: 'Torta Completa 10 porciones',
        precio: 86000,
        imagen: '../content/img/ruth-georgiev-dvmiNXMh9d8-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 15,
        nombre: 'Torta de cacao porción',
        precio: 18000,
        imagen: '../content/img/maddi-bazzocco-uthyJYMUkSA-unsplash.jpg',
        cantidad: 1
    },
    {
        id: 16,
        nombre: 'burrito vegetal',
        precio: 26000,
        imagen: '../content/img/galeria1 (19).jpg',
        cantidad: 1
    },
    {
        id: 17,
        nombre: 'Torta de Zanahoria porcion',
        precio: 16000,
        imagen: '../content/img/galeria1 (9).jpg',
        cantidad: 1
    },
    {
        id: 18,
        nombre: 'Muffin',
        precio: 9000,
        imagen: '../content/img/galeria1 (10).jpg',
        cantidad: 1
    },
    {
        id: 19,
        nombre: 'Crepes con fruta',
        precio: 18000,
        imagen: '../content/img/toa-heftiba-MSxw2vpQzx4-unsplash-removebg-preview.png',
        cantidad: 1
    },
    
];

//crear un array vacio para ir agregando los productos
let carritoP = [];

//mantener los datos ñuego de recargarse la pagina
const contenedor = document.addEventListener("DOMContentLoaded",()=>{
    //obtendremos el carrito guardado o en cso d que no se haya guardado nada un arreglo vacio
    carritoP = JSON.parse(localStorage.getItem("carrito")) || [];

});


//template para pintar el menu
const cardEstudiante = document.querySelector("#cardsEstudiantes");

stockProductos.forEach((prod)=>{
    const {id, nombre, precio, imagen,cantidad} = prod;
        //crear un fragmento (mini Dom)
        const fragmento = document.createDocumentFragment();
        //solo se quiere el contenido del template no toda la etiqueta
        const tempEstudiante = document.getElementById("templateEstudiante").content;

        let tempTemplate = tempEstudiante.cloneNode(true);
                tempTemplate.querySelector('.cardC_img').setAttribute("src", imagen);
                tempTemplate.querySelector('.cardC_title').innerHTML = `${nombre}`;
                tempTemplate.querySelector('.cardC_text1').innerHTML = `Precio: ${precio} `;
                tempTemplate.querySelector('.cardC_text2').innerHTML = `Cantidad: ${cantidad} `;
                tempTemplate.querySelector('.btnCarrito').setAttribute("onclick", `agregarProducto(${id})`);

               
                //agregar el tempTemplate al fragmento 
            fragmento.appendChild(tempTemplate);
            //ahora haremos visible el template
            cardEstudiante.appendChild(fragmento);
    });

 
  //funcion para agregar producto  
function agregarProducto(id){

    //aqui validaremos si el producto seleccionado ya esta en el carrito
    //some, busca si un elemento ya existe en el arreglo 
    const existe = carritoP.some(prod => prod.id===id)
    if(existe){
        //map() devuelve un nuevo Array con los resultados de aplicar sumaUno() en todas las posiciones
        //en este caso cuando se encuentre cual es el que esta agregado le sumara 1
        const cantidadProd = carritoP.map(prod => {
            if(prod.id === id){
                prod.cantidad++
            }
        })
    }else{
         //si el id seleccionado concuerda con el id del arreglo creado 
        const item = stockProductos.find((prod)=> prod.id === id);
        //entonces se agregara al array carritoP
        carritoP.push(item);
    }

    mostrarCarrito();
    mostrarTotal();
    
} 


/* los productos que el usuario agrego se muestren */
//se pintaran dentro del modal-body

const mostrarCarrito = ()=>{
   
    const modalBodyR = document.querySelector(".modalBody");
    console.log(modalBodyR);
    modalBodyR.innerHTML = ' ';
    carritoP.forEach((prod) => {
      const { id, nombre, precio, imagen, cantidad } = prod;
      modalBodyR.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-carrito" src="${imagen}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      `;
    });


    //condicional para mostrar que no se ha seleccionado nada
    if(carritoP.length===0){
        //pintamos con innerText
        modalBodyR.innerHTML = `<p class="modalParrafo"> ¡¡No agregaste nada aun!! </p>`
    }

    //contar cuantos productos han agregado
    carritoContador.textContent = carritoP.length;


    //Total
    //reduce (reduce JavaScript nos permite, como su nombre indica, reducir el array insertado a un solo valor)
    //recibe como parametros un acumulador (siempre empieza en 0) y los productos
    precioTotal.innerHTML= carritoP.reduce((acc, prod)=> acc + prod.cantidad * prod.precio, 0);
    
    //aqui guardamos la informacion llamado a guardarStorage
    guardarStorage();
}


//MOSTRAR MODAL TOTAL
const mostrarTotal = ()=>{
   
    const modalBodyT = document.querySelector(".modalBodyT");
    console.log(modalBodyT);
    modalBodyT.innerHTML = ' ';
    carritoP.forEach((prod) => {
      const { id, nombre, precio, imagen, cantidad } = prod;
      modalBodyT.innerHTML += `
      <div class="modal-contenedorT">
        <div>
        <img class="img-carritoT" src="${imagen}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
        </div>
      </div>
      `;
      modal.classList.remove("alerta--show");
    });

    //Total
    //reduce (reduce JavaScript nos permite, como su nombre indica, reducir el array insertado a un solo valor)
    //recibe como parametros un acumulador (siempre empieza en 0) y los productos
    totalCompra.innerHTML= "TOTAL COMPRA: " +  carritoP.reduce((acc, prod)=> acc + prod.cantidad * prod.precio, 0);
    
    //aqui guardamos la informacion llamado a guardarStorage
    guardarStorage();
}



//Eliminar producto

function eliminarProducto(id){
   //guardamos el id en una vatiable
   const platoId = id;
   //filtramos (retorna los elementos de un array que coincidan con la condicion expuesta)
   //va a traer todos los platos menos los que sean distintos a platoId
   carritoP = carritoP.filter((plato)=>plato.id != platoId);
   console.log(carritoP); 
   mostrarCarrito();
} 


//Vaciar el carrito 
vaciarCarrito.addEventListener("click", ()=>{
    carritoP.length = [];
    modal.classList.remove("alerta--show");
    mostrarCarrito();
    mostrarTotal();
})


/* localStorage y sessionStorage son propiedades que acceden al objeto Storage y tienen la función de almacenar datos de manera local, la diferencia entre éstas dos es que localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina. */

function guardarStorage(){
    //le damos una clave y un valor, como es una array ponemos JSON.STRINGIFY
    localStorage.setItem("carrito", JSON.stringify(carritoP));
}


//Continuar compra 

//vamos a decirle que si no hay productos en el carrito de un error 
//y si si hay, nos mande al modal
continuar.addEventListener("click", ()=>{
    if(carritoP.length===0){
        alert("Agrega algo para continuar con la compra");
    }
    else{
        modalTotal.classList.toggle("modal--mostrar");
        mostrarTotal();
    }
});


cancelar.addEventListener("click", (e)=>{
    e.preventDefault();
    modalTotal.classList.toggle("modal--mostrar");
    mostrarTotal();
})

/* terminarCompra.addEventListener("click", (e)=>{
    e.preventDefault();
    modalconfirm.classList.toggle("mostar--confirm");
    modalTotal.classList.toggle("modal--mostrar");
    mostrarTotal();

})
 */
cerrarConfirm.addEventListener("click", (e)=>{
    modalconfirm.classList.toggle("mostar--confirm");
    carritoP.length = [];
    
})














