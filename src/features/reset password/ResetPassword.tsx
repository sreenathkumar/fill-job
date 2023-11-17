import { Box, Button, Grid, Paper, TextField, Typography, Link, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../../utils/theme';
import { redirectTo } from '../popup/App';
import { app } from '../../api/auth';


export default function ResetPassword() {
   const [sendMailMessage, setSendMailMessage] = useState('')
   function handleResetPassword(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const { email } = Object.fromEntries(data);
      try {
         app.emailPasswordAuth.sendResetPasswordEmail({ email: email.toString() }).then((res) => {
            setSendMailMessage('Password reset link has been sent. Please check your email');
         });
      } catch (error) {
         setSendMailMessage('Something went wrong. Please try again');
      }

   }
   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main">
            <Box gap='0.5rem' mb='2.5rem' sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               width: '100%',
            }}>
               <Typography component="h1" variant="h5" fontWeight='900' >
                  Fill Job
               </Typography>
               <Typography component='p'>
                  Fill up your dream job within a minute
               </Typography>
            </Box>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
               <Box
                  sx={{
                     m: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                  }}
               >
                  <Typography component="h2" variant="h5">
                     Reset Password
                  </Typography>
                  <Box component="form" onSubmit={handleResetPassword} sx={{ mt: 1 }}>
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="reset_email"
                        label="Email Aaddress"
                        name="email"
                        type="email"
                        autoFocus
                     />
                     {sendMailMessage !== '' &&
                        <Typography component='p' fontSize={'12px'} color={'rgb(244, 67, 54)'}>
                           {sendMailMessage}
                        </Typography>}
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                     >
                        Reset Password
                     </Button>
                     <Grid container>
                        <Grid item xs>
                           <Link onClick={() => redirectTo('signin')} sx={{ cursor: 'pointer' }} variant="body2">
                              Sign In
                           </Link>
                        </Grid>
                        <Grid item>
                           <Link onClick={() => redirectTo('signup')} sx={{ cursor: 'pointer' }} variant="body2">
                              {"Don't have an account? Sign Up"}
                           </Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ThemeProvider>
   )
}
