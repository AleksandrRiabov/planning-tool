import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import "./SingleDay.css";

import DayTable  from "../DayTable/DayTable";
import BarChart from "../BarChart/BarChart";
import OptionsBar from "../OptionsBar/OptionsBar";
import Loading   from "../Loading/Loading";
import Error from "../Error/Error";

import { createChartData } from "../../helpers";
import { getSingleDayData } from "../../services";


const initialData = [
  {
    name: "chill",
    cases: "",
    pallets: "",
    category: 1,
    predictedCases: 777,
    cof: 0.0071,
  },
  {
    name: "produce",
    cases: "",
    pallets: "",
    category: 1,
    predictedCases: 848,
    cof: 0.02,
  },
  {
    name: "bread",
    cases: "",
    pallets: "",
    category: 1,
    predictedCases: 545,
    cof: 0.02,
  },
  {
    name: "ambient",
    cases: "",
    pallets: "",
    category: 1,
    predictedCases: 4545,
    cof: 0.006,
  },
  {
    name: "frozen",
    cases: "",
    pallets: "",
    category: 1,
    predictedCases: 121,
    cof: 0.025,
  },
  {
    name: "bunzl",
    cases: "",
    pallets: "",
    category: 1,
    predictedCases: 85,
    cof: 0.05,
  },
  {
    name: "extra",
    cases: "",
    pallets: "",
    category: 1,
    predictedCases: 100,
    cof: 0.009,
  },
];
const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
   }
 }));


export const SingleDay = ({date}) => {
  const [data, setData] = useState({});
  const [showBarChart, setShowBarChart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({isError: false, message: ""});
  
  const classes = useStyles();
	
 useEffect(() => {
   setLoading(true);

   const initializeData = async () => {
      try {
         const fetchedData = await getSingleDayData(date);
         //Count "Predicted" pallets for each product according to coefficient and add to array of data
         setData(
            (fetchedData ).map((product) => {
               const predictedPallets = Math.round(
                  product.cof * +product.predictedCases
               );
               return { ...product, predictedPallets };
            })
         );
      } catch (err) {
         console.log("Data Not Fetched");
		  setError({isError: true, message: err.message});
      } finally {
         setLoading(false);
      }
   };

   initializeData();
}, [date]);


  const onPalletsInputChange = (e) => {
    const updated = data.map((product) => {
      if (product.name === e.target.name) {
        return { ...product, pallets: e.target.value };
      } else {
        return product;
      }
    });
    setData(updated);
  };

  const onCasesInputChange = (e) => {
    const updated = data.map((product) => {
      if (product.name === e.target.name) {
        const predictedPallets = e.target.value
          ? Math.round(product.cof * +e.target.value)
          : Math.round(product.cof * product.predictedCases);
        return { ...product, cases: e.target.value, predictedPallets };
      } else {
        return product;
      }
    });
    setData(updated);
  };

	if (loading) {
		return <Loading/>
	}
	
	if (error.isError) {
	   return <Error message={error.message}/>
	}
	
  return (
    <Paper className={classes.paper}>
        <div className="singleDay">
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <DayTable
            data={data}
            onCasesInputChange={onCasesInputChange}
            onPalletsInputChange={onPalletsInputChange}
          />
        </Grid>
        <CSSTransition 
         in={showBarChart}
         timeout={300}
         classNames="chart"
         unmountOnExit
        >
        <Grid item xs={12}>
            <Paper>
              <BarChart
                className="chart"
                chartData={createChartData(data)}
                title={"Actual Cases vs Expected "}
              />
            </Paper>
          </Grid>
        </CSSTransition>
           <OptionsBar
          showBarChart={showBarChart}
          setShowBarChart={setShowBarChart}
        />
      </Grid>
    </div>
    </Paper> 
  );
};