import { Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Router path="/" element={<Home></Home>}></Router>
        <Router path="/login" element={<Login/>}></Router>
      </Routes>
    </div>
  );
}

export default App;
