import React, { useEffect } from 'react'
import { useState } from "react";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { app } from '../../api/auth';
import Home from './components/Home';
import { signal } from '@preact/signals-react';
import EditGeneralProfile from './components/EditGeneralProfile';


export const appView = signal('signin'); // Default screen of popup
export const isLoggedIn = signal(false); // login status

//redirect to any view
export const redirectTo = (to: string) => {
   appView.value = to;
}

export default function App() {
   const [renderContent, setRenderContent] = useState<React.JSX.Element>(<SignIn />)
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
   if (!localStorage.profileData)
      user?.functions.callFunction('getGeneralData').then((res) => {
         localStorage.setItem('profileData', JSON.stringify(res.data));
      })
   const profileData = localStorage.getItem('profileData'); // get profile data from local storage

   let generalData: generalProfileDataType
   if (profileData !== null) {
      generalData = JSON.parse(profileData).generalData; // parse profile data to JSON object
      // convert image to base64
   }
   //change view on appView change
   useEffect(() => {
      if (isLoggedIn.value) {
         if (appView.value === 'editGeneralProfile') {
            setRenderContent(<EditGeneralProfile profileData={generalData} />)
         } else {
            setRenderContent(<EditGeneralProfile profileData={generalData} />)
         }
      } else {
         if (appView.value === 'signup') {
            setRenderContent(<SignUp />)
         } else {
            setRenderContent(<SignIn />)
         }
      }

   }, [appView.value])
   console.log(user);

   return (
      <>
         {renderContent}
      </>

   )
}
