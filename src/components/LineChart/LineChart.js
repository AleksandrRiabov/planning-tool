import {Line} from "react-chartjs-2";

const LineChart = ({data}) =>  {
   if (!data.length){
      return "Loading..."
   }

   return (
      <div >
         {data.length ? 
       <Line 
       data={{
          labels: data.map(day => day.date), 
          datasets: [{
             data: data.map(day => day.cases),
             label: "Cases",
             borderColor: "teal",
             backgroundColor: "#00808026",
             fill: true
          },{
             data: data.map(day => day.pallets), 
             label: "Pallets",
             borderColor: "red",
             backgroundColor: "rgba(255,0,0,0.5)",
             fill: true
          },
          {
            data: data.map(day => day.trailers), 
            label: "Trailers",
            borderColor: "#3333ff",
            backgroundColor: "#00808026",
            fill: true
         }]
       }}
       /> : null}
      </div>
   )
}

export default LineChart
