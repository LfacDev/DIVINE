'use strict'
   
//CUANDO UN RECURSO Y SUS RECURSOS DEPENDIENTES TERMINARON DE CARGAR 

  //la api de geolocalizacion permite compartir su ubicacion a las pag web si lo desea
    
    //necesitamos primerop obtener nustra ubicacion 
    //luego apuntamos a la api y le pasamos los parametros de nuestra ubicacion
    //asi podemos obtener los datos del clima en determinado lugar 
    //ademas permite ingresar las ciudades y obtener la ubicacion 

    let temperaturaDescripcion = document.querySelector("#temperaturaDescripcion");
    let ubicacion = document.querySelector("#ubicacion");
    let iconoAnimado = document.querySelector("#iconoAnimado");
    let vientoVelocidad = document.querySelector("#vientoVelocidad");
    let temperaturaValor = document.querySelector("#temperaturaValor");
    let ciudad = document.querySelector("#inputReserva");
    let btnEnviar = document.querySelector("#EnviarClima");
    let mensajeClima = document.querySelector("#FraseClima");

    window.addEventListener('load', ()=>{
        btnEnviar.addEventListener("click", (e)=>{
            e.preventDefault
            let inputValue = ciudad.value;


             //navigator-geolocation (propiedad que nos devuelve un objeto de geolocalizacion)
    //nos proporciona un acceso web a la ubicacion del dispositivo 

        let lon = 0;
        let lat = 0;


        //si el objeto existe, los servicios de geolocalizacion estaran disponibles
        if(navigator.geolocation){

            //metodo para obtener la posicion del dispositivo
            navigator.geolocation.getCurrentPosition(posicion=>{
                lon=posicion.coords.longitude;
                lat=posicion.coords.latitude;

               let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&lang=es&units=metric&appid=805625cd0e7d4396d52138119412cd10`;

                //peticiones a la API utilizando fetch 
                fetch(url)
                //respuesta que nos devuelva de la api
                    .then(response => {return response.json()})
                    //los datos devueltos
                    .then(data => {
                        console.log(data);

                        let temp = Math.round(data.main.temp);
                        temperaturaValor.textContent = `${temp} °C`;

                        let tempDesc = data.weather[0].description;
                        console.log(tempDesc);
                        temperaturaDescripcion.textContent = tempDesc.toUpperCase();

                        ubicacion.textContent = data.name

                        vientoVelocidad.textContent = `${data.wind.speed} m/s`;
                        
                        //para iconos dinámicos
                        console.log(data.weather[0].main)
                        switch (data.weather[0].main) {
                            case 'Thunderstorm':
                            iconoAnimado.src='../content/svg/thunder.svg'
                            console.log('TORMENTA');
                            mensajeClima.textContent = "¿Un cafecito para alivianar esta tormenta?"
                            break;
                            case 'Drizzle':
                            iconoAnimado.src='../content/svg/rainy-2.svg'
                            console.log('LLOVIZNA');
                            mensajeClima.textContent = "Con esta lluvia que rico un Caramel macchiato y un croissant"
                            break;
                            case 'Rain':
                            iconoAnimado.src='../content/svg/rainy-7.svg'
                            console.log('LLUVIA');
                            mensajeClima.textContent = "¿Lloviendo?, Nada que no se arregle con un delicioso Falafel ligero"
                            break;
                            case 'Snow':
                            iconoAnimado.src='../content/svg/snowy-6.svg'
                                console.log('NIEVE');
                                mensajeClima.textContent = "Que la nieve no te impida disfrutar de una tarde de cocteles"
                            break;                        
                            case 'Clear':
                                iconoAnimado.src='../content/svg/day.svg'
                                console.log('LIMPIO');
                                 mensajeClima.textContent = "Hoy el dia esta para comerse al mundo y un Curry de garbanzos con mango"
                            break;
                            case 'Atmosphere':
                            iconoAnimado.src='../content/svg/weather.svg'
                                console.log('ATMOSFERA');
                                 mensajeClima.textContent = "Con este clima me dan ganas de un postrecito ¿a ti no?"
                                break;  
                            case 'Clouds':
                                iconoAnimado.src='../content/svg/cloudy-day-1.svg'
                                console.log('NUBES');
                                mensajeClima.textContent = "El mejor clima para una comida en Familia"
                                break;  
                            default:
                            iconoAnimado.src='../content/svg/cloudy-day-1.svg'
                            console.log('por defecto');
                        }

                    })
                    .catch(error =>{
                        console.log(error);
                    })

            })

        }
    })
})