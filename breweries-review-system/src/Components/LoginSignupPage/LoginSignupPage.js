import React from 'react'
import "./LoginSignupPage.css"

function LoginSignupPage() {

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
        <form id='login' className='input-group'>
        <input type="text" className='input-field' placeholder='User Id' required></input>
        <input type="text" className='input-field' placeholder='Enter Password' required></input>
        <input type="checkbox" className='check-box'></input><span>Remember Password</span>
        <button type='submit' className='submit-btn'>Log in</button>
        </form>

        <form id='signup' className='input-group'>
        <input type="text" className='input-field' placeholder='User Id' required></input>
        <input type="email" className='input-field' placeholder='Email Id' required></input>
        <input type="text" className='input-field' placeholder='Enter Password' required></input>
        <input type="checkbox" className='check-box'></input><span>Agree t&c</span>
        <button type='submit' className='submit-btn'>Sign Up</button>
        </form>
        </div>

    </div>
  )
}

export default LoginSignupPage