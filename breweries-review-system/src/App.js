
import './App.css';
import LoginSignupPage from './Components/LoginSignupPage/LoginSignupPage';
import SearchPageHome from './Components/SearchPageHome/SearchPageHome';
import { Routes, Route } from "react-router-dom"

function App() {   
  return (
    <div>
    <Routes>
      <Route path="/" element={<SearchPageHome />} />
      <Route path='/signup' element={<LoginSignupPage />} />
    </Routes>
     <LoginSignupPage />  
    </div>


  );
}

export default App;
