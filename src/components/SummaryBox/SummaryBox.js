import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
	  padding: "20px",
  },
  titleBox:{
	  background: "teal",
	  color: "#fff"
  }
});

const SummaryBox = () => {
	const classes = useStyles();
	
	return (
		<Paper className={classes.root} >
			<Box className={classes.titleBox}><Typography  variant="h6" color="inherit" gutterBottom>Week 52 </Typography></Box>
		   <Box >
			  <Box>
				<Box>
					<Typography  variant="h6"  gutterBottom>Average:</Typography>
					</Box>
					<Box>
						<Typography align={"left"} variant="body1" gutterBottom>Cases: <span className="bold">5454</span></Typography>
					</Box>
					<Box>
						<Typography align={"left"} variant="body1" gutterBottom>Pallets: <span className="bold">554</span></Typography>
					</Box>
					<Box>
						<Typography align={"left"} variant="body1" gutterBottom>Trailers: <span className="bold">54</span></Typography>
					</Box>
			  </Box>
			  <Box>
			  <Box>
				  <Typography  variant="h6"  gutterBottom>Total:</Typography>
				</Box>
				<Box>
					<Typography align={"left"} variant="body1" gutterBottom>Cases: <span className="bold">39847</span></Typography>
				</Box>
				<Box>
					<Typography align={"left"} variant="body1" gutterBottom>Pallets: <span className="bold">4237</span></Typography>
				</Box>
				<Box>
					<Typography align={"left"} variant="body1" gutterBottom>Trailers: <span className="bold">511</span></Typography>
				</Box>
			  </Box>
			</Box>
		</Paper>
	)
}

export default SummaryBox;