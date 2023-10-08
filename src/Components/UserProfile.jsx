//ACA CREAMOS LA FUNCIONA REALIZAR (lo importamos a APP.JS  y a en Function app())

import { useState } from "react"; // *PARA PODER USAR EL HOOK EN ESTA HOJA


//COMPONENTE DEL MENSAJE DE BIENVENIDA
function WelcomeMessage({ nombre, edad }) {
  return (
    <div>
      <p>Hola {nombre}</p>
      {edad < 18 ? (
        <p>Eres muy joven para usar esta aplicación. </p>
      ) : (
        <p>Gracias por usar nuestra aplicación.</p>
      )}
    </div>
  );
}


//DECLARACION DE ESTADOS PARA EL NOMBRE Y LA EDAD DEL USUARIO
function UserProfile() {
  const [nombre, setNombre] = useState(''); //iniciado con una cadena string vacia
  const [edad, setEdad] = useState(0); //iniciado con una cadena number en 0
  const [mostrarMensaje, setMostrarMensaje] = useState(false); //cuando el componente se carga por primera vez, mostrarMensaje es false y el mensaje de bienvenida no se muestra.



  //FUNCION PARA GENERAR EL MSJ DE BIENVENIDA PERSONALIZADO
  const generarMensajeBienvenida = () => {
    if (edad < 18) {
      return `Hola, ${nombre}, eres muy joven para usar esta aplicación.`;
    } else {
      return `Bienvenido, ${nombre}, gracias por usar nuestra aplicación.`;
    }
  };



  //FUNCION PARA MANEJAR EL ENVIO DEL FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault(); //prevenir la recarga de la página ejecutar el código personalizado que proporcionamos en la función

    // Capturar los valores del nombre y la edad
    const nombreUsuario = nombre;
    const edadUsuario = parseInt(edad, 10); // Convertir a número entero

    // Hacer algo con los valores capturados, por ejemplo, mostrar el mensaje
    setMostrarMensaje(true);
  };

  return (
    <div className="container">
      <h1>Perfil de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Nombre"
          />
          <div class="top-line"></div>
          <div class="under-line"></div>
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            placeholder="Edad"
          />
          <div class="top-line"></div>
          <div class="under-line"></div>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        {/* Mostrar el mensaje de bienvenida si mostrarMensaje es true */}
        {mostrarMensaje && <WelcomeMessage nombre={nombre} edad={edad} />}
      </div>
    </div>
  );
}

export default UserProfile; //EXPORTAR PARA IMPORTAR 
