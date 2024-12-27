import { useState } from "react";



export const useMensaje = ()=>{
    const [mensaje, setMensaje] = useState({exito: false, error: false, fadeExito:"animate__fadeIn", fadeError:"animate__fadeIn", texto:""});
    const {exito, error, fadeExito, fadeError, texto} = mensaje;
    const tiempoMilisegundos = 3000;
    
    
    const tiempoDeMensaje = (mensaje, texto="")=>{
      if(mensaje === "exito"){   
        setMensaje(ant => ({ ...ant, fadeExito: "animate__fadeIn" }));
        setMensaje(ant => ({ ...ant, exito:true }));
    
        // Fade Out
        setTimeout(() => {
          setMensaje(ant => ({ ...ant, fadeExito: "animate__fadeOut" }));        
        }, [tiempoMilisegundos]);
        // Quita el H2
        setTimeout(() => {
          setMensaje(ant => ({ ...ant, exito:false }));
        }, [(tiempoMilisegundos + 1000)]);
      }
      else if(mensaje === "error"){   
        setMensaje(ant => ({ ...ant, fadeError: "animate__fadeIn", error: true, texto: texto}));
        // setMensaje(ant => ({ ...ant, error:true }));
        // Fade Out
        setTimeout(() => {
          setMensaje(ant => ({ ...ant, fadeError: "animate__fadeOut" }));        
        }, [tiempoMilisegundos]);
        // Quita el H2
        setTimeout(() => {
          setMensaje(ant => ({ ...ant, error:false }));
        }, [(tiempoMilisegundos + 1000)]);
      }
      
    };
  
  
    return {exito, error, fadeExito, fadeError, texto, tiempoDeMensaje};
  }