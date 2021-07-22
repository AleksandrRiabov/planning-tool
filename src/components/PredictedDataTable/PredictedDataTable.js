import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useStyles } from "../tableStyles/dayTableStyles";
import "./PredictedDataTable.css";

import { getTrailersFromPallets } from "../../helpers";

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
 }
 
 const rows = [
   createData('Chill', 159, 6.0, 24, 4.0),
   createData('Produce', 237, 9.0, 37, 4.3),
   createData('Bread', 262, 16.0, 24, 6.0),
   createData('Ambient', 305, 3.7, 67, 4.3),
   createData('Frozen', 356, 16.0, 49, 3.9),
   createData('Extra', 356, 16.0, 49, 3.9),
 ];


 

export const PredictedDataTable = ({initialData}) => {
   const [data, setData] = useState(initialData)
   const [cases, setCases] = useState({chill: 1245, produce: 45, bread: 454, ambient: 45, frozen: 45, extra: 45});
   const [pallets, setPallets] = useState({chill: 12, produce: 1, bread: 4, ambient: 51, frozen: 8, extra: 1});

   useEffect(() => {
      setData(data.map(product => {
         const pallets = Math.round(product.cof * product.cases);
         return {...product, pallets}
      }))
   }, [])

   console.log(data)
   const classes = useStyles();

   const getTotal = (obj) => {
      return Object.values(obj).reduce((a, b) => +a + +b);
   }
  
   return (
            <TableContainer component={Paper}>
               <Box className={classes.tableTitle}><Typography variant="h6">Predicted Data..</Typography></Box>
                  <Table className={classes.table} aria-label="simple table"> 
                  <TableHead className={classes.tableHead}>
                     <TableRow>
                        <TableCell >Product</TableCell>
                        <TableCell align="center">Cases</TableCell>
                        <TableCell align="center">Pallets</TableCell>
                        <TableCell align="center">Trailers</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell className={classes.product} component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="center">{ cases[row.name.toLowerCase()] }</TableCell>
                        <TableCell align="center">{ pallets[row.name.toLowerCase()] }</TableCell>
                        <TableCell align="center">{ (pallets[row.name.toLowerCase()] / 26).toFixed(2)}</TableCell>
                        </TableRow>
                     ))}
                     <TableRow key="total">
                        <TableCell className={classes.product} component="th" scope="row">
                           TOTAL
                        </TableCell>
                        <TableCell align="center">Total caese: {getTotal(cases)}</TableCell>
                        <TableCell align="center">Total Pallests: {getTotal(pallets)}</TableCell>
                        <TableCell align="center" >Total: 
                           <Box> 
                              {getTrailersFromPallets(getTotal(pallets)).trailers} Trailers <br/>
                              {getTrailersFromPallets(getTotal(pallets)).pallets} Pallets
                            </Box>
                        </TableCell>
                        </TableRow>
                  </TableBody>
                  </Table>
               </TableContainer>
   )
}