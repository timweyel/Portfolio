import React from 'react';
import { makeStyles, Typography, Container } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  root: {
    padding: "120px"
  }
}));


export default function PRoject() {
  const classes = useStyles();
 
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          About area
        </Typography>
 
        {/* <Typography variant="p" gutterBottom>
          Projects Area
        </Typography> */}
      </div>
    </Container>
  );
}