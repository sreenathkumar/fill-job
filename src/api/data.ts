import { app } from "./auth"

const user = app.currentUser

const createJobProfile = async () => {
   const user = app.currentUser

}

export const getJobProfile = async () => {
   const response = await user?.functions.callFunction('getProfileData');
   if (!response) {
      throw new Error('No response from server');

   }
   return response.data
}