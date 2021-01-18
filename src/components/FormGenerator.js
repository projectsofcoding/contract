import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { useEffect } from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function FormGenerator({currentForm,setcurrentForm}) {
    var a = [];
  
    
    for (var i = 0; i < 41; i++) {
     
      a.push(
        <ListItem button >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Form 1" />
        </ListItem>
      );
    }
   
 
  return (
    <div>
      <List component="div"  disablePadding style={{ paddingLeft: "2vw" }}>
      <ListItem button onClick={()=>{setcurrentForm('attachmentD')}} >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Attachment D" />
        </ListItem>
        <ListItem button onClick={()=>{setcurrentForm('attachmentE')}} >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Attachment E" />
        </ListItem>
        <ListItem button onClick={()=>{setcurrentForm('attachmentF')}} >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Attachment F" />
        </ListItem>
        <ListItem button onClick={()=>{setcurrentForm('attachmentH')}} >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Attachment H" />
        </ListItem>
        <ListItem button onClick={()=>{setcurrentForm('attachmentI')}} >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Attachment I" />
        </ListItem>
        <ListItem button onClick={()=>{setcurrentForm('attachmentM')}} >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Attachment M" />
        </ListItem>
        <ListItem button onClick={()=>{setcurrentForm('attachmentN')}} >
          <ListItemIcon>
           <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Attachment N" />
        </ListItem>
      {a.map(function(name, index){
                   
                    return name;
                  })}
      </List>
    </div>
  );
}

export default FormGenerator;
