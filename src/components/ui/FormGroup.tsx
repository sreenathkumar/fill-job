import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

function FormGroup({ children }: { children: ReactNode }) {
   return (
      <Box display={'flex'} gap={'1rem'} flexGrow={'1'}>
         {children}
      </Box>
   )
}

export default FormGroup