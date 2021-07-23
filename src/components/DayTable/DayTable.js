import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


import { useStyles } from "./dayTableStyles";
import "./DayTable.css";

import { getTrailersFromPallets } from "../../helpers";


export const DayTable = ({initialData}) => {
   const [data, setData] = useState(initialData);
	
   const classes = useStyles();
	
	useEffect(() => {
		setData(initialData.map(product => {
			const predictedPallets = Math.round(product.cof * +product.predictedCases);
			return {...product, predictedPallets}
		}))
	}, [initialData]);
	
   const onInputChange = (e, input) => {
	   
	   if (input === "pallets"){
			   const updated = data.map(product => {
					   if (product.name === e.target.name){
						   return {...product, pallets : e.target.value}
					   } else { return product }
		   	  });
			   setData(updated);
	   } else {
		     const updated = data.map(product => {
					   if (product.name === e.target.name){
						 const predictedPallets = e.target.value ? Math.round(product.cof * +e.target.value) : Math.round(product.cof * product.predictedCases)
						   return {...product, cases : e.target.value, predictedPallets}
					   } else { return product }
		   	  });
			   setData(updated);
	   }
   }
 
   const getTotal = (data, name) => {
      return data.reduce((total, product) => {
		  if (name === "predictedCases") {
				  if (product.cases) {
				  return total + +product.cases;
			  } else {
				  return total + +product.predictedCases;
			  }
		  }  
         return total + +product[name];
      },0);
   }
   
   return (
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table"> 
                  <TableHead className={classes.tableHead}>
                     <TableRow>
                        <TableCell >Product</TableCell>
                        <TableCell align="center">Cases</TableCell>
                        <TableCell align="center">Pallets</TableCell>
                        <TableCell align="center">Trailers</TableCell>
						<TableCell align="center" className={classes.predicted}>Expected Cases</TableCell>
                        <TableCell align="center" className={classes.predicted}>Expected Pallets</TableCell>
                        <TableCell align="center" className={classes.predicted}>Expected Trailers</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody >
                     {data.map((product, index) => {
						  const { name, cases, pallets, predictedCases, predictedPallets} = product;
							return   ( 
                        <TableRow className={(index % 2 === 0) ? classes.second : ""} key={name}>
                        <TableCell className={classes.product} component="th" scope="product">
                           {name}
                        </TableCell>
                        <TableCell align="center">
                              <input 
								  onChange={(e) => onInputChange(e,"cases")}
								  name={name} 
								  value={cases}
								  placeholder="Case Qty"/>
                        </TableCell>
                        <TableCell align="center">
                             <input 
								 onChange={(e) => onInputChange(e,"pallets")}
								 name={name}
								 value={pallets}
								 placeholder="Insert Qty"/>
                        </TableCell>
                        <TableCell align="center">{ pallets ? ((pallets / 26).toFixed(2)): 0}</TableCell>
							  
						<TableCell align="center" className={ !cases ? classes.predictedInfo : ""}>{ cases ? cases : predictedCases }</TableCell>
                        <TableCell align="center" className={ !cases ? classes.predictedInfo : ""} >{ predictedPallets }</TableCell>
                        <TableCell align="center" className={ !cases ? classes.predictedInfo : ""} >{ (predictedPallets / 26).toFixed(2)}</TableCell>	  
                        </TableRow>
                     )})}
                     <TableRow key="total">
                        <TableCell className={classes.product} component="th" scope="product">
                           TOTAL
                        </TableCell>
                        <TableCell align="center">Total cases: {getTotal(data, "cases")}</TableCell>
                        <TableCell align="center">Total Pallests: {getTotal(data, "pallets")}</TableCell>
                        <TableCell align="center" display="flex">Total: 
                           <Box className={classes.flexWrapper}> 
                              <Box>{getTrailersFromPallets(getTotal(data, "pallets")).trailers} Trailers </Box>
                              <Box>{getTrailersFromPallets(getTotal(data, "pallets")).pallets} pallets</Box>
                            </Box>
                        </TableCell>
						 
                        <TableCell align="center" className={classes.predicted}>Total Expected cases: {getTotal(data, "predictedCases")}</TableCell>
                        <TableCell align="center" className={classes.predicted}>Total Expected Pallests: {getTotal(data, "predictedPallets")}</TableCell>
                        <TableCell align="center"  className={classes.predicted} display="flex">Total Expected: 
                           <Box className={classes.flexWrapper}> 
                              <Box>{getTrailersFromPallets(getTotal(data, "predictedPallets")).trailers} Trailers </Box>
                              <Box>{getTrailersFromPallets(getTotal(data, "predictedPallets")).pallets} pallets</Box>
                            </Box>
                        </TableCell>
                        </TableRow>
                  </TableBody>
                  </Table>
               </TableContainer>
   )
}