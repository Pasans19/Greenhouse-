import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import Home from './Home/home';
import Dashboardpannel from './Pages/dashboardpannel/pannel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<Home/>}/> {/* Add Routes here */}
          <Route path="/dashboard" element={<Dashboardpannel/>}/> {/* Add Routes here */}
         
          
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
