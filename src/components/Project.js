import React from 'react';
import { 
  GridList, 
  Typography, 
  makeStyles, 
  Card,
  GridListTile,
  CardHeader,
  CardActions,
  Button
   } from "@material-ui/core";
 


export default function Blog() {
  const useStyles = makeStyles();
  const tileData = [];
  return (
    <div className={useStyles.root}>
      <Typography variant="h3" gutterBottom>
        Projects area
      </Typography>
      <GridList className={useStyles.gridList} cols={3} spacing={30}>
        {tileData.map(tile => (
          <GridListTile cols={1} className={useStyles.gridTile}>
            <Card>
              <CardHeader title={tile} />
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  Read more
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}