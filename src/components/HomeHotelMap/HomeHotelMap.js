import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import adventure from "../fakeData/adventure";
import HotelMap from '../HotelMap/HotelMap';

import './HomeHotelMap.css';
import logo from "../../Image/Logo.png"


const HomeHotelMap = () => {
    const{mapId}=useParams()
    const Map=adventure.find(map=>map.id==mapId)
    const [settingMap,setSettingMap]=useState(Map)
    
    const[hotelMap,setHotelMap]=useState(adventure)
    

    return (<div><div className="list"><div className="logo">
       
       < img src={logo}/>
        </div>
       <div> <ul>
            <li style={{cursor:'pointer'}}>News</li>
            <li style= {{cursor:'pointer'}}>Destination</li>
            <li style={{cursor:'pointer'}}>Blog</li>
            <li style={{cursor:'pointer'}}>Contact</li>
            <li style={{cursor:'pointer'}}>Sufi Ahmed</li>
        </ul></div><br/>
    </div><div className="hotel-map-container row">
        <div className="col-md-8">
            {
               hotelMap.map(hotelMap=><HotelMap hotelMap={hotelMap}></HotelMap>) 
            }
        </div>
        <div  className="col-md-4">
        <iframe src={settingMap.destination} width='460px'height="560px" ></iframe>
       
    </div>
    </div>
    </div>
    );
};

export default HomeHotelMap;