import { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import LineChart from "../LineChart/LineChart";
import { Link }  from "react-router-dom"

import SummaryBox from "../SummaryBox/SummaryBox";
import Loading   from "../Loading/Loading";
import Error from "../Error/Error";

import { getSingleWeekData } from "../../services";


const initialData = [
	{week: 1, days: [
		{day: "monday", date: "27.07.2021", cases: 2500, pallets: 100, trailers: 4},
		{day: "tuesday", date: "28.07.2021", cases: 4545, pallets: 150, trailers: 6},
		{day: "wednesday", date: "29.07.2021", cases: 4150, pallets: 130, trailers: 5},
		{day: "thursday", date: "30.07.2021", cases: 4510, pallets: 110, trailers: 5},
		{day: "friday", date: "31.08.2021", cases: 2980, pallets: 105, trailers: 4},
		{day: "saturday", date: "01.08.2021", cases: 4545, pallets: 166, trailers: 7},
		{day: "sunday", date: "02.08.2021", cases: 1700, pallets: 74, trailers: 3},
	]},
	{week: 2, days: [
		{day: "monday", date: "03.08.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "tuesday", date: "04.08.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "wednesday", date: "05.08.2021", cases: 4555, pallets: 100, trailers: 5},
		{day: "thursday", date: "06.08.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "friday", date: "07.08.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "saturday", date: "08.08.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "sunday", date: "09.08.2021", cases: 4545, pallets: 100, trailers: 5},
	]},
]

// const weekData = [
// 	{week: 1, cases: 21145, pallets: 700, trailers: 25},
// 	{week: 2, cases: 21145, pallets: 700, trailers: 25},
// 	{week: 3, cases: 21145, pallets: 700, trailers: 25},
// 	{week: 4, cases: 21145, pallets: 700, trailers: 25},
// 	{week: 5, cases: 21145, pallets: 700, trailers: 25}
// ]

const useStyles = makeStyles((theme) => ({
   table: {
      minWidth: 350,
   },
   firstCell: {
      background: "teal",
      color: "#fff",
      textTransform: "capitalize",
      fontWeight: "600",
   },
   tableHeader: {
      background: "#e7fff4",
   },
   btn: {
      background: "teal",
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
   },
}));


export default function MainTable() {
   const [data, setData] = useState({});
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({isError: false, message: ""});
   const [date, setDate] = useState(new Date());
	
   const classes = useStyles();

	useEffect(() => {
		setLoading(true);
		setData(initialData);
		setLoading(false);
		
		// const runFetch = async() => {
		// 	try{
		// 		const fetchedData = await getSingleWeekData(date);
		// 			setData(fetchedData);						
		// 	} catch(err){
		// 		console.log("Not Fetched data");
		//         setError({isError: true, message: err.message});
		// 	} finally{
		// 		setLoading(false);
		// 	}
		// }
		// runFetch();
	}, []);
	
	
	if (loading) {
		return <Loading />
	}
	
	if (error.isError) {
	   return <Error message={error.message}/>
	}
	
   return (
      <Paper className={classes.paper}>
         <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
               <Paper>
                  <LineChart data={data[0].days} />f
               </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
               <SummaryBox data={data[0].days}/>
            </Grid>
            <Grid item xs={12}>
               <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                     <TableHead className={classes.tableHeader}>
                        <TableRow>
                           <TableCell>Week number: {data[0].week}</TableCell>
                           <TableCell align="center">Day</TableCell>
                           <TableCell align="center">Cases</TableCell>
                           <TableCell align="center">Pallets</TableCell>
                           <TableCell align="center">Trailers</TableCell>
                           <TableCell align="center">More Info</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {data[0].days.map((day) => (
                           <TableRow key={day.date}>
                              <TableCell className={classes.firstCell}>
                                 {day.day}
                              </TableCell>
                              <TableCell align="center">{day.date}</TableCell>
                              <TableCell align="center">{day.cases}</TableCell>
                              <TableCell align="center">
                                 {day.pallets}
                              </TableCell>
                              <TableCell align="center">
                                 {day.trailers}
                              </TableCell>
                              <TableCell align="center">
                                 <Link to={`/day/${day.date}`}>
                                    <Button
                                       className={classes.btn}
                                       size="small"
                                       variant="contained"
                                       color="primary"
                                    >
                                       Open Day Details
                                    </Button>
                                 </Link>
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Grid>
         </Grid>
      </Paper>
   );
}
