
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
    
     <Footer/>
    </div>
  );
}

export default App;
