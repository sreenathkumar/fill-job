import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import { theme } from '../../../utils/theme'
import ProfileCard from './ProfileCard'
import { isLoggedIn, redirectTo } from '../App'
import { app, logoutUser } from '../../../api/auth'

export default function Home() {
   const [profileData, setProfileData] = useState();
   const localProfileData = localStorage.getItem('profileData'); // get localstorage profile data from local storage

   if (!profileData) {
      if (!localProfileData || localProfileData === 'null') {
         app.currentUser?.functions.callFunction('getProfileData').then((res) => {
            console.log(res);
            if (res.status === 'success') {
               setProfileData(res.data)
               localStorage.setItem('profileData', JSON.stringify(res.data));
            } else {
               return
            }
         })
      } else {
         setProfileData(JSON.parse(localStorage.profileData));
      }
   }

   //handle edit general profile
   const handleEditGeneralProfile = () => {
      redirectTo('editGeneralProfile')
   }
   //handle update job profile
   const handleUpdateJobProfile = () => {
      chrome.tabs.create({ url: 'js/options.html' })
   }
   //handle fill up form
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
   // handle logout
   const handleLogout = () => {
      logoutUser().then((res) => {
         if (res.status === 'success') {
            isLoggedIn.value = false;
            redirectTo('signin');
            localStorage.profileData = null;
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
      </ThemeProvider >
   )
}
