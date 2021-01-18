import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { useEffect } from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function FormGenerator() {
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
      {a.map(function(name, index){
                   
                    return name;
                  })}
      </List>
    </div>
  );
}

export default FormGenerator;
