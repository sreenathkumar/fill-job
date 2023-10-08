import React from 'react'
import { logoutUser } from '../../../api/auth'
import { ThemeProvider } from '@emotion/react'
import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography, Chip, Divider, ButtonGroup } from '@mui/material'
import { theme } from '../../../utils/theme'
import userAvatar from '../../../static/images/icon128.png'


export default function Home() {
   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" gap={'1rem'}>
            <Grid item xs={12} sm={8} md={5} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Box
                  sx={{
                     m: '1rem',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     gap: `1rem`
                  }}
               >
                  <Chip label="General Profile" variant="outlined" size='small' sx={{ fontSize: '.5rem', height: '20px' }} />
                  <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                     <Avatar src={userAvatar} sx={{ m: 1, bgcolor: 'secondary.main', width: '50px', height: '50px' }} />
                     <Box>
                        <Typography component="h5" variant="h5">
                           User Name
                        </Typography>
                        <Typography component="p" fontSize={'12px'}>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, beatae?
                        </Typography>
                     </Box>
                  </Box>
               </Box>
            </Grid>

            <Grid item xs={12} sm={8} md={5} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Box
                  sx={{
                     m: '1rem',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     gap: `1rem`
                  }}
               >
                  <Chip label="Job Profile" variant="outlined" size='small' sx={{ fontSize: '.5rem', height: '20px' }} />
                  <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                     <Avatar src={userAvatar} sx={{ m: 1, bgcolor: 'secondary.main', width: '50px', height: '50px' }} />
                     <Box>
                        <Typography component="h5" sx={{ fontSize: '1rem', fontWeight: '600' }}>
                           User Name
                        </Typography>
                        <Typography component="p" fontSize={'12px'}>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, beatae?
                        </Typography>
                        <Box display={'flex'} gap={'1rem'} mt={'1rem'}>
                           <Button variant="contained" href="#contained-buttons" sx={{ borderRadius: '50px', fontSize: '12px', padding: '5px 16px', lineHeight: '1.5' }}>
                              Update data
                           </Button>
                           <Button variant="contained" href="#contained-buttons" sx={{ borderRadius: '50px', fontSize: '12px', padding: '5px 16px', lineHeight: '1.5' }}>
                              Update data
                           </Button>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ThemeProvider>
   )
}
