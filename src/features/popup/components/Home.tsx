import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import { theme } from '../../../utils/theme'
import ProfileCard from './ProfileCard'
import { isLoggedIn, redirectTo } from '../App'
import { app, logoutUser } from '../../../api/auth'
import { toast } from 'react-toastify'
import { sendMessageForData } from '../../../utils/sendMessageForData'

export default function Home({ email }: { email: string | undefined }) {
   const [profileData, setProfileData] = useState();
   const localProfileData = localStorage.getItem('profileData'); // get localstorage profile data from local storage


   useEffect(() => {
      const fetchData = async () => {
         if (!profileData) {
            if (!localProfileData || localProfileData === 'null') {

               try {
                  const res = await app.currentUser?.functions.callFunction('getProfileData');
                  if (res.status === 'success') {
                     setProfileData(res.data);
                     localStorage.setItem('profileData', JSON.stringify(res.data));

                  } else {
                     return
                  }
               } catch (error) {
                  console.error(error);
                  alert(error.message)
               }
            } else {
               let data = JSON.parse(localProfileData);
               if (!data?.real_name) {
                  try {
                     const res = await app.currentUser?.functions.callFunction('getProfileData');
                     if (res.status === 'success') {
                        setProfileData(res.data);
                        localStorage.setItem('profileData', JSON.stringify(res.data));
                     }
                  } catch (error) {
                     console.error(error);
                     alert(error.message)
                  }
               } else {
                  setProfileData(JSON.parse(localStorage.profileData));
               }
            }
         }
      };

      fetchData();
   }, [profileData, localProfileData]);


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
      const fillDataToast = toast.loading('Filling job profile data...', { autoClose: false });
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
         const domain = tabs[0]?.url?.split('/')[2];
         if (domain?.includes('teletalk.com.bd')) {

            app.currentUser?.functions.callFunction('getJobProfileData').then((res) => {
               if (res.jobData) {
                  sendMessageForData({ jobData: res.jobData, email: email }, fillDataToast);
               } else {
                  alert('Please update your job profile first')
               }
            })
         } else {
            toast.update(fillDataToast, { type: 'error', render: 'The website is not supported', isLoading: false, autoClose: 2000 });
            return;
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
