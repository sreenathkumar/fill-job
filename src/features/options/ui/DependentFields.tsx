import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { formStructure } from '../../../utils/formStructure'
import FormGroupItem from '../../../components/ui/FormGroupItem'
import { jobProfileFormInfo } from '../../../utils/formInfo'

function DependentFields({ name, id, check, data }: { name: string, id: string, check: boolean, data: jobProfileDataType | undefined }) {
   const [isChecked, setIsChecked] = useState(check)

   useEffect(() => {
      setIsChecked(check)
   }, [check])

   switch (id) {
      case 'same_as_present':
         return (<>
            <FormControlLabel control={<Checkbox value={isChecked} checked={isChecked} name={name} id={id} onChange={() => setIsChecked(!isChecked)} />} sx={{ alignSelf: 'flex-start' }} label="Same as present" />
            {
               !isChecked &&
               formStructure.permanent_address_field.map((item, itIndex) => {
                  return (
                     <FormGroupItem field={item} key={itIndex} value={data ? data[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
                  )
               })
            }
         </>
         )
         break;
      case 'if_applicable_mas':
         return (
            <>
               <FormControlLabel control={<Checkbox value={isChecked} checked={isChecked} id='if_applicable_mas' name='if_applicable_mas' onChange={() => setIsChecked(!isChecked)} />} sx={{ alignSelf: 'flex-start' }} label="If applicable" />
               {
                  isChecked && formStructure.masters_field.map((item, itIndex) => {
                     return (
                        <FormGroupItem field={item} key={itIndex} value={data ? data[item.id] : ''} fieldInfo={jobProfileFormInfo[item.id]} />
                     )
                  })
               }
            </>
         )
         break;
      default:
         return (<span>Nothing to show</span>)
   }

}

export default DependentFields