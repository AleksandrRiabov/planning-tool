import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
   root: {
      marginTop: "50px",
     background: "#00808017",
     height: "20vh",
     minHeight: " 220px"
   },
})

 const Footer = () => {
   const  classes = useStyles();
   return (
      <Box className={classes.root}>
         <Container>
            <Grid container spacing={5}>
               <Grid item xs={12} sm={4}>
                  <Box borederBottom={1}>Hello</Box>
               </Grid>
            </Grid>
         </Container>        
      </Box>
   )
}

export default Footer;