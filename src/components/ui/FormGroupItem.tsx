import styled from '@emotion/styled';
import { Info } from '@mui/icons-material';
import { Grid, TextField, Button, IconButton, } from '@mui/material'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import React, { useEffect, useState } from 'react'
import FormInfo from './FormInfo';

function FormGroupItem({ field, value, fieldInfo, disabled }: { field: formInputFieldType, value?: string, fieldInfo?: string, disabled?: boolean }) {
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
            disabled={disabled}
            autoFocus
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
         />
         <Tooltip title={<FormInfo info={fieldInfo} />} arrow placement='right' sx={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}>
            <IconButton>
               <Info />
            </IconButton>
         </Tooltip>
      </Grid>
   )
}

export default FormGroupItem