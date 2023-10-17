import { Grid, TextField } from '@mui/material'
import React from 'react'

function FormGroupItem({ field, value }: { field: formInputFieldType, value?: string }) {
   return (
      <Grid xs item>
         <TextField
            name={field.id}
            required
            fullWidth
            id={field.id}
            label={field.label}
            autoFocus
         />
      </Grid>
   )
}

export default FormGroupItem