import React from 'react'
import { MapContainer, TileLayer,Marker, Popup} from 'react-leaflet'

const MapCard = ({ props }) => {
const {latitude, longitude}=props

if (latitude===undefined || longitude ===undefined){
    return null
}
 console.log(latitude,longitude)   
  return (
    <div className='mapContainer '>

        
        

    <MapContainer center={[latitude,longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude,longitude]}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
    </MapContainer>





    </div>
  )
}

export default MapCard
