import { Button, SvgIcon, styled } from '@mui/joy'
import { Avatar, Box, TextField, Grid, Paper, Chip, Divider, FormControlLabel, Checkbox } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { isLoggedIn } from '../popup/App';
import { formStructure } from '../../utils/formStructure';
import FormGroupItem from '../../components/ui/FormGroupItem';
import FormGroup from '../../components/ui/FormGroup';
import { app } from '../../api/auth';
import { jobProfileFormInfo } from '../../utils/formInfo';


function EditJobProfile() {
   const [profileData, setProfileData] = useState<jobProfileDataType | undefined>();
   const [masApplicable, setMasApplicable] = useState(false);
   const [samePermanentAddress, setSamePermanentAddress] = useState(false);
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
      let updatedData = { ...Object.fromEntries(data) };

      if (profileData) {
         updatedData = { ...profileData, ...Object.fromEntries(data) };
      }
      //updating job profile data
      try {
         user?.functions.callFunction('updateJobData', updatedData).then((res) => {
            setProfileData({ ...res.jobData });
            console.log(res);

         })
      } catch (error) {
         alert(error);
      }
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
                                 <FormGroupItem field={field} key={index} value={profileData ? profileData[field.id] : ''} fieldInfo={jobProfileFormInfo[field.id]} />
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
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Permanent Address'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  <FormControlLabel control={<Checkbox checked={samePermanentAddress} name='same_as_present' id='same_as_present' onChange={() => setSamePermanentAddress(!samePermanentAddress)} />} sx={{ alignSelf: 'flex-start' }} label="Same as present" />

                  {samePermanentAddress ?
                     formStructure.permanent_address_field.map((item, itIndex) => {
                        let elementOfPresent = document.getElementById(`${item.id.replace('permanent', 'present')}`) as HTMLInputElement;

                        return (
                           <FormGroupItem field={item} key={itIndex} value={elementOfPresent?.value || ''} fieldInfo={jobProfileFormInfo[item.id]} />
                        )
                     })
                     :
                     formStructure.permanent_address_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
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
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
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
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
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
                           <FormGroupItem field={item} key={itIndex} value={profileData ? profileData[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Masters/Equivalent'} variant="outlined" sx={{ marginBottom: '2.5rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  <FormControlLabel control={<Checkbox checked={masApplicable} id='if_applicable_mas' name='if_applicable_mas' onChange={() => setMasApplicable(!masApplicable)} />} sx={{ alignSelf: 'flex-start' }} label="If applicable" />
                  {
                     formStructure.masters_field.map((item, itIndex) => {
                        return (
                           <FormGroupItem field={item} key={itIndex} disabled={!masApplicable} value={profileData ? profileData[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
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