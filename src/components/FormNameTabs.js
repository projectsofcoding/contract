import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}  >
      <Tabs
      
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        <Tab label="Form 1" />
        <Tab label="Form 2" />
        <Tab label="Form 3" />
        <Tab label="Form 4" />
        <Tab label="Form 5" />
        <Tab label="Form 6" />
        <Tab label="Form 7" />
        <Tab label="Form 8" />
        <Tab label="Form 9" />
        <Tab label="Form 10" />
        <Tab label="Form 11" />
        <Tab label="Form 12" />
        <Tab label="Form 13" />
        <Tab label="Form 14" />
        <Tab label="Form 15" />
        <Tab label="Form 16" />
        <Tab label="Form 17" />
        <Tab label="Form 18" />
        <Tab label="Form 19" />
        <Tab label="Form 20" />
        <Tab label="Form 21" />
        <Tab label="Form 22" />
        <Tab label="Form 23" />
        <Tab label="Form 24" />
        <Tab label="Form 25" />
        <Tab label="Form 26" />
        <Tab label="Form 27" />
      </Tabs>
    </Paper>
  );
}
