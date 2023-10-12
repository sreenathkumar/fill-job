import { Box, Chip, Grid, Paper, TextField, Typography, ThemeProvider, Avatar, } from '@mui/material'
import React from 'react'
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';

function EditGeneralProfile() {
   const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
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
            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>

               <Box sx={{ display: 'flex', gap: '1rem' }}>
                  <TextField
                     name="firstName"
                     required
                     fullWidth
                     id="firstName"
                     label="First Name"
                     autoFocus
                     defaultValue="Default Value"
                  />

                  <TextField
                     required
                     fullWidth
                     id="lastName"
                     label="Last Name"
                     name="lastName"
                     defaultValue="Default Value"
                  />
               </Box>

               <TextField
                  id="outlined-multiline-static"
                  label="Bio"
                  name='bio'
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  fullWidth
               />
               <Box sx={{ display: 'flex', gap: '1rem' }} width={'100%'}>
                  <Avatar variant="square" sx={{ width: '50px', height: '50px' }}>
                     <img src="https://mui.com/static/images/avatar/1.jpg" alt="" width={'100%'} height={'100%'} />
                  </Avatar>
                  <Button
                     component="label"
                     tabIndex={-1}
                     variant="outlined"
                     fullWidth
                     startDecorator={
                        <SvgIcon>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                           </svg>
                        </SvgIcon>
                     }
                  >
                     Upload profile picture
                     <VisuallyHiddenInput type="file" />
                  </Button>
               </Box>

               <Box display={'flex'} gap={'1rem'} mt={'1rem'}>
                  <Button type='submi' href="#contained-buttons">
                     Update data
                  </Button>
               </Box>
            </Box>
         </Box>
      </Grid>

   )
}

export default EditGeneralProfile