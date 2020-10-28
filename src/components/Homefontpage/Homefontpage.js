import React, { useState } from 'react';
import adventure from '../fakeData/adventure';
import Fontpage from '../Fontpage/Fontpage';
import "./Homefontpage.css";
import "../../Image/Rectangle 1.png"
import Header from '../Header/Header';

const Homefontpage = () => {
//    const placesName= adventure.filter(adventure=>adventure.category==="place")
  const [place,setPlace]=useState(adventure)
    return (<div className="image-place-container">
        <Header></Header>
        <div className="row">
            <div className="col-md-3" >
                <h1>Cox's Bazar</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptatibus aperiam ipsum iste? Dicta unde quae laboriosam recusandae accusamus, ea modi laudantium error repudiandae debitis! Quibusdam rerum sint odio delectus.
                Labore aut po </p><br/>
                <button style={{marginTop:'-33px',marginLeft:'5px', backgroundColor: 'sandybrown',padding:'10px 20px',borderRadius:'10px',color:'black'}}>Booking Now</button>
            </div>
        <div className="col-md-9">
            
                {
                    place.map(place=><Fontpage place={place}></Fontpage>)
                }
            </div>
            </div>
            </div>
            
        
    );
};

export default Homefontpage;