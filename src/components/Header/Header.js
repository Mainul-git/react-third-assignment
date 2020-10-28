import React from 'react';
import "./Header.css";
import logo from "../../Image/Logo.png"

const Header = () => {
    return (
        <div className="header-section">
            <div className="logo">:
                <img src={logo}alt=""/>
                
                <div style={{display:'inline',marginTop:'20px',float:'left'}}>
                {/* <i class="far fa-search" style={{color:'white'}}></i> */}
                <input type="search"style={{backgroundColor:'inherit',color:'white',borderRadius:'10px',fontWeight:'bold',padding:'5px',width:'250px'}}placeholder= "Search your destination" name="" id=""/>
                </div>
            </div><div style={{marginLeft:'700px',marginTop:'-25px'}}>
            <ul>
                <li className="deactive"><a href="#">News</a></li>
                <li className="deactive"><a href="#">Destination</a></li>
               <li className="deactive"><a href="#">Blog</a></li>
                <li className="deactive"><a href="#">Contact</a></li>
                <li className="active"><a href="#">Login</a></li>
            </ul>
            </div>
            
        </div>
    );
};

export default Header;