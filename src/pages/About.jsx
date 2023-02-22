import Avatar from '@mui/material/Avatar';
import Profile from '../assets/calypso.jpg'

function About () {
  return (
    <div className="d-flex justify-content-center my-4 ">
      
    <Avatar
      alt="Remy Sharp"
      src={Profile}
      sx={{ width: 190, height: 190 }}
        
    />   
      <div className="text-white d-flex flex-column mx-3">
      <h1 className="p-3 mt-4">Qui suis-je ?</h1>
      
      <p className="p-2 mt-1 ">Fin 2020, j'ai commencé à apprendre en autodidacte à créer des sites internet.<br />
        Etant artiste peintre, j'ai été séduite par cette autre manière de créer.<br />
        Le code remplaçant le pinceau, je collabore avec vous pour réaliser vos envies.<br />
        Au fil de nos échanges, nous trouverons des solutions adaptées à vos besoins.<br />
      </p>
      </div>
    </div>
  )
}
 export default About;