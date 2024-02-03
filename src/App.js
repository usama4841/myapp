import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, {useState} from 'react';


function App() {

  const [mode, setMode] = useState('light');
  const [enable, setEnalble]= useState('Enable Dark Mode');
  const ToggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d0e1e';
      setEnalble('Enable light Mode')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setEnalble('Enable Dark Mode')
    }
  }
  return (
    <>
      <Navbar title="Home Page" contact="Contact Us" mode={mode} ToggleMode={ToggleMode} enable={enable}/>
      <div className="container">
        <Textform heading="Enter Text Below" mode={mode}/>
      </div>
      <About/>
    </>
  );
}

export default App;
