import React from 'react'
import { useNavigate } from "react-router-dom";


const ContactCard = ({ contact }) => {
const navigate = useNavigate();
const navigateToContactDetails = ()=>{
navigate(`/ContactDetails/${contact.id}`)
}
  return (
    <div className='cardContainer' onClick={navigateToContactDetails}>
      
     <div className='card'>

       <p>{contact.name}</p>
     </div>


    </div>
  )
}

export default ContactCard
