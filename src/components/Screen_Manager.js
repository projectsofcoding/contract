import transitions from '@material-ui/core/styles/transitions'
import React from 'react'
import FormsScreen from './FormsScreen'
import Vendor_Registration from './Vendor_Registration'


function Screen_Manager({isDrawerOpen,currentScreen}) {
    const screen=()=>{
        switch (currentScreen) {
            case "forms":
              return <FormsScreen />
                
                break;
            case "vendor_registration":
             return <Vendor_Registration />
                    
                    break;
        
            default:
                break;
        }

    }
    return (
        <div style={isDrawerOpen ? {marginLeft:'240px',transition:transitions.create(['margin', 'width'], {
            easing: transitions.easing.easeOut,
            duration: transitions.duration.enteringScreen,
          }),}: { transition: transitions.create(['margin', 'width'], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.leavingScreen,
          }),}}>

        
          {screen()}
            
            
        </div>
    )
}

export default Screen_Manager
