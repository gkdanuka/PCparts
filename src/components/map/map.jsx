import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import Pin from '../pin/Pin'

function Map({items}) {
  return (
    <MapContainer center={[51.505,-0.09]} zoom={7} scrollWheelZoom={false} className='map'>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetmap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {items.map(item=>{
        <Pin item={item} key={item.id} />
      })}
    </MapContainer>
  )
//     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//   <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={[51.505, -0.09]}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer>
//   )
}

export default Map