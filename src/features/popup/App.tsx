import React, { useEffect } from 'react'
import { useState } from "react";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { app } from '../../api/auth';
import Home from './components/Home';
import { effect, signal } from '@preact/signals-react';
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
   let generalData: generalProfileDataType // declare general data

   if (user) {
      const token = localStorage.getItem('token'); // get token from local storage
      if (token !== null) {
         const parserdToken = (JSON.parse(token)); // parse token
         if (parserdToken.expiresAt > Date.now()) { // check if token is valid
            //appView.value = 'home';
            isLoggedIn.value = true // set logged in to true
         }
      }
   }
   if (!localStorage.profileData) {
      user?.functions.callFunction('getProfileData').then((res) => {
         localStorage.setItem('profileData', JSON.stringify(res.data));
      })
   }
   const localProfileData = localStorage.getItem('profileData'); // get localstorage profile data from local storage

   if (localProfileData !== null) {
      generalData = JSON.parse(localProfileData); // parse profile data to JSON object
   }

   //change view on appView change
   useEffect(() => {
      if (isLoggedIn.value) {
         if (appView.value === 'editGeneralProfile') {
            setRenderContent(<EditGeneralProfile profileData={generalData} />)
         } else if (appView.value === 'home') {
            setRenderContent(<Home profileData={generalData} />)
         } else {
            setRenderContent(<Home profileData={generalData} />)
         }
      } else {
         if (appView.value === 'signup') {
            setRenderContent(<SignUp />)
         } else {
            setRenderContent(<SignIn />)
         }
      }

   }, [appView.value, isLoggedIn.value])
   console.log(appView.value);

   return (
      <>
         {renderContent}
      </>

   )
}
