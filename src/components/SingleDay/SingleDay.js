import React from 'react';
import Grid from '@material-ui/core/Grid';

import "./SingleDay.css";
import { DayTable } from "../DayTable/DayTable";

 

const data = [
			   {name:"chill", cases: "", pallets: "", category: 1, predictedCases: 777, cof: 0.0071},
			   {name:"produce", cases: "", pallets: "", category: 1, predictedCases: 848, cof: 0.02},
			   {name:"bread", cases: "", pallets: "", category: 1, predictedCases: 545, cof: 0.02},
			   {name:"ambient", cases: "", pallets: "", category: 1, predictedCases: 4545, cof: 0.006},
			   {name:"frozen", cases: "", pallets: "", category: 1, predictedCases: 121, cof: 0.025},
			   {name:"bunzl", cases: "", pallets: "", category: 1, predictedCases: 85, cof: 0.05},
			   {name:"extra", cases: "", pallets: "", category: 1, predictedCases: 100, cof: 0.009}
   ]

export const SingleDay = () => {
	

return (
      <div className="singleDay">
         <Grid container spacing={1}>
         <Grid item xs={12} md={12} >
			 <DayTable initialData={data}/>
          </Grid>    
          <Grid item xs={12} md={6} >
          </Grid>       
         </Grid>     
      </div>
   )
}
