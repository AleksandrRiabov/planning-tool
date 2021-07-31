import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { getAllTotalsAndAverages} from "../../helpers";

const useStyles = makeStyles({
  root: {
	  padding: "20px",
  },
  titleBox:{
	  display: "flex",
	  justifyContent: "space-between",
	  alignItems: "center",
	  background: "teal",
	  color: "#fff",
	  height: "100%",
  },
	arrows: {
		cursor: "pointer",
		padding: "10px",
		background: "#e7fff4",
		color: "teal"
	},
});

const SummaryBox = ({data}) => {
	const classes = useStyles();
	
	const { cases, averageCasses, pallets, averagePallets, trailers, averageTrailers } = getAllTotalsAndAverages(data);

	return (
		<Paper className={classes.root} >
			<Grid container spacing={1}>
				<Grid item xs={12}>
				  <Box className={classes.titleBox}>
					  <ArrowBackIcon className={classes.arrows}/>
					  <Typography  variant="h6" color="inherit" >Week 52 </Typography>
					  <ArrowForwardIcon className={classes.arrows}/>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={12}>
					<Box>
						<Box>
							<Typography  variant="h6"  gutterBottom>Day Average:</Typography>
						</Box>
							<Box>
								<Typography align={"left"} variant="body1" gutterBottom>Cases: <span className="bold">{averageCasses}</span></Typography>
							</Box>
							<Box>
								<Typography align={"left"} variant="body1" gutterBottom>Pallets: <span className="bold">{averagePallets}</span></Typography>
							</Box>
							<Box>
								<Typography align={"left"} variant="body1" gutterBottom>Trailers: <span className="bold">{averageTrailers}</span></Typography>
							</Box>
			 		 </Box>
				</Grid>
				<Grid item xs={12} sm={6} md={12}>
						<Box>
							<Box>
								<Typography  variant="h6"  gutterBottom>Total:</Typography>
								</Box>
								<Box>
									<Typography align={"left"} variant="body1" gutterBottom>Cases: <span className="bold">{cases}</span></Typography>
								</Box>
								<Box>
									<Typography align={"left"} variant="body1" gutterBottom>Pallets: <span className="bold">{pallets}</span></Typography>
								</Box>
								<Box>
									<Typography align={"left"} variant="body1" gutterBottom>Trailers: <span className="bold">{trailers}</span></Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default SummaryBox;