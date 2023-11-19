import { Box, TextField, Avatar, } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import { app } from '../../../api/auth';
import { convertImage } from '../../../utils/utilitiesFn';
import EditProfile from './EditProfile';
import { appView } from '../App';


function EditGeneralProfile({ profileData }: { profileData?: generalProfileDataType }) {
   const [firstName, setFirstName] = useState<string>(profileData?.firstName || '');
   const [lastName, setLastName] = useState<string>(profileData?.lastName || '');
   const [bio, setBio] = useState<string>(profileData?.bio || '');
   const [previewImage, setPreviewImage] = useState<string>(profileData?.img || '#');
   const [currentImage, setCurrentImage] = useState<File>();

   //handle image upload
   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target?.files as FileList;
      setCurrentImage(selectedFile?.[0]);
      setPreviewImage(URL.createObjectURL(selectedFile?.[0]));
   }

   //handle form submit
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let updatedProfileData;

      const formData = new FormData(e.currentTarget);
      if (currentImage) {
         const convertedImg = await convertImage(currentImage);
         formData.append('img', convertedImg);
      }
      const data = Object.fromEntries(formData.entries());

      if (profileData) {
         if (JSON.stringify(data) === JSON.stringify(profileData)) { //checking if the form data is same as the profile data
            alert('No changes made');
            return
         } else {
            updatedProfileData = { ...profileData, ...data }; //merging the profile data with the form data
            console.log(updatedProfileData);

            const res = await app.currentUser?.functions.callFunction('setProfile', updatedProfileData)
            // optimistic local storage update
            localStorage.setItem('profileData', JSON.stringify(updatedProfileData));

            if (res.status !== 'success') {
               localStorage.setItem('profileData', JSON.stringify(profileData)); // revert local storage update if failed
               alert('Something went wrong, please try again')
            } else {
               alert('Profile updated successfully');
            }
         }
      } else {
         const res = await app.currentUser?.functions.callFunction('setProfile', data)
         // optimistic local storage update
         localStorage.setItem('profileData', JSON.stringify(data));

         if (res.status !== 'success') {
            localStorage.removeItem('profileData'); // revert local storage update if failed
            alert('Something went wrong, please try again')
         } else {
            alert('Profile updated successfully');
         }
      }
   }

   const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
  name: 'generalProfileImage';
`;
   return (
      <EditProfile>
         <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>

            <Box sx={{ display: 'flex', gap: '1rem' }}>
               <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
               />

               <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value) }}
               />
            </Box>

            <TextField
               id="outlined-multiline-static"
               label="Bio"
               name='bio'
               multiline
               rows={4}
               fullWidth
               value={bio}
               onChange={(e) => { setBio(e.target.value) }}
            />
            <Box sx={{ display: 'flex', gap: '1rem' }} width={'100%'}>
               <Avatar variant="square" sx={{ width: '50px', height: '50px' }}>
                  <img src={previewImage} alt="" width={'100%'} height={'100%'} />
               </Avatar>
               <Button
                  component="label"
                  tabIndex={-1}
                  variant="outlined"
                  fullWidth
                  startDecorator={
                     <SvgIcon>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                           />
                        </svg>
                     </SvgIcon>
                  }
               >
                  Upload profile picture
                  <VisuallyHiddenInput onChange={handleFileUpload} type="file" />
               </Button>
            </Box>
            <Box display={'flex'} gap={'1rem'} mt={'1.5rem'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
               <Button onClick={() => appView.value = 'home'}  >
                  Go back
               </Button>
               <Button type='submit' >
                  Update data
               </Button>
            </Box>
         </Box>
      </EditProfile>
   )
}

export default EditGeneralProfile