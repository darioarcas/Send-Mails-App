import emailjs from '@emailjs/browser';




export const useEmailJsMasivo = (mailMasivo)=>{
  
  const sendEmailMasivo = (e) => {
    // e.preventDefault();
    console.log(mailMasivo.current.children[3].value);
    // if(true) return;
  
    emailjs
      .sendForm('contacto_servicio', 'contacto_form', mailMasivo.current, {
        publicKey: 'ycme11TLWsr6MrdgF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return {sendEmailMasivo}

}