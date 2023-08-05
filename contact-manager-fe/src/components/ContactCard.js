import React from 'react'

const ContactCard = ({ contact }) => {
  return (
    <div>
      
     <div className='cardContainer'>

       <p>{contact.name}</p>
     </div>


    </div>
  )
}

export default ContactCard
