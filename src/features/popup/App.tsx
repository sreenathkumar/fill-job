import React, { useEffect } from 'react'
import { useState } from "react";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { app } from '../../api/auth';
import Home from './components/Home';
import { signal } from '@preact/signals-react';
import EditGeneralProfile from './components/EditGeneralProfile';


export const appView = signal('signin'); // Default screen of popup
export const isLoggedIn = signal(false); // Default screen of popup

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

   //change view on appView change
   useEffect(() => {
      if (isLoggedIn.value) {
         if (appView.value === 'editGeneralProfile') {
            setRenderContent(<EditGeneralProfile />)
         } else {
            setRenderContent(<Home />)
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
   console.log(appView.value);


   return (
      <>
         {renderContent}
      </>

   )
}
