
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import BarChartIcon from '@material-ui/icons/BarChart';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SaveIcon from '@material-ui/icons/Save';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  buttonRight: {
     background: "orange",
     margin: "10px"
  },
  btn: {
     margin: "10px"
  }
});

export default function OptionsBar({showBarChart, setShowBarChart}) {

  const classes = useStyles();

  return (
    <Box
      className={classes.root}
    >
      <Box>
         <Button 
         className={classes.btn}
         onClick={() => setShowBarChart(!showBarChart)}
         color="primary">
            <Box>
               <Box><BarChartIcon/></Box>
               <Box>{showBarChart ? "Hide Bar Chart" : "Show Bar Chart"}</Box>
            </Box>
         </Button>
         <Button
         className={classes.btn}
         color="primary">
            <Box>
               <Box><DeveloperModeIcon/></Box>
               <Box>Create Plan</Box>
            </Box>
         </Button>
      </Box>
      <Button className={classes.buttonRight}>
         <Box>
            <Box><SaveIcon/></Box>
            <Box>Save Changes</Box>
         </Box>
      </Button>
    </Box>
  );
}
