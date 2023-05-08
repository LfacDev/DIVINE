'use strict'

/*LOGIN */
//seleccionar los elementos HTML

const Registrarse = document.querySelector("#registrarse"),
      Iniciar = document.querySelector("#iniciar"),
      btnRegistrarse = document.querySelector("#registrarse-btn"),
      btnIniciar = document.querySelector("#iniciar-btn");


//La propiedad event.target ayuda a encontrar el nombre del elemento HTML utilizado para desencadenar el evento

document.addEventListener("click", (e)=>{
    if(e.target === btnRegistrarse || e.target === btnIniciar){
        //toogle (agrega la clase si no existe, si existe la remueve)
        Registrarse.classList.toggle("active");
        Iniciar.classList.toggle("active");
        
    }
});


const registro = document.querySelector('#registro')
registro.addEventListener('submit', (e)=>{
    e.preventDefault()
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

})


const iniciarSesion = document.querySelector('#iniciar')
iniciarSesion.addEventListener('submit', (e)=>{
    e.preventDefault()
    //traemos los valores
    const email = document.querySelector('#emailR').value
    const password = document.querySelector('#contraseñaR').value
    //traemos la base de datos
    const Users = JSON.parse(localStorage.getItem('users')) || []
    //busca los datos ingresados en la base de datos

    //si no coinciden los datos se envia alerta de error si da true es que coinciden y lo redirige al index
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    window.location.href = './reservas.html'   

})

//traemos la base de datos con el item seleccionado o en caso de que no ha


const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    window.location.href = './index.html'
})




