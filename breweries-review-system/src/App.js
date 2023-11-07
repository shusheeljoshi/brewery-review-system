
import { useState } from 'react';
import './App.css';
import LoginSignupPage from './Components/LoginSignupPage/LoginSignupPage';
import SearchPageHome from './Components/SearchPageHome/SearchPageHome';
import { Routes, Route, Navigate } from "react-router-dom"

function App() {   
  const [isLoggedIn,setLoggedIn]=useState(false)
  function PrivateRoute({children}){
    if(!isLoggedIn){
      return <Navigate to={"/signup"}/>
    }else {
      return children
    }
  }
  return (
    <div>
    <Routes>
      <Route path="/" element={<PrivateRoute isLoggedIn={isLoggedIn}>
        <SearchPageHome />
      </PrivateRoute>} />
      <Route path='/signup' element={<LoginSignupPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
    </Routes>
       
    </div>


  );
}

export default App;
