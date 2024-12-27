import emailjs from '@emailjs/browser';




export const useEmailJs = (form, tiempoDeMensaje = (e)=>{e})=>{
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current.children[3].value);
    // if(true) return;
  
    emailjs
      .sendForm('contacto_servicio', 'contacto_form', form.current, {
        publicKey: 'ycme11TLWsr6MrdgF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          tiempoDeMensaje("exito");
        },
        (error) => {
          console.log('FAILED...', error.text);
          tiempoDeMensaje("error", error.text);
        },
      );
  };

  return {sendEmail}

}