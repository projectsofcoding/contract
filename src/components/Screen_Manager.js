import transitions from '@material-ui/core/styles/transitions'
import React from 'react'
import Vendor_Registration from './Vendor_Registration'


function Screen_Manager({isDrawerOpen}) {
    return (
        <div style={isDrawerOpen ? {marginLeft:'240px',transition:transitions.create(['margin', 'width'], {
            easing: transitions.easing.easeOut,
            duration: transitions.duration.enteringScreen,
          }),}: { transition: transitions.create(['margin', 'width'], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.leavingScreen,
          }),}}>

              
          <Vendor_Registration />
            
            
        </div>
    )
}

export default Screen_Manager
