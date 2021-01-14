import { Fab, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import Tabs from "./Tabs";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Vendor_Registration() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tabs />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "Row",
          justifyContent: 'left',
        }}
      >
        <div>
         
          <Paper elevation={3}>
      
          <div
            style={{
              display: "flex",
              
              margin: "0px 10px 0px 20px",
              
              height: "65vh",
              flexDirection: "column",
              width: "25vw",
              padding: "0px 10px 10px 10px",
              justifyContent: "space-between",
              backgroundColor: "white",
            }}
          >
            <TextField id="standard-basic" label="Vendor" />
            <TextField id="standard-basic" label="Vendor ID" />
            <TextField id="standard-basic" label="Owner" />
            <TextField id="standard-basic" label="Digital Representative" />
            <TextField id="standard-basic" label="Telephone Number" />
            <TextField id="standard-basic" label="Email Address" />
          </div>
        </Paper>
       
          
        </div>
        <div style={{display:'flex',flexDirection:'column',height:'65vh',justifyContent:'space-between'}}>
        <div>
          
          <Paper
           elevation={3}
            style={{
              display: "flex",
             
              padding: "0px 10px 20px 20px",
              marginLeft: "10px",
              height: "30vh",
              flexDirection: "column",
              width: "25vw",
              justifyContent: "space-between",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField id="standard-basic" label="Street NO" />
              <TextField id="standard-basic" label="Street Name" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField id="standard-basic" label="Apartment" />
              <TextField id="standard-basic" label="City" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField id="standard-basic" label="State" />
              <TextField id="standard-basic" label="Zip Code" />
            </div>
            <TextField id="standard-basic" label="Country" />
          </Paper>
          </div>
       
        <div>
         
        <Paper
          elevation={3}
          style={{
           
           
            display: "flex",
            padding: "0px 10px 10px 20px",
            marginRight: "20px",
            marginLeft:'10px',
            height: "30vh",
            flexDirection: "column",
            width: "25vw",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
             
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField id="standard-basic" label="Street NO" />
            <TextField id="standard-basic" label="Street Name" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField id="standard-basic" label="Apartment" />
            <TextField id="standard-basic" label="City" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField id="standard-basic" label="State" />
            <TextField id="standard-basic" label="Zip Code" />
          </div>
          <TextField id="standard-basic" label="Country" />
        </Paper>
        </div>
        </div>
        
      </div>
      <Fab color="primary" variant="extended"  aria-label="submit" style={{position:"absolute",bottom:"5px",right:'30px', margin:"20px",width:'120px'}}>
        
        Submit
        <NavigateNextIcon />
      </Fab>
    </div>
  );
}

export default Vendor_Registration;
