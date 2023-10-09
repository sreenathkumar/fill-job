import React from 'react'
import { logoutUser } from '../../../api/auth'
import { ThemeProvider } from '@emotion/react'
import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography, Chip, Divider, ButtonGroup } from '@mui/material'
import { theme } from '../../../utils/theme'
import ProfileCard from './ProfileCard'


export default function Home() {
   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" gap={'1rem'}>
            <ProfileCard profile={'General Profile'} name='' bio={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, hic.'} actions={[{ title: 'Edit info', url: '/' }]} />
            <ProfileCard profile={'Job Profile'} name='' bio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, hic.' actions={[{ title: 'Update', url: '/' }, { title: 'Fill up', url: '/' }]} />
         </Grid>
      </ThemeProvider>
   )
}
