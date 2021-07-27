import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useGlobalContext } from "./context";
import { SingleDay } from './components/SingleDay/SingleDay';
import SingleWeek from "./components/SingleWeek/SingleWeek";
import Footer from "./components/Footer/Footer";

import Navbar from './components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
	container: {
		minHeight: "75vh"
	}
}));

function App() {
  const classes = useStyles();

  const data = useGlobalContext();

  return (
	  <Router>
	 
    <div className="app">
      <Navbar />
        <Container className="main">
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={3}>
			 <Switch>
                <Route path="/" exact><SingleWeek /></Route>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Route path="/day"><SingleDay/></Route>
              </Paper>
            </Grid>
		    </Switch>		 
        </Grid>
      </div>      
      </Container>
      <Footer />
    </div>
		   </Router>
  );
}

export default App;
