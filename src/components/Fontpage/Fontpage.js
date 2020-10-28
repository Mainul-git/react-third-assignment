import React from 'react';
import { Link } from 'react-router-dom';
import "./Fontpage.css";
import "../../Image/Rectangle 1.png"


const Fontpage = (props) => {
    const {title,id,placeImg,description}=props.place
    return (
        <div className="child-place-image-container">
            
            <div className="place-name"> <Link to={`/booking/${id}`} className="disable-cursor" >
            <h3>
               {title}
           </h3>
            <img src={placeImg} alt=""/>

          
           </Link></div>
            </div>
        
    
    );
};

export default Fontpage;