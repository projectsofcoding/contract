import { Fab, Paper, TextField, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

//Attachment D

function AttachmentE() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flex: 1,
        height: "90vh",
        padding: "5px",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} style={{width:'100%',padding:'10px',backgroundColor:'white',marginBottom:'20px'}}>
      <Typography style={{fontWeight:"bold",marginBottom:'10px'}} align="left">
      Electronic Invoice Cover Sheet Approval Form for Vendor Portal Billing
      
       
      </Typography>
     
      <Typography align="left" style={{fontWeight:"bold"}}  fontFamily="Monospace" >
      Please indicate below the names of additional persons that your company authorizes in the Vendor Portal to electronically
      </Typography>
      </Paper>
      
      <div
        style={{
          height: "50%",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <TextField
          id="filled-basic"
          label="Name and title of Authorized person"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Signature of Chief Executive Officer/Owner or Designated Representative"
          variant="filled"
        />
       
       
       
      </div>
      <Fab
        color="primary"
        variant="extended"
        aria-label="submit"
        style={{
          position: "absolute",
          bottom: "5px",
          right: "30px",
          margin: "20px",
          width: "120px",
        }}
      >
        Submit
        <NavigateNextIcon />
      </Fab>
      <div>
          <Typography align="left" style={{color:'Red', position: "absolute",
         bottom: "45px",
         marginLeft:'20px',
        }}>
           **This form is to be processed if someone other than the Chief Executive Office/Owner or Designated Representative is being authorized to submit the finalized invoice coversheets. The authorized individuals indicated above will be the only electronic signatures accepted.
          </Typography>
      </div>
      <div style={{
         position: "absolute",
         bottom: "5px",
         marginLeft:'20px',
        
         
         
         
        }}>
          <Typography style={{color:'gray'}} >

           Montachusett Regional Transit Authority and xxxxxxxxxxxxxx MART Brokerage Transportation Provider Contract Effective July 1, 2015
           </Typography>
      </div>
    </div>
  );
}

export default AttachmentE;
