import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const data = [
	{week: 1, days: [
		{day: "monday", date: "27.07.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "tuesday", date: "28.07.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "wednesday", date: "29.07.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "thursday", date: "30.07.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "friday", date: "31.08.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "saturday", date: "01.08.2021", cases: 4545, pallets: 100, trailers: 5},
		{day: "sunday", date: "02.08.2021", cases: 4545, pallets: 100, trailers: 5},
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

const weekData = [
	{week: 1, cases: 21145, pallets: 700, trailers: 25},
	{week: 2, cases: 21145, pallets: 700, trailers: 25},
	{week: 3, cases: 21145, pallets: 700, trailers: 25},
	{week: 4, cases: 21145, pallets: 700, trailers: 25},
	{week: 5, cases: 21145, pallets: 700, trailers: 25}
]


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];




export default function MainTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Cases</TableCell>
            <TableCell align="right">Pallets</TableCell>
            <TableCell align="right">Trailers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
