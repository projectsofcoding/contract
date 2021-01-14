
import { useState } from 'react';
import './App.css';
import AppBar from './components/Appbar';
import Drawer from './components/Drawer';

import Screen_Manager from './components/Screen_Manager';

function App() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false)
  return (
    <div className="App">
     <AppBar  setisDrawerOpen={setisDrawerOpen} isDrawerOpen={isDrawerOpen}/>
     <div >
        <Drawer  isDrawerOpen={isDrawerOpen} setisDrawerOpen={setisDrawerOpen} />
     </div>
     
    
     
    <Screen_Manager isDrawerOpen={isDrawerOpen}/>
    </div>
  );
}

export default App;
