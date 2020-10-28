import React, {Fragment,  useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import adventure from '../fakeData/adventure';
import './SecondPage.css';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Header from '../Header/Header';



  const Secondpage=()=>{
    const [selectedDate, handleDateChange] = useState(new Date());
  
    
    const{usingId}=useParams()
   const placeDescription= adventure.find(adventure=>adventure.id==usingId)
   const [placeIntroduce,setPlaceIntroduce]=useState(placeDescription)
   
    return (
        <div className="wrapper">
          <Header></Header>
          <div className="wrapper-container">
    <div className="contents-container">
            <h1>{placeIntroduce.title}</h1><br/>
    <p>{placeIntroduce.description}</p></div>
    <div >
      <div className="booking-container ">
        <div className="origin">
          <h6 className="origin" style={{color:' rgb(214, 210, 210)',fontWeight:'bold'}}>Origin:</h6>
        <input type="text" value="Dhaka"className="input" id="origin"/>
        </div>
        <div className="destination">
          <h6 className="destination" style={{color:' rgb(214, 210, 210)',fontWeight:'bold'}}>Destination:</h6>
          <input type="text" value={placeIntroduce.title}id="destination"className="input"/>
        </div>
      
          <p style={{marginLeft:'16px',color:' rgb(214, 210, 210)',fontWeight:'bold'}}>From: &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;To:</p>
        
        <div className="date-container">
       
        <div className="date">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
       disableToolbar
       fullWidth
       variant="inline-block"
       format="MM/dd/yyyy"
       margin="normal"
       id=""
       label=""
       value={selectedDate}
       onChange={handleDateChange}
       KeyboardButtonProps = {{
         'aria-label': 'change date',
       }}
     />
</MuiPickersUtilsProvider>
        </div> 
      
        <div className="date">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
       disableToolbar
       fullWidth
       variant="inline"
       format="MM/dd/yyyy"
       margin="normal"
       id="date-picker-inline"
       label=""
       value={selectedDate}
       onChange={handleDateChange}
       KeyboardButtonProps = {{
         'aria-label': 'change date',
       }}
     />
</MuiPickersUtilsProvider>
        </div></div>
     <Link to={`/confirm/${placeIntroduce.id}`} > <input type="button"className="booking-button" value="Start Booking"/></Link> 
      </div>
    </div>

            </div>
        </div>
        
    );
};
  
  

export default Secondpage;