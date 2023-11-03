import { Box, Typography } from '@mui/material'
import React from 'react'

function FormInfo({ info = 'Put your information' }: { info?: string }) {
   return (
      <Box padding={'8px'} whiteSpace={'pre-line'}>
         <Typography >
            {info}
         </Typography>
      </Box>
   )
}

export default FormInfo