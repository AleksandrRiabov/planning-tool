import { Bar} from "react-chartjs-2";


const BarChart = ({chartData, title}) =>  {
 if (!chartData){
    return "... Loading"
 }     
 const {labels, cases} = chartData;
   return (
      <Bar
      className="chart"
      data={{
         labels: labels,
         datasets: [{
            label: title,
            backgroundColor: [
               "rgba(0,0,255,0.6)",
               "rgba(0,0,255,0.4)",
               "rgba(0,255,0,0.6)",
               "rgba(0,255,0,0.4)",
               "rgba(255,0,0,0.6)",
               "rgba(255,0,0,0.4)",
               "rgba(0,0,255,0.6)",
               "rgba(0,0,255,0.4)",
               "rgba(0,255,0,0.6)",
               "rgba(0,255,0,0.4)",
               "rgba(255,0,0,0.6)",
               "rgba(255,0,0,0.4)"],
            data: cases,
         }], 
      }}
      />
   )
}


export default BarChart