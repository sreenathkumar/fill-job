import React from 'react'
import { logoutUser } from '../../../api/auth'

export default function Home() {
   return (
      <div>
         <h1>Home</h1>
         <p onClick={() => logoutUser()}>Logout</p>
      </div>
   )
}
