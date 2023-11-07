export const formStructure = {
   basic_field: [
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'name', label: 'Applicant\'s Name' },
            { type: 'input', id: 'name_bn', label: 'আবেদনকারীর নাম' }
         ]
      },
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'father', label: 'Father\'s Name' },
            { type: 'input', id: 'father_bn', label: 'পিতার নাম' },
         ]
      },
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'mother', label: 'Mother\'s Name' },
            { type: 'input', id: 'mother_bn', label: 'মাতার নাম' },
         ]
      },
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'dob', label: 'Date of Birth' },
            { type: 'input', id: 'nationality', label: 'Nationality' },

         ]
      },
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'religion', label: 'Religion' },
            { type: 'input', id: 'gender', label: 'Gender' },
         ]
      },
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'nid_no', label: 'National ID Number' },
            { type: 'input', id: 'breg_no', label: 'Birth Registration Number' },
         ]
      },
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'passport', label: 'Passport' },
            { type: 'input', id: 'passport_no', label: 'Passport Number' },
         ]
      },

      {
         type: 'input_group', fields: [
            { type: 'input', id: 'mobile', label: 'Mobile Number' },
            { type: 'input', id: 'confirm_mobile', label: 'Confirm Mobile Number' },
         ]
      },
      {
         type: 'input_group', fields: [
            { type: 'input', id: 'marital_status', label: 'Marital Status' },
            { type: 'input', id: 'email', label: 'Email' },
         ]
      },

      {
         type: 'input_group', fields: [
            { type: 'input', id: 'quota', label: 'Quota' },
            { type: 'input', id: 'dep_status', label: 'Departmental Status' },
         ]
      },
   ],
   present_address_field: [
      { type: 'input', id: 'present_careof', label: 'Care Of' },
      { type: 'input', id: 'present_village', label: 'Village/Road/House No' },
      { type: 'input', id: 'present_district', label: 'District' },
      { type: 'input', id: 'present_upazila', label: 'Upazilla' },
      { type: 'input', id: 'present_post', label: 'Post' },
      { type: 'input', id: 'present_postcode', label: 'Potal Code' },

   ],
   permanent_address_field: [
      { type: 'input', id: 'permanent_careof', label: 'Care Of' },
      { type: 'input', id: 'permanent_village', label: 'Village/Road/House No' },
      { type: 'input', id: 'permanent_district', label: 'District' },
      { type: 'input', id: 'permanent_upazila', label: 'Upazilla' },
      { type: 'input', id: 'permanent_post', label: 'Post' },
      { type: 'input', id: 'permanent_postcode', label: 'Potal Code' },
   ],
   ssc_field: [
      { type: 'input', id: 'ssc_board', label: 'Board' },
      { type: 'input', id: 'ssc_roll', label: 'Roll Number' },
      { type: 'input', id: 'ssc_reg', label: 'Registration Number' },
      { type: 'input', id: 'ssc_group', label: 'Group' },
      { type: 'input', id: 'ssc_year', label: 'Year' },
      { type: 'input', id: 'ssc_result_type', label: 'Result Type' },
      { type: 'input', id: 'ssc_result', label: 'Result' },
   ],
   hsc_field: [
      { type: 'input', id: 'hsc_board', label: 'Board' },
      { type: 'input', id: 'hsc_roll', label: 'Roll Number' },
      { type: 'input', id: 'hsc_reg', label: 'Registration Number' },
      { type: 'input', id: 'hsc_group', label: 'Group' },
      { type: 'input', id: 'hsc_year', label: 'Year' },
      { type: 'input', id: 'hsc_result_type', label: 'Result Type' },
      { type: 'input', id: 'hsc_result', label: 'Result' },
   ],
   honors_field: [
      { type: 'input', id: 'gra_exam', label: 'Exam' },
      { type: 'input', id: 'gra_institute', label: 'Institute' },
      { type: 'input', id: 'gra_year', label: 'Year' },
      { type: 'input', id: 'gra_subject', label: 'Subject' },
      { type: 'input', id: 'gra_result_type', label: 'Result Type' },
      { type: 'input', id: 'gra_result', label: 'Result' },
      { type: 'input', id: 'gra_duration', label: 'Duration' },
   ],
   masters_field: [
      { type: 'input', id: 'mas_exam', label: 'Exam' },
      { type: 'input', id: 'mas_institute', label: 'Institute' },
      { type: 'input', id: 'mas_year', label: 'Year' },
      { type: 'input', id: 'mas_subject', label: 'Subject' },
      { type: 'input', id: 'mas_result_type', label: 'Result Type' },
      { type: 'input', id: 'mas_result', label: 'Result' },
      { type: 'input', id: 'mas_duration', label: 'Duration' },
   ]
}
