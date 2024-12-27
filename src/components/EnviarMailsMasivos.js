



export const enviarMailsMasivos = (e, mailMasivo, sendEmailMasivo, tiempoDeMensaje)=>{
    e.preventDefault();

    if(mailMasivo.current.children[3].value.includes(" ")){
      const arrayEmails = [mailMasivo.current.children[3].value.split(' ')];
      for (let i = 0; i < 2; i++) {
        mailMasivo.current.children[3].value = arrayEmails[0][i];
        mailMasivo.current.children[3].type = "email";
        // console.log("Enviar a: ", mailMasivo.current.children[3].value);
        sendEmailMasivo(e);
        if(i === (arrayEmails[0].length - 1)){
          tiempoDeMensaje("exito");
        }   
      }


      // Volvemos a colocar la cadena de mails en el input
      mailMasivo.current.children[3].type = "text";
      mailMasivo.current.children[3].value = (`${arrayEmails.map(mails=>(mails))}`).replace(",", " ");
    }
    else{
      mailMasivo.current.children[3].type = "email";
      sendEmailMasivo(e);
      tiempoDeMensaje("exito");
    }

  }