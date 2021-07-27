import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
	  padding: "20px"
  },
  
});

const SummaryBox = () => {
	const classes = useStyles();
	
	return (
		<Paper >
		   <Box className={classes.root}>
			  <Box>
				  <Typography  variant="h5" gutterBottom>Average</Typography>
				</Box>
				<Box>
					<Typography align={"left"} variant="h6" gutterBottom>Cases: 4545</Typography>
				</Box>
				<Box>
					<Typography align={"left"} variant="h6" gutterBottom>Pallets: 454</Typography>
				</Box>
				<Box>
					<Typography align={"left"} variant="h6" gutterBottom>Trailers: 44</Typography>
				</Box>
			</Box>
		</Paper>
	)
}

export default SummaryBox;