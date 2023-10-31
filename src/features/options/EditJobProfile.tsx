import { Button, SvgIcon, styled } from '@mui/joy'
import { Avatar, Box, TextField, Grid, Paper, Chip, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { isLoggedIn } from '../popup/App';
import { formStructure } from '../../utils/formStructure';
import FormGroupItem from '../../components/ui/FormGroupItem';
import FormGroup from '../../components/ui/FormGroup';
import { app } from '../../api/auth';


function EditJobProfile() {
   const [profileData, setProfileData] = useState<jobProfileDataType | undefined>();
   const user = app.currentUser;//chekcing for user
   if (user) {
      const token = localStorage.getItem('token'); // get token from local storage
      if (token !== null) {
         const parserdToken = (JSON.parse(token)); // parse token
         if (parserdToken.expiresAt > Date.now()) { // check if token is valid
            isLoggedIn.value = true // set logged in to true
         }
      }
   }
   console.log('rendering');

   const getData = async () => {
      try {
         const res = await app.currentUser?.functions.callFunction('getJobProfileData');
         if (res.jobData) {
            setProfileData({ ...res.jobData });
            console.log('set done');

         } else {
            console.log("No jobData in the response");
         }
      } catch (error) {
         console.error("Error fetching job profile data:", error);
         // Handle the error as needed
      }
   };
   // Use useEffect to call getData when needed
   useEffect(() => {
      getData();
   }, []);

   //handle update job profile
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      user?.functions.callFunction('updateJobData', Object.fromEntries(data)).then((res) => {
         console.log(res);
      })
      console.log(Object.fromEntries(data));
   }
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
  name: 'generalProfileImage';
`;
   return (
      <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }} >
         <Grid item xs={12} sm={8} md={5} padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
            <Chip label={'Basic Information'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
               {
                  formStructure.basic_field.map((item, itIndex) => {
                     return <FormGroup key={itIndex} >
                        {
                           item.fields?.map((field, index) => {
                              return (
                                 <FormGroupItem field={field} key={index} value={profileData ? profileData[field.id] : ''} />
                              )
                           })
                        }
                     </FormGroup>
                  })
               }
            </Box>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Present Address'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.present_address_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Permanent Address'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.permanent_address_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} />
                        )
                     })
                  }
               </Box>
            </Grid>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'SSC/Equivalent Level'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.ssc_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'HSC/Equivalent Level'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.hsc_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} />
                        )
                     })
                  }
               </Box>
            </Grid>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Honors/Equivalent'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.honors_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Masters/Equivalent'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.masters_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} />
                        )
                     })
                  }
               </Box>
            </Grid>
         </Grid>
         <Button type='submit' >
            Update data
         </Button>
      </Box>
   )
}

export default EditJobProfile