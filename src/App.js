import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useGlobalContext } from "./context";
import { SingleDay } from './components/SingleDay/SingleDay';
import SingleWeek from "./components/SingleWeek/SingleWeek";
import { DayTable } from './components/DayTable/DayTable';

import Navbar from './components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  const data = useGlobalContext();
  console.log(data)
  return (
    <div className="app">
      <Navbar />
        <Container className="main">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SingleDay/>
              </Paper>
            </Grid>
        </Grid>
      </div>      
      </Container>
    </div>
  );
}

export default App;
