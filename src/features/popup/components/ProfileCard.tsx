import { Avatar, Box, Button, Chip, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import userAvatar from '../../../static/images/icon128.png'
export default function ProfileCard({ profile, name, actions, bio, avatar }: { profile: string, name: string, actions: btnType[], bio?: string, avatar?: string, }) {
   return (
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
            <Chip label={profile} variant="outlined" size='small' sx={{ fontSize: '.5rem', height: '20px' }} />
            <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
               <Avatar src={userAvatar} sx={{ m: 1, bgcolor: 'secondary.main', width: '50px', height: '50px' }} />
               <Box>
                  <Typography component="h5" sx={{ fontSize: '1rem', fontWeight: '600' }}>
                     {name}
                  </Typography>
                  <Typography component="p" fontSize={'12px'}>
                     {bio}
                  </Typography>
                  <Box display={'flex'} gap={'1rem'} mt={'1rem'}>
                     {
                        actions.map((action, index) => <Button key={index} variant="contained" href="#contained-buttons" sx={{ borderRadius: '50px', fontSize: '12px', padding: '5px 16px', lineHeight: '1.5' }}>
                           {action.title}
                        </Button>)
                     }

                     {/* <Button variant="contained" href="#contained-buttons" sx={{ borderRadius: '50px', fontSize: '12px', padding: '5px 16px', lineHeight: '1.5' }}>
                        Update data
                     </Button> */}
                  </Box>
               </Box>
            </Box>
         </Box>
      </Grid>
   )
}
