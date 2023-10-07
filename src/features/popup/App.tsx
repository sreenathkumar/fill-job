import React, { useEffect } from 'react'
import { useState } from "react";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { app } from '../../api/auth';
import Home from './components/Home';
import { signal } from '@preact/signals-react';


export const appView = signal('signin'); // Default screen of popup

//redirect to any view
export const redirectTo = (to: string) => {
   appView.value = to;
}

export default function App() {
   const [renderContent, setRenderContent] = useState<React.JSX.Element>(null)
   const user = app.currentUser;//chekcing for user
   if (user) {
      appView.value = 'home'
   }

   useEffect(() => {
      if (appView.value === 'home') {
         setRenderContent(<Home />)
      } else if (appView.value === 'signup') {
         setRenderContent(<SignUp />)
      } else {
         setRenderContent(<SignIn />)
      }
   }, [appView.value])
   console.log(user);

   return (
      <>
         {renderContent}
      </>

   )
}
