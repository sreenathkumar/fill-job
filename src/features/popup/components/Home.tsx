import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import { theme } from '../../../utils/theme'
import ProfileCard from './ProfileCard'
import { appView } from '../App'


export default function Home() {
   const { generalData, jobData } = JSON.parse(localStorage.getItem('profileData') || '') || {}; // get profile data from local storage

   const handleEditGeneralProfile = () => {
      appView.value = 'editGeneralProfile'
   }

   const handleUpdateJobProfile = () => {
      chrome.tabs.create({ url: 'js/options.html' })
   }

   const handleFill = () => {
      console.log('fill job profile');
   };

   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" gap={'1rem'}>
            <ProfileCard profile={'General Profile'} data={generalData} actions={[{ title: 'Edit info', task: handleEditGeneralProfile },]} />
            <ProfileCard profile={'Job Profile'} data={jobData} actions={[{ title: 'Update', task: handleUpdateJobProfile }, { title: 'Fill up', task: handleFill }]} />
         </Grid>
      </ThemeProvider>
   )
}
