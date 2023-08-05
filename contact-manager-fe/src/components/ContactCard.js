import React from 'react'

const ContactCard = ({ contact }) => {
  return (
    <div className='cardContainer'>
      
     <div className='card'>

       <p>{contact.name}</p>
     </div>


    </div>
  )
}

export default ContactCard
