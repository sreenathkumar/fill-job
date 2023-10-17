import { Button, SvgIcon, styled } from '@mui/joy'
import { Avatar, Box, TextField, Grid, Paper, Chip, Divider } from '@mui/material'
import React, { useState } from 'react'
import { appView } from '../popup/App';
import { formStructure } from '../../utils/formStructure';
import FormGroupItem from '../../components/ui/FormGroupItem';
import FormGroup from '../../components/ui/FormGroup';
const pdata = require('../../../data.json')

function EditJobProfile({ profData = { ...pdata } }: { profData?: jobProfileDataType }) {
   const [profileData, setProfileData] = useState(profData || undefined);
   console.log(profileData['name']);

   const handleSubmit = () => { }
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
            <Chip label={'Basic Information'} variant="outlined" sx={{ marginBottom: '1rem' }} />
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
               {
                  formStructure.basic_field.map((item, itIndex) => {
                     return <FormGroup key={itIndex} >
                        {
                           item.fields?.map((field, index) => {
                              const value = profileData[field.id];
                              return (
                                 <FormGroupItem field={field} key={index} value={profileData ? value : ''} />
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
               <Chip label={'Present Address'} variant="outlined" sx={{ marginBottom: '1rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.present_address_field.map((item, itIndex) => {
                        return (
                           <TextField
                              key={itIndex}
                              variant="outlined"
                              fullWidth
                              id={item.id}
                              label={item.label}
                              name={item.id}
                              required
                           />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Permanent Address'} variant="outlined" sx={{ marginBottom: '1rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.present_address_field.map((item, itIndex) => {
                        return (
                           <TextField
                              key={itIndex}
                              variant="outlined"
                              fullWidth
                              id={item.id}
                              label={item.label}
                              name={item.id}
                              required
                           />
                        )
                     })
                  }
               </Box>
            </Grid>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'SSC/Equivalent Level'} variant="outlined" sx={{ marginBottom: '1rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.ssc_field.map((item, itIndex) => {
                        return (
                           <TextField
                              key={item.id}
                              variant="outlined"
                              fullWidth
                              id={item.id}
                              label={item.label}
                              name={item.id}
                              required
                           />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'HSC/Equivalent Level'} variant="outlined" sx={{ marginBottom: '1rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.hsc_field.map((item, itIndex) => {
                        return (
                           <TextField
                              key={item.id}
                              variant="outlined"
                              fullWidth
                              id={item.id}
                              label={item.label}
                              name={item.id}
                              required
                           />
                        )
                     })
                  }
               </Box>
            </Grid>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Honors/Equivalent'} variant="outlined" sx={{ marginBottom: '1rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.honors_field.map((item, itIndex) => {
                        return (
                           <TextField
                              key={item.id}
                              variant="outlined"
                              fullWidth
                              id={item.id}
                              label={item.label}
                              name={item.id}
                              required
                           />
                        )
                     })
                  }
               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Masters/Equivalent'} variant="outlined" sx={{ marginBottom: '1rem' }} />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>
                  {
                     formStructure.masters_field.map((item, itIndex) => {
                        return (
                           <TextField
                              key={item.id}
                              variant="outlined"
                              fullWidth
                              id={item.id}
                              label={item.label}
                              name={item.id}
                              required
                           />
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