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

function AttachmentN() {
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
      <Paper
        elevation={3}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <Typography
          style={{ fontWeight: "bold" }}
          align="left"
        >
         ATTACHMENT N
NON-COLLUSION AFFIDAVIT
        </Typography>
</Paper>
<Paper style={{marginBottom:'20px',padding:'5px 0px 5px 10px'}}>
        <Typography
          align="left"
          style={{ fontWeight: "bold",color:'red' }}
          fontFamily="Monospace"
        >
          By executing this Non-Collusion Affidavit, the Transportation Provider
          affirms, under the pains and penalties of perjury, that said
          Transportation Provider has not and will not, directly or indirectly,
          enter into any agreement, participate in any collusion or otherwise
          take any action in restraint of free competitive proposals in
          connection with the Contract(s) signed with MART for the provision of
          transportation services.
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
          label="Name of Chief Executive Officer/Owner or Designated Representative"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Signature of Chief Executive Officer/Owner or Designated Representative"
          variant="filled"
        />
        <TextField id="filled-basic" label="Company Name" variant="filled" />
       
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date "
            value={selectedDate}
            onChange={handleDateChange}
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
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          marginLeft: "20px",
        }}
      >
        <Typography style={{ color: "gray" }}>
          Montachusett Regional Transit Authority and xxxxxxxxxxxxxx MART
          Brokerage Transportation Provider Contract Effective July 1, 2015
        </Typography>
      </div>
    </div>
  );
}

export default AttachmentN;
