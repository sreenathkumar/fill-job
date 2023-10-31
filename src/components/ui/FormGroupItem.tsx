import styled from '@emotion/styled';
import { Info } from '@mui/icons-material';
import { Grid, TextField, Button, IconButton, } from '@mui/material'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import React, { useEffect, useState } from 'react'

function FormGroupItem({ field, value }: { field: formInputFieldType, value?: string }) {
   const [fieldValue, setFieldValue] = useState(value)

   const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
      <Tooltip {...props} classes={{ popper: className }} />
   ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
      },
   }));
   useEffect(() => {
      setFieldValue(value)
   }, [value])


   return (
      <Grid xs item sx={{ position: 'relative', }} width={'100%'}>
         <TextField
            name={field.id}
            fullWidth
            id={field.id}
            label={field.label}
            autoFocus
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
         />
         <HtmlTooltip title="Add" arrow placement='right-end' sx={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}>
            <IconButton>
               <Info />
            </IconButton>
         </HtmlTooltip>
      </Grid>
   )
}

export default FormGroupItem