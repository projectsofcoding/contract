import { Checkbox, Fab, Paper, TextField, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

//Attachment H

function AttachmentH() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
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
      <Paper elevation={3} style={{width:'100%',padding:'5px 0px 0px 10px',backgroundColor:'white',marginBottom:'20px'}}>
      <Typography style={{fontWeight:"bold",marginBottom:'10px'}} align="Center">
      ATTACHMENT H SIGNATURE PAGE
  APPENDIX 1 TRANSPORTATION PROVIDER PERFORMANCE STANDARDS
      
       
      </Typography>
      </Paper>
      
     <div style={{display:'flex',flexDirection:'row',width:'100%',height:'100%'}}> 
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
          label="Signature of Chief Executive Officer/Owner or Designated Representative"
          variant="filled"
        />
         <TextField
          id="filled-basic"
          label="Name of Chief Executive Officer/Owner or Designated Representative"
          variant="filled"
        />
         <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar 
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            label="Signed under the pains and penalties of perjury on this date"
            style={{ backgroundColor: "whitesmoke" }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        

       
       
      </div>
      <div style={{width:'45%',marginLeft:'10px',display:'flex',flexDirection:'column'}}>
      <Paper elevation={3}  style={{width:'100%',padding:'5px 0px 0px 10px',backgroundColor:'white',marginBottom:'20px'}}>
            <Typography style={{color :'gray'}} align='left'>
            Please indicate below your company's designated Privacy and Security Officer(s), who will be responsible for
                   compliance with VIII Data Privacy and Security.
            </Typography>
        </Paper>
        <TextField
          id="filled-basic"
          label="Name and Title of Acting Data Privacy and Security Officer"
          variant="filled"
        />
         <TextField
          id="filled-basic"
          label="Name and Title of Acting Data Privacy and Security Officer"
          variant="filled"
        />
      </div>
       
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
      <div style={{display:'flex' , flexDirection:'row',alignItems:'center', position: "absolute",
         bottom: "185px",
         marginLeft:'12px',}}>
      <Checkbox
        checked={true}
        onChange={null}
        style={{color:'green'}}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Typography align='left' style={{fontWeight:'bold'}} >
      I acknowledge that I have read, reviewed and understand all the provisions contained in the “Appendix 1
                   Transportation Provider Performance Standards”


      </Typography>
      </div>
      <div style={{display:'flex' , flexDirection:'row',alignItems:'center', position: "absolute",
         bottom: "125px",
         marginLeft:'12px',}}>
      <Checkbox
        checked={true}
        onChange={null}
        style={{color:'green'}}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Typography align='left' style={{fontWeight:'bold'}} >
      I acknowledge that I have received  the aforementioned documents and understand that they are
                   incorporated as part of my contract with MART for the provision of transportation services.

      </Typography>
      </div>
      <div style={{display:'flex' , flexDirection:'row',alignItems:'center', position: "absolute",
         bottom: "65px",
         marginLeft:'12px',}}>
      <Checkbox
        checked={true}
        onChange={null}
        style={{color:'green'}}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Typography align='left' style={{fontWeight:'bold'}} >
      I hereby certify to abide by all the conditions, requirements and responsibilities contained in the
                   aforementioned documents.

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

export default AttachmentH;
