import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus} from 'react-icons/fi'
import mapMarkerImg from '../images/Local.svg'
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css'
function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita ;)</p>
                </header>

                <footer> 
                    <strong>Macapá</strong>
                    <strong>Amapá</strong>
                </footer>
            </aside>

            <Map 
            center={[0.048897,-51.1004567]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
            >
            
            <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPXBOX_TOKEN}`}
            />
            </Map>
            <div>
                <Link to="" className="create-orphanage">
                    <FiPlus />
                </Link>
            </div>
        </div>
    )
}

export default OrphanagesMap;