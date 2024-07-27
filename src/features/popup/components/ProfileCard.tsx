import { Avatar, Box, Button, Chip, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import userAvatar from '../../../static/images/icon128.png'


export default function ProfileCard({ profile, actions, data }: { profile: string, actions: btnType[], data?: generalProfileDataType }) {
   const { firstName, lastName, img, bio, real_name, real_image } = data || {};
   
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
               {
                  profile === 'Job Profile' ? <Avatar src={`data:image/png;base64,${real_image}` || userAvatar} sx={{ m: 1, bgcolor: 'secondary.main', width: '50px', height: '50px' }} /> : <Avatar src={img || userAvatar} sx={{ m: 1, bgcolor: 'secondary.main', width: '50px', height: '50px' }} />
               }
               <Box>
                  <Typography component="h5" sx={{ fontSize: '1rem', fontWeight: '600' }}>
                     {profile === 'General Profile' ? ((firstName && lastName) ? firstName + " " + lastName : 'user' + ' ' + 'name') : (real_name ? real_name : 'user' + ' ' + 'name')}
                  </Typography>
                  <Typography component="p" fontSize={'12px'}>
                     {bio || 'bio'}
                  </Typography>
                  <Box display={'flex'} gap={'1rem'} mt={'1rem'}>
                     {
                        actions.map((action, index) => <Button key={index} onClick={() => action.task()} variant="contained" href="#contained-buttons" sx={{ borderRadius: '50px', fontSize: '12px', padding: '5px 16px', lineHeight: '1.5' }}>
                           {action.title}
                        </Button>)
                     }
                  </Box>
               </Box>
            </Box>
         </Box>
      </Grid>
   )
}
