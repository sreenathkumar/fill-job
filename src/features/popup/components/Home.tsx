import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { Grid } from '@mui/material'
import { theme } from '../../../utils/theme'
import ProfileCard from './ProfileCard'
import { isLoggedIn, redirectTo } from '../App'
import { app, logoutUser } from '../../../api/auth'
import { toast } from 'react-toastify'
import { sendMessageForData } from '../../../utils/sendMessageForData'

export default function Home({ email }: { email: string|undefined }) {
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
      try {
         sendMessageForData({ jobData: profileData, email: email }, fillDataToast);
      } catch (error) {
         console.log('sending message error: ', error);
         
      }
      
      // app.currentUser?.functions.callFunction('getJobProfileData').then((res) => {
      //    if (res.jobData) {
      //       chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
      //          try {
      //             chrome.tabs.sendMessage(
      //                tab[0].id!,
      //                { from: 'fill', data: res.jobData,email: email },
      //                (response) => {
      //                   if (response?.status === 'success') {
      //                      alert('Job profile filled successfully');
      //                      toast.update(fillDataToast, { render: 'Job profile filled successfully', type: 'success', autoClose: 2000, isLoading: false});
      //                   } else {
      //                      alert('Something went wrong, please reload the page and try again');
      //                      toast.update(fillDataToast, { render: 'Something went wrong, please reload the page and try again', type: 'error', autoClose: 2000, isLoading: false});
      //                   }
      //                }
      //             )
      //          } catch (error) {
      //             alert('Something went wrong, please reload the page and try again');
      //             toast.update(fillDataToast, { render: error.message, type: 'error', autoClose: 2000, isLoading: false});
      //          }
      //       });
      //    } else {
      //       alert('Please update your job profile first')
      //    }
      // })
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
