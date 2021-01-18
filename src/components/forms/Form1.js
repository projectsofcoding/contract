import { Fab, Paper, TextField, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function Form1() {
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
        By signing this form, you certify that your company obtains Registry of
        Motor Vehicle (RMV) history reports for all drivers, either the attested
        or unattested version from the Massachusetts Registry of Motor Vehicles
        or the equivalent from another state, if applicable, and that your
        company obtains Criminal Offender Record Information (CORI) reports on
        all employees prior to contact with agency consumers and annually
        thereafter
      </Typography>
     
      <Typography align="left" style={{fontWeight:"bold"}}  fontFamily="Monospace" >Please indicate below your company's designated CORI Certified
        individual, who is responsible for requesting CORI's and ensuring
        employment decisions are consistent with EOHHS CORI requirements
        specified in 101CMR 15.00.
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
          label="Name and title of CORI individual"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Signature of Chief Executive Officer/Owner or Designated Representative"
          variant="filled"
        />
        <TextField id="filled-basic" label="Company Name" variant="filled" />
        <TextField
          id="filled-basic"
          label="Name of Chief Executive Officer/Owner or Designated Representative"
          variant="filled"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar 
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date "
            style={{ backgroundColor: "whitesmoke" }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
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

export default Form1;
