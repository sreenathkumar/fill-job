const formStructure = (data: jobProfileDataType) => {
   const formFields = [
      {
         name: 'Basic Information',
         section_field: [
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Applicant\'s Name' },
                  { type: 'input', id: 'field-id', level: 'আবেদনকারীর নাম' }
               ]
            },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Father\'s Name' },
                  { type: 'input', id: 'field-id', level: 'পিতার নাম' },
               ]
            },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Mother\'s Name' },
                  { type: 'input', id: 'field-id', level: 'মাতার নাম' },
               ]
            },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Date of Birth' },
                  { type: 'input', id: 'field-id', level: 'Nationality' },

               ]
            },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Religion' },
                  { type: 'input', id: 'field-id', level: 'Gender' },
               ]
            },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'National ID' },
                  { type: 'input', id: 'field-id', level: 'National ID Number' },
               ]
            },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Birth Registration' },
                  { type: 'input', id: 'field-id', level: 'Birth Registration Number' },
               ]
            },
            { type: 'input', id: 'field-id', level: 'Marital Status' },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Mobile Number' },
                  { type: 'input', id: 'field-id', level: 'Confirm Mobile Number' },
               ]
            },
            { type: 'input', id: 'field-id', level: 'Email' },
            {
               type: 'input_group', fields: [
                  { type: 'input', id: 'field-id', level: 'Quota' },
                  { type: 'input', id: 'field-id', level: 'Departmental Status' },
               ]
            },
         ]
      },
      {
         name: 'Address Section',
         section_field: []
      },
      {
         name: 'Basic Education Information',
         section_field: []
      },
      {
         name: 'Higher Education Information',
         section_field: []
      },

   ]
}