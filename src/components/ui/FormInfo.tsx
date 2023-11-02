import { Box, Typography } from '@mui/material'
import React from 'react'

function FormInfo({ info = 'Put your information' }: { info?: string }) {
   return (
      <Box maxWidth={'150px'}>
         <Typography >
            {info}
         </Typography>
      </Box>
   )
}

export default FormInfo