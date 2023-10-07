import React, { useEffect } from 'react'
import { useState } from "react";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { app } from '../../api/auth';
import Home from './components/Home';
import { signal } from '@preact/signals-react';


export const appView = signal('signup'); // Default screen of popup

//redirect to any view
export const redirectTo = (to: string) => {
   appView.value = to;
}

export default function App() {
   const [renderContent, setRenderContent] = useState<React.JSX.Element>(<SignUp />)

   const user = app.currentUser;//chekcing for user

   useEffect(() => {
      if (appView.value === 'home') {
         setRenderContent(<Home />)
      } else if (appView.value === 'signin') {
         setRenderContent(<SignIn />)
      } else {
         setRenderContent(<SignUp />)
      }
   }, [appView.value])

   console.log(appView.value)
   return (
      <>
         {renderContent}
      </>

   )
}
