
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';

function App() {
  const[theme, setTheme] = useState('light');
  return (
    <div className='container'> 
      <Navbar theme={theme} setTheme={setTheme}/>
      
    </div>
  );
}

export default App;
