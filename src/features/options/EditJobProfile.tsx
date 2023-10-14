import { Button, SvgIcon, styled } from '@mui/joy'
import { Avatar, Box, TextField, Grid, Paper, Chip, Divider } from '@mui/material'
import React from 'react'
import { appView } from '../popup/App';

function EditJobProfile() {
   const data = {
      name: '',
      name_bn: '',
      father: '',
      father_bn: '',
      mother: '',
      mother_bn: '',
      dob: '',
      religion: '',
      gender: '',
      nid: '',
      nid_no: '',
      breg: '',
      breg_no: '',
      passport: '',
      marital_status: '',
      mobile: '',
      confirm_mobile: '',
      email: '',
      quota: '',
      dep_status: '',
      present_careof: '',
      present_village: '',
      present_district: '',
      present_upazila: '',
      present_post: '',
      present_postcode: '',
      same_as_present: '',
      permanent_careof: '',
      permanent_village: '',
      permanent_district: '',
      permanent_upazila: '',
      permanent_post: '',
      permanent_postcode: '',
      ssc_exam: '',
      ssc_roll: '',
      ssc_group: '',
      ssc_board: '',
      ssc_result_type: '',
      ssc_result: '',
      ssc_year: '',
      hsc_exam: '',
      hsc_roll: '',
      hsc_group: '',
      hsc_board: '',
      hsc_result_type: '',
      hsc_result: '',
      hsc_year: '',
      gra_exam: '',
      gra_institute: '',
      gra_year: '',
      gra_subject: '',
      gra_result_type: '',
      gra_result: '',
      gra_duration: '',
      if_applicable_mas: '',
      mas_exam: '',
      mas_institute: '',
      mas_year: '',
      mas_subject: '',
      mas_result_type: '',
      mas_duration: ''
   }
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
            <Chip label={'Basic Information'} variant="outlined" />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>Hello</h1>
            </Box>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Present Address'} variant="outlined" />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>

               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Permanent Address'} variant="outlined" />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>

               </Box>
            </Grid>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Present Address'} variant="outlined" />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>

               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Permanent Address'} variant="outlined" />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>

               </Box>
            </Grid>
         </Grid>
         <Grid container margin={'0px'} sx={{ gap: '2.5rem' }}>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Present Address'} variant="outlined" />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>

               </Box>
            </Grid>
            <Grid item xs padding={'1.5rem'} borderRadius={'10px'} elevation={3} component={Paper} square>
               <Chip label={'Permanent Address'} variant="outlined" />
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', }}>

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