import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/Theme.js';
import { loginUser, logoutUser } from '../api/auth';


export default function SignIn() {

   //handle login
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email: string = data.get('email').toString();
      const password: string = data.get('password').toString();

      //login the user
      loginUser(email, password).then((res) => {
         if (res.status === 'success') {
            alert(res.message)
         } else {
            alert(res.message)
         }
      });
   };

   const handleLogout = () => {
      logoutUser().then((res) => {
         console.log(res);
      })
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

            {/* <CssBaseline /> */}
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
                     Sign in
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                     />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                     />
                     <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                     />
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                     >
                        Sign In
                     </Button>
                     <Grid container>
                        <Grid item xs>
                           <Link href="#" variant="body2">
                              Forgot password?
                           </Link>
                        </Grid>
                        <Grid item>
                           <Link href='./options.html' variant="body2">
                              {"Don't have an account? Sign Up"}
                           </Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ThemeProvider>
   );
}