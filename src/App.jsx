import React, {useRef, useState} from 'react';
import { useMensaje } from './hook/useMensaje';
import { useEmailJs } from './hook/useEmailJs';
import './App.css';
import './AppArreglos.css';
import 'animate.css';
import { useEmailJsMasivo } from './hook/useEmailJsMasivo';
import { enviarMailsMasivos } from './components/EnviarMailsMasivos';



export const App = () => {
  const {exito, error, fadeExito, fadeError, texto, tiempoDeMensaje} = useMensaje();
  const form = useRef();
  const mailMasivo = useRef();
  const {sendEmail} = useEmailJs(form, tiempoDeMensaje);
  const {sendEmailMasivo} = useEmailJsMasivo(mailMasivo);


  return (
    <>
        <h1 
          style={{
            textAlign:"center", 
            border:"solid 1px orange", 
            borderRadius:"5px", 
            padding:"5px", 
            width: "60%", 
            margin:"0 auto"
          }}
        >
          App para envio de E-mails
        </h1>

        <h2 style={{marginTop:"70px"}}>Formulario de Contacto</h2>
        <p>Envío de mensaje simple. En este apartado enviarás un mail a <strong>darioarcas@hotmail.com</strong>, si dejas tu E-mail recibirás una respuesta automática.</p>
        {(exito) && <h2 className={`mensaje-exito animate__animated ${fadeExito}`}>El mensae ha sido enviado con exito!</h2>}
        {(error) && <h2 className={`mensaje-error animate__animated ${fadeError}`}>Error: {`${texto}`}</h2> }
        
        

        <form ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input required type="text" name="user_name" placeholder='Tu nombre'/>
          <label>E-mail (te llegará una respuesta automática)</label>
          <input  required type="email" name="user_email" placeholder='email@123.com'/>
          <label>Mensaje</label>
          <textarea required name="message" placeholder='Escribe algo que quieras decir...'/>
          <input type="submit" value="Enviar" />
        </form>

        <hr style={{margin:"50px 0", width:"100%"}} />      

        <h2>Envio masivo de E-mails</h2>
        <p><strong>Se ha reducido la cantidad de emails masivos. Es posible enviar hasta 2 emails a la vez</strong></p>
        <form ref={mailMasivo} onSubmit={e=>enviarMailsMasivos(e, mailMasivo, sendEmailMasivo, tiempoDeMensaje)}>
          <label>Nombre</label>
          <input required type="text" name='user_name' placeholder='Tu nombre'/>
          <label>Lista de E-mails (separar cada E-mail por espacios)</label>
          {/* <p>· Todos los emails recibirán un mensaje automático</p> */}
          <input type="text" name='user_email' style={{width: "98%"}} placeholder='Lista de E-mails'/>
          {/* <label>Mensaje</label>
          <textarea name="message" placeholder='Escribe algo que quieras decir...'/> */}
          <p>La redacción de mensaje se realiza en <strong>EmailJS</strong>, para enviar un mensaje personalizado.
           Pero se enviará una respuesta automática a cada dirección de E-mail de la lista</p>
          <input type="submit" value="Enviar" />
        </form>
    </>
  )
}

