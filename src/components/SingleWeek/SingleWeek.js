import { useState, useEffect} from 'react';
import { useStyles } from "./useStyles";
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

import moment from "moment";
import SummaryBox from "../SummaryBox/SummaryBox";
import Loading   from "../Loading/Loading";
import Error from "../Error/Error";

import useFetch from '../../useFetch';


export default function MainTable() {
   const [weekDate, setWeekDate] = useState( moment());
   
   const year = weekDate.clone().subtract(1, "week").clone().add(1, "day").startOf("week").format("YYYY"); //getting correct year of the week number
	const url = `/api/week/${year}/${weekDate.format("WW")}`

   const { loading, error, data } = useFetch(url);

   const classes = useStyles();
	
	if (loading) {
		return <Loading />
	}
	
	if (error.show) {
	   return <Error message={error.message}/>
	}
	
   return (
      <Paper className={classes.paper}>
         <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
               <Paper>
                  <LineChart data={data.days} />
                  One week Chart
               </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
               <SummaryBox weekDate={weekDate} setWeekDate={setWeekDate} data={data.days}/>
            </Grid>
            <Grid item xs={12}>
               <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                     <TableHead className={classes.tableHeader}>
                        <TableRow>
                           <TableCell>Week number: {data.week}</TableCell>
                           <TableCell align="center">Day</TableCell>
                           <TableCell align="center">Cases</TableCell>
                           <TableCell align="center">Pallets</TableCell>
                           <TableCell align="center">Trailers</TableCell>
                           <TableCell align="center">More Info</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {data.days.map((day) => (
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
