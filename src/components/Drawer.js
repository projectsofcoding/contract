import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import MessageIcon from "@material-ui/icons/Message";
import { Collapse } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FormGenerator from "./FormGenerator";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({
  isDrawerOpen,
  setisDrawerOpen,
  setcurrentScreen,
  currentScreen,
  currentForm,
  setcurrentForm
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [subListOpen, setsubListOpen] = useState(false)

  const handleDrawerOpen = () => {
    setisDrawerOpen(false);
  };

  const handleDrawerClose = () => {
    setisDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h4" align="left">
            Qryde
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            style={
              currentScreen === "forms" ? { backgroundColor: "#2acd3f" } : null
            }
            button
            key={"forms"}
            onClick={() => {
              setcurrentScreen("forms");
              setsubListOpen(!subListOpen)
            }}
          >
            <ListItemIcon>
              {" "}
              <FormatAlignLeftIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"forms"} />
          </ListItem>
          <Collapse in={subListOpen} timeout="auto" unmountOnExit>
            <FormGenerator currentForm={currentForm} setcurrentForm={setcurrentForm}  />
          </Collapse>
          <ListItem
            style={
              currentScreen === "messages"
                ? { backgroundColor: "#2acd3f" }
                : null
            }
            button
            key={"Messages"}
            onClick={() => {
              setcurrentScreen("messages");
            }}
          >
            <ListItemIcon>
              {" "}
              <MessageIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Messages"} />
          </ListItem>
          <ListItem
            style={
              currentScreen === "vendor_registration"
                ? { backgroundColor: "#2acd3f" }
                : null
            }
            button
            key={"Vendor Management"}
            onClick={() => {
              setcurrentScreen("vendor_registration");
            }}
          >
            <ListItemIcon>
              {" "}
              <PermDataSettingIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Vendor Management"} />
          </ListItem>
          <ListItem button key={"Collapsible Test"} onClick={() => {}}>
            <ListItemIcon>
              {" "}
              <PermDataSettingIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Vendor Management"} />
          </ListItem>
          
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
