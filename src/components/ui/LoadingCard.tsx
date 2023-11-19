import { CardHeader, Grid, Paper, Skeleton } from '@mui/material'
import React from 'react'

function LoadingCard() {
   return (
      <Grid item xs={12} sm={8} md={5} borderRadius={'10px'} elevation={3} component={Paper} square>
         <CardHeader
            avatar={
               (
                  <Skeleton animation="wave" variant="circular" width={40} height={40} />
               )
            }
            title={
               <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
               />
            }
            subheader={
               (
                  <Skeleton animation="wave" height={10} width="40%" />
               )
            }
         />
      </Grid>

   )
}

export default LoadingCard