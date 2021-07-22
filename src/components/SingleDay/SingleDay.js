import React from 'react';
import Grid from '@material-ui/core/Grid';

import "./SingleDay.css";
import {ActualDataTable } from "../ActualDataTable/ActualDataTable";
import {PredictedDataTable } from "../PredictedDataTable/PredictedDataTable";
 

const data = {
   actual:[
   {name:"chill", cases: 0, pallets: 1, category: 1},
   {name:"produce", cases: 0, pallets: 2, category: 1},
   {name:"bread", cases: 0, pallets: 3, category: 1},
   {name:"ambient", cases: 0, pallets: 8, category: 1},
   {name:"frozen", cases: 0, pallets: 5, category: 1},
   {name:"bunzl", cases: 0, pallets: 6, category: 1},
   {name:"extra", cases: 0, pallets: 6, category: 1}],
   predicted:[
      {name:"chill", cases: 777, cof: 0.0071, category: 1},
      {name:"produce", cases: 848, cof: 0.002, category: 1},
      {name:"bread", cases: 545, cof: 3, category: 1},
      {name:"ambient", cases: 4545, cof: 8, category: 1},
      {name:"frozen", cases: 121, cof: 5, category: 1},
      {name:"bunzl", cases: 85, cof: 6, category: 1},
      {name:"extra", cases: 100, cof: 6, category: 1}]}

export const SingleDay = () => {
   
return (
      <div className="singleDay">
         <Grid container spacing={1}>
         <Grid item xs={12} md={6} >
            <ActualDataTable initialData={data.actual} />
          </Grid>    
          <Grid item xs={12} md={6} >
            <PredictedDataTable initialData={data.predicted}/>
          </Grid>       
         </Grid>     
      </div>
   )
}
