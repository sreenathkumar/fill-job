import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import { theme } from '../../../utils/theme'
import ProfileCard from './ProfileCard'
import { isLoggedIn, redirectTo } from '../App'
import { app, logoutUser } from '../../../api/auth'

export default function Home({ profileData }: { profileData: generalProfileDataType }) {

   const handleEditGeneralProfile = () => {
      redirectTo('editGeneralProfile')
   }

   const handleUpdateJobProfile = () => {
      chrome.tabs.create({ url: 'js/options.html' })
   }

   const handleFill = () => {
      app.currentUser?.functions.callFunction('getJobProfileData').then((res) => {
         if (res.jobData) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
               try {
                  chrome.tabs.sendMessage(
                     tab[0].id!,
                     { from: 'fill', data: res.jobData },
                     (response) => {
                        if (response?.status === 'success') {
                           alert('Job profile filled successfully')
                        } else {
                           alert('Something went wrong, please reload the page and try again')
                        }
                     }
                  )
               } catch (error) {
                  alert('Something went wrong, please reload the page and try again')
               }
            });
         } else {
            alert('Please update your job profile first')
         }
      })
   };

   const handleLogout = () => {
      logoutUser().then((res) => {
         if (res.status === 'success') {
            isLoggedIn.value = false;
            redirectTo('signin');
            //alert(res.message)
         } else {
            alert('Something went wrong, please try again')
         }
      })
   }

   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" gap={'1rem'}>
            <ProfileCard profile={'General Profile'} data={profileData} actions={[{ title: 'Edit info', task: handleEditGeneralProfile }, { title: 'Log Out', task: handleLogout }]} />
            <ProfileCard profile={'Job Profile'} data={profileData} actions={[{ title: 'Update', task: handleUpdateJobProfile }, { title: 'Fill up', task: handleFill }]} />
         </Grid>
      </ThemeProvider>
   )
}
