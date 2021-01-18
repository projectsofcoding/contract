
import { useState } from 'react';
import './App.css';
import AppBar from './components/Appbar';
import Drawer from './components/Drawer';

import Screen_Manager from './components/Screen_Manager';

function App() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false)
  const [currentScreen, setcurrentScreen] = useState("forms")
  const [currentForm, setcurrentForm] = useState('attachjmentD')
  return (
    <div className="App" >
     <AppBar  setisDrawerOpen={setisDrawerOpen} isDrawerOpen={isDrawerOpen}/>
     <div >
        <Drawer setcurrentForm={setcurrentForm} currentForm={currentForm}  isDrawerOpen={isDrawerOpen} setisDrawerOpen={setisDrawerOpen} setcurrentScreen={setcurrentScreen} currentScreen={currentScreen} />
     </div>
     
    
     
      <Screen_Manager isDrawerOpen={isDrawerOpen} currentScreen={currentScreen} currentForm={currentForm} setcurrentForm={setcurrentForm} setcurrentScreen={setcurrentScreen} />
    </div>
  );
}

export default App;
