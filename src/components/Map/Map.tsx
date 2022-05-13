import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import '../../utils/fix-map-icon'

import 'leaflet/dist/leaflet.css';
import './Map.css'

export const Map = ()=>{
    return(
        <div className="map">
            <MapContainer center={[51.0706471, 16.9988152]} zoom={20}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[51.07085, 16.998365]}>
                    <Popup>
                        <h2>Kościół św. Trójcy</h2>
                        <p>Moja parafia</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}