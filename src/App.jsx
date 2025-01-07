// App.js
import React, { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form";
function App() {
  const [formData, setFormData] = useState({ name: '', email: '', opinion: '' });
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();

// Función para enviar los datos del formulario
const onSubmit = async (data) => {
  setCarndo(true)
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwWhHlPs6t6Tmo4seGTG-1U0Tez68GyF4sDMy8vAzSAZbPnqaNazQfpiJt3ecqnUu_x/exec", {
      method: 'POST',
      mode: 'no-cors',  // Evita el error de CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.email,
        number: data.number,
        comentarios: data.comentarios,
      }),
    });

    // Aunque 'no-cors' limita la visibilidad de la respuesta, puedes mostrar un mensaje al usuario
    const result = await response.text();
    console.log(result);
    alert("Gracias disfruta de tu café");
    reset();
    setSubmitted(true);
  } catch (error) {
    console.error('Error ', error);
    alert("Hubo un error 005");
    reset();
  } finally {
    setCarndo(false);

  }
};



//pantalla dddede carga

const [carndo, setCarndo] = useState(false)
const cargando = () => {
  setCarndo(!carndo)
}
  return (
    <div className="app-container">
      <header className="header">
        <h1>Moritas Café</h1>
        <p>¡Danos tu opinión y gana un café o postre gratis!</p>
      </header>

     
     { carndo ? (

<div className="cargando">

<h2> Cargando....  </h2> 
 <img className='imgcargsao' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734580266/PROSESANDO_1_l4a6ag.gif" alt="" />

 </div>
    )
      
      : 
      (   
          <>


        {submitted ? (
          <div className="thank-you">
            <h2>¡Gracias por tu opinión!</h2>
            <p>Presenta este mensaje en nuestra cafetería para reclamar tu café o postre gratis.</p>
            <img className='imgaminagracias' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731124196/Que_esperas_._938_x_781_px_zgge24.gif" alt="" />
          </div>
        ) : (
          <form className="opinion-form" onSubmit={handleSubmit(onSubmit)}>
            <label>
              Nombre:
              <input
                type="text"
                name="name"
             
                {...register("nombre", { required: true })}
              />
            </label>
            <label>
              Correo electrónico:
              <input
                type="email"
                name="email"
                
                {...register("email", { required: true })}
              />
            </label>
            <label>
            Número de celular:
              <input
                type="number"
                name="number"
      
                {...register("number", { required: true })}
              />
            </label>
            <label>
              Tu opinión:
              <textarea
                name="opinion"
              
                {...register("comentarios", { required: true })}
              ></textarea>
            </label>
            <button type="submit">Enviar opinión</button>
          </form>
        )}
      </>
        )
 
     }
 
      
      <footer className="footer">
        <p>Moritas Café © 2025 | Síguenos en nuestras redes sociales</p>
        
      </footer>
    </div>
  );
}

export default App;
