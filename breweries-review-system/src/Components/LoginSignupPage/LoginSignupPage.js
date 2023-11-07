import React, { useState } from 'react'
import "./LoginSignupPage.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../Firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import {  useNavigate } from 'react-router-dom'

function LoginSignupPage({setLoggedIn,isLoggedIn}) {
  const [state,setState]=useState({
    email:"",
    password:""
  })
  const navigate=useNavigate()
  const onLoginChange=(e)=>{
const {name,value}=e.target
setState({...state,[name]:value})
  }
  const onLogin=(e)=>{
    e.preventDefault()
    const {email,password}=state
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      setLoggedIn(true)
      navigate("/")
    }).catch(e=>console.log(e))
  }
  const onSignUp=(e)=>{
    e.preventDefault()
    const {email,password}=state
    createUserWithEmailAndPassword(auth,email,password).then(res=>
      {
        const uid=res.user.uid;
      setDoc(doc(db,"database",`${uid}`),state).then(()=>{
        setLoggedIn(true)
        navigate("/")
      }).catch(e=>console.log(e))
      }
      ).catch(e=>console.log(e))
    // console.log(state)
    setState({
      email:"",
    password:""
    })
  }

  var x = document.getElementById("login")
  var y = document.getElementById("signup")
  var z = document.getElementById("btn")

  function signup(){
    x.style.left = "-450px";
    y.style.left = "50px";
    z.style.left ="110px";
  }

  function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left ="0px";
  }
  return (
    <div className='hero'>
       <div className='form-box'>
        <div className='button-box'>
        <div id='btn'></div>
            <button type='button' className='toggle-btn' onClick={login}>Log In</button>
            <button type='button' className='toggle-btn' onClick={signup}>Sign Up</button>
        </div>
         <form id='login' className='input-group' onSubmit={onLogin}>
        <input type="text" className='input-field' value={state.email} onChange={onLoginChange} name="email" placeholder='User Id' required></input>
        <input type="text" className='input-field'value={state.password} onChange={onLoginChange} name="password" placeholder='Enter Password' required></input>
        <input type="checkbox" className='check-box'></input><span>Remember Password</span>
        <button type='submit' className='submit-btn'>Log in</button>
        </form> 

        <form id='signup' className='input-group' onSubmit={onSignUp}>
        {/* <input type="text" className='input-field' placeholder='User Id' required></input> */}
        <input type="email" className='input-field'value={state.email} onChange={onLoginChange} name="email" placeholder='Email Id' required></input>
        <input type="text" className='input-field' value={state.password} onChange={onLoginChange} name="password" placeholder='Enter Password' required></input>
        <input type="checkbox" className='check-box'></input><span>Agree t&c</span>
        <button type='submit' className='submit-btn'>Sign Up</button>
        </form>
        </div>

    </div>
  )
}

export default LoginSignupPage