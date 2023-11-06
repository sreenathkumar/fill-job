import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import { theme } from '../../../utils/theme'
import ProfileCard from './ProfileCard'
import { appView } from '../App'
import { useQuery } from '@tanstack/react-query'
import { getJobProfile } from '../../../api/data'
import { app } from '../../../api/auth'

export default function Home({ profileData }: { profileData: generalProfileDataType }) {

   const handleEditGeneralProfile = () => {
      appView.value = 'editGeneralProfile'
   }

   const handleUpdateJobProfile = () => {
      chrome.tabs.create({ url: 'js/options.html' })
   }

   const handleFill = () => {
      app.currentUser?.functions.callFunction('getJobProfileData').then((res) => {
         if (res.jobData) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
               chrome.tabs.sendMessage(
                  tab[0].id!,
                  { from: 'fill', data: res.jobData },
                  (response) => {
                     console.log(response);
                  }
               )
            });
         } else {
            alert('Please update your job profile first')
         }
      })
   };



   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" gap={'1rem'}>
            <ProfileCard profile={'General Profile'} data={profileData} actions={[{ title: 'Edit info', task: handleEditGeneralProfile },]} />
            <ProfileCard profile={'Job Profile'} data={profileData} actions={[{ title: 'Update', task: handleUpdateJobProfile }, { title: 'Fill up', task: handleFill }]} />
         </Grid>
      </ThemeProvider>
   )
}
