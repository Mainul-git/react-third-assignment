import React, { useContext } from 'react';
import { UserContext } from '../../App';
import "./HotelMap.css";
import star from "../../Image/star_1_.png"

const HotelMap = (props) => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const {hotelTitle,title,hotelImg,price, hotelDescription1, hotelDescription2, hotelDescription3}=props.hotelMap 
    
    return (
        <div>
            {/* <div className="row">
                <div className="col-md-7"> */}
                    <div className=" images-contenting-container">
    <div className=" images-container"><img src={hotelImg} alt=""/></div>
                        <div className=" contenting-container">
    
  <small><p className="first-content">{hotelTitle}</p></small>
  <small><p className="second-content">{hotelDescription1}</p></small>
  <small><p className="third-content">{hotelDescription2}</p></small>
           <p><img src={star} style={{width:'10px'}}alt=""/><small style={{color:"gray"}}>{hotelDescription3} </small>&nbsp; {price}<small style={{color:'lightgray'}}>/night</small>&nbsp; <small style={{color:'#ddd'}}>$167total</small></p>  

    
                        </div>
                    </div>

                    
               
        </div>
            
        
    );
  
    }
export default HotelMap;
    
  



