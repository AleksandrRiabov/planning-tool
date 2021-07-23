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



 

export const PredictedDataTable = ({data}) => {
   const [predictedData, setPredictedData] = useState([])
   const [cases, setCases] = useState({chill: 1245, produce: 45, bread: 454, ambient: 45, frozen: 45, extra: 45});
   const [pallets, setPallets] = useState({chill: 12, produce: 1, bread: 4, ambient: 51, frozen: 8, extra: 1});

   useEffect(() => {
      setPredictedData(data.predicted.map((product, index) => {
		 const cases = data.actual[index].cases ? data.actual[index].cases : product.cases
         const pallets = Math.round(product.cof * cases);
         return {...product, pallets}
      }))
   }, [data])

   console.log("Predicted ==================")
   const classes = useStyles();

   const getTotal = (data, name) => {
      return data.reduce((total, product) => {
         return total + +product[name];
      },0);
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
                     {predictedData.map((product) => (
                        <TableRow key={product.name}>
                        <TableCell className={classes.product} component="th" scope="row">
                           {product.name}
                        </TableCell>
                        <TableCell align="center">{ product.cases }</TableCell>
                        <TableCell align="center">{ product.pallets }</TableCell>
                        <TableCell align="center">{ (product.pallets / 26).toFixed(2)}</TableCell>
                        </TableRow>
                     ))}
                     <TableRow key="total">
                        <TableCell className={classes.product} component="th" scope="row">
                           TOTAL
                        </TableCell>
                        <TableCell align="center">Total caese: {getTotal(predictedData, "cases")}</TableCell>
                        <TableCell align="center">Total Pallests: {getTotal(predictedData, "pallets")}</TableCell>
                        <TableCell align="center" display="flex">Total: 
                           <Box className={classes.flexWrapper}> 
                              <Box>{getTrailersFromPallets(getTotal(predictedData, "pallets")).trailers} Trailers </Box>
                              <Box>{getTrailersFromPallets(getTotal(predictedData, "pallets")).pallets} pallets</Box>
                            </Box>
                        </TableCell>
                        </TableRow>
                  </TableBody>
                  </Table>
               </TableContainer>
   )
}