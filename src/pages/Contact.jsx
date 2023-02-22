import React from 'react'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
function Contact() {
  return (
    <div className="text-white mx-4">
      <h1 className="my-3">Des questions ? Un projet en tête ?</h1>
      <h2 className="my-4">Contactez moi</h2>
      <h2> <EmailRoundedIcon />  par email: </h2>
      <p>calypso.code@laposte.net</p>
    </div>
  )
}

export default Contact;