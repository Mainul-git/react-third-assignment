import React, { useContext, useState } from 'react';
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from "../../Image/Logo.png";


firebase.initializeApp(firebaseConfig);
const Login = () => {
  const[newUser,setNewUser]=useState(false)
  const [user,setUser]=useState({
    isSignedIn:false,
    
    name:'',
    password:'',
    email:'',
    photo:'',
   
  })
  const[loggedInUser,setLoggedInUser]=useContext(UserContext)
  const history=useHistory()
  const location=useLocation()
  let { from } = location.state || { from: { pathname: "/" }}
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

const handleSignIn=()=>{
  firebase.auth().signInWithPopup(googleProvider)
  .then(res=>{
    const {displayName,photoURL,email}=res.user
    const signedInUser={
      isSignedIn:true,
      name:displayName,
      email:email,
      photo:photoURL
    }
    setUser(signedInUser)
    console.log(displayName,email,photoURL);
    console.log(res);
    setLoggedInUser(res.user)
    history.replace(from)
  })
  .catch(err=>{
    console.log(err);
    console.log(err.message); 
  })
}
const handleFBSignIn=()=>{
  firebase.auth().signInWithPopup(fbProvider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    setLoggedInUser(user)
    history.replace(from)
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
}
const handleSignOut=()=>{
 firebase.auth().signOut()
 .then(res=>{
const signedOutUser={
  isSignedIn:false,
  newUser:false,
Name:'',
photo:'',
email:'',
error:'',
success:false}
setUser(signedOutUser)
 })
 
 .catch(err=>{

 })
}
const handleBlur=(event)=>{
  console.log(event.target.name);
console.log(event.target.value);
let isFieldValid=true;
if(event.target.name==='email'){
 isFieldValid= /\S+@\S+\.\S+/.test(event.target.value)
}
if(event.target.password==='password'){
  const isPasswordValid=event.target.value.length>6
  const passwordHasNumber=/\d{1}/.test(event.target.value)
  isFieldValid=isPasswordValid && passwordHasNumber
}
if(isFieldValid){
const newUserInfo={...user}
newUserInfo[event.target.name]=event.target.value
setUser(newUserInfo)
  
}
}

const handleSubmit=(event)=>{
if(newUser && user.email && user.password){
  firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
  .then(res=>{
    console.log(res);
    const newUserInfo={...user}
    newUserInfo.error=''
    newUserInfo.success=true
    setUser(newUserInfo)
    updateUserName(user.name)

  })
  .catch(error=> {
    // Handle Errors here.
    const newUserInfo={...user}
    newUserInfo.error=error.message
    newUserInfo.success=false
  setUser(newUserInfo)
      // ...
});
  

}
if(!newUser && user.email && user.password){
  firebase.auth().signInWithEmailAndPassword(user.email,user.password)
  .then(res=>{
    const newUserInfo={...user}
    newUserInfo.error=''
    newUserInfo.success=true
    setUser(newUserInfo)
    setLoggedInUser(newUserInfo)
    history.replace(from)
  })
  .catch(function(error){
    // Handle Errors here.
    const newUserInfo={...user}
    newUserInfo.error=error.message
    newUserInfo.success=false
  setUser(newUserInfo)
  
      // ...
  })
}
event.preventDefault()
}
const updateUserName=name=>{
  const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
  
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
}

    return (
    
        <div style={{}}>
        <div style={{display
     :'inline-block'
     }}>
          <div className="logo-login">
                <img src={logo}alt=""/>
            </div><div style={{marginTop:'-60px',position:'absolute',marginLeft:'950px'}}  >
            <ul style={{marginTop:'70px',marginLeft:''}}>
                <li className="disable" style={{color:"black",cursor:'pointer'}}>News</li>
                <li className="disable"style={{color:"black",cursor:'pointer'}}>Destination</li>
               <li className="disable"style={{color:"black",cursor:'pointer'}}>Blog</li>
                <li className="disable"style={{color:"black",cursor:'pointer'}}>Contact</li>
                <li className="active" style={{cursor:"pointer"}}>Login</li>
            </ul>
            
        </div>
        </div>
        <div className="form-container">
        
     {
       user.isSignedIn &&<div>
      
        <p>Name:{user.name}</p>
         <p>Your Email:{user.email}</p>
         <img src={user.photo} alt=""/></div>
     }
    {newUser?<h4>Create An Account</h4>:<h4>Login</h4>} 
  
     
    
    <form onSubmit={handleSubmit}>
    {newUser &&<div className="md-form form-sm" placeholder="Write your name"> <input type="text" name="name"id="inputSMEx" placeholder="Write Your Name"className="form-control form-control-sm w-10" onBlur={handleBlur}/></div>}<br/>
    <input type="text"name="email"className="form-control form-control-sm w-10"placeholder="Email" onBlur={handleBlur} required/> 
 <br/> <div className="md-form form-sm"><input type="password" placeholder="Write your password"className="form-control form-control-sm w-10"name="password" required onBlur={handleBlur}/></div>
 
 <input type="submit"className="submit-button" value={newUser ?'Create New Account':'Log In'}/> <br/>
  <p style={{margin:'5px'}}>{newUser?'Already have an account':"Don't have an account"}  <u onClick={()=>setNewUser(!newUser)} style={{cursor:'pointer',color:'orange'}}>{newUser?"Log In":"Create an account"}</u></p>
 </form>
 
    
              
        </div>
       
    <p style={{color:'red',textAlign:'center'}}>{user.error}</p>
    {user.success && <p style={{color:'green',textAlign:'center'}}> {newUser ?'Your account created successfully.Now,press the "log In"':'You can log In now'} </p>}
        
        <p className="login"onClick={handleFBSignIn}><span><img src="https://img.icons8.com/fluent/50/000000/facebook-new.png"/></span>Continue With Facebook </p><br/>
     {user.isSignedIn? <p className="login"onClick={handleSignOut}><span><img src="https://img.icons8.com/color/48/000000/google-logo.png"/></span>Continue With Google </p>:
      <p className="login"onClick={handleSignIn}><span><img src="https://img.icons8.com/color/48/000000/google-logo.png"/></span>Continue With Google </p>}  
        
        </div>
    );
    }
  
export default Login;