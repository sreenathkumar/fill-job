import React from 'react'
import { useState } from "react";
import SignUp from '../../components/SignUp';
export default function PopupContents() {
   const [renderContent, setRenderContent] = useState<React.JSX.Element | null>(null)
   const token: object | null = JSON.parse(localStorage.getItem('token'));


   //chekcing for valid accesstoken

   if (token !== null) {

   } else {
      setRenderContent(
         <SignUp />
      )
   }
   return (
      <div>PopupContents</div>
   )
}
