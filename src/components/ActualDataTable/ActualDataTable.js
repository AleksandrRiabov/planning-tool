import React, {useState} from 'react';
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
import "./ActualDataTable.css";

import { getTrailersFromPallets } from "../../helpers";


export const ActualDataTable = ({initialData}) => {
   const [data, setData] = useState(initialData);

   const classes = useStyles();
   
   const onInputChange = (e, input) => {
      setData(data.map(product => {
         if (product.name !== e.target.name) {
            return product
         } else {
            return {...product, [input]: e.target.value}
         }
      }))
   }
 
   const getTotal = (data, name) => {
      return data.reduce((total, product) => {
         return total + +product[name];
      },0);
   }

   
   return (
            <TableContainer component={Paper}>
               <Box className={classes.tableTitle}><Typography variant="h6">Actual Data..</Typography></Box>
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
                     {data.map((product) => (
                        <TableRow key={product.name}>
                        <TableCell className={classes.product} component="th" scope="product">
                           {product.name}
                        </TableCell>
                        <TableCell align="center">
                              <input onChange={(e) => onInputChange(e,"cases")} name={product.name} value={product.cases} placeholder="Case Qty"/>
                        </TableCell>
                        <TableCell align="center">
                             <input onChange={(e) => onInputChange(e,"pallets")} name={product.name} value={product.pallets} placeholder="Insert Qty"/>
                        </TableCell>
                        <TableCell align="center">{ product.pallets ? ((product.pallets / 26).toFixed(2)): 0}</TableCell>
                        </TableRow>
                     ))}
                     <TableRow key="total">
                        <TableCell className={classes.product} component="th" scope="product">
                           TOTAL
                        </TableCell>
                        <TableCell align="center">Total caese: {getTotal(data, "cases")}</TableCell>
                        <TableCell align="center">Total Pallests: {getTotal(data, "pallets")}</TableCell>
                        <TableCell align="center" display="flex">Total: 
                           <Box className={classes.flexWrapper}> 
                              <Box>{getTrailersFromPallets(getTotal(data, "pallets")).trailers} Trailers </Box>
                              <Box>{getTrailersFromPallets(getTotal(data, "pallets")).pallets} pallets</Box>
                            </Box>
                        </TableCell>
                        </TableRow>
                  </TableBody>
                  </Table>
               </TableContainer>
   )
}