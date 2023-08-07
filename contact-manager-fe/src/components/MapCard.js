import React from 'react'
import { MapContainer, TileLayer,Marker, Popup} from 'react-leaflet'

const MapCard = ({ latitude, longitude,name }) => {


if (latitude===undefined || longitude ===undefined || name===undefined){
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
            {name}
        </Popup>
        </Marker>
    </MapContainer>

    </div>
  )
}

export default MapCard
