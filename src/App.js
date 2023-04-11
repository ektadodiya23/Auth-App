import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Component/Login';
import Home from './Component/Index/Home';
import Showdata from './Component/Index/Showdata';
import Editdata from './Component/Index/Editdata';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/getdata" element={<Showdata />}></Route>
          <Route path="/Update/:id" element={<Editdata />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
