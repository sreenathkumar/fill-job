import { Box, Button, Chip, Grid, Paper } from '@mui/material'
import React from 'react'

function EditProfile({ children }: { children: React.ReactNode }) {
   return (
      <Grid item xs={12} sm={8} md={5} borderRadius={'10px'} elevation={3} component={Paper} square>
         <Box
            sx={{
               p: '1rem',
               m: '1rem',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               gap: `1rem`
            }}
         >
            <Chip label={'General Profile'} variant="outlined" size='small' sx={{ fontSize: '.5rem', height: '20px' }} />
            {children}
            <Box display={'flex'} gap={'1rem'} mt={'1.5rem'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
               <Button variant='contained'  >
                  Go back
               </Button>
               <Button type='submit' variant='contained' >
                  Update data
               </Button>
            </Box>
         </Box>
      </Grid>
   )
}

export default EditProfile