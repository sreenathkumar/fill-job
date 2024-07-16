import { setDynamicData } from "../../utils/utilitiesFn";

//collect the html from the dom
const elements = document.querySelectorAll('.form-group input[id]');
const htmlObj = {};
const html = Array.from(elements).map((ele) => {
   return ele.outerHTML;
}
).join('\n');


function createFormObject() {
   const formObject: { [key: string]: string } = {};

   // Helper function to generate prefix based on fieldset legend
   function getPrefix(legendText: string) {
      switch (legendText) {
         case 'Present Address':
            return 'Present ';
         case 'Permanent Address':
            return 'Permanent ';
         case 'SSC/Equivalent Level':
            return 'SSC ';
         case 'HSC/Equivalent Level':
            return 'HSC ';
         case 'Graduation/Equivalent Level':
            return 'Graduation ';
         default:
            return '';
      }
   }

   // Query all the fieldsets
   const fieldsets = document.querySelectorAll('fieldset');

   fieldsets.forEach(fieldset => {
      const legend = fieldset.querySelector('legend');
      const prefix = legend ? getPrefix(legend.textContent?.trim() ?? '') : '';

      // Query all the form-group elements in the current fieldset
      const formGroups = fieldset.querySelectorAll('.form-group');

      formGroups.forEach(group => {
         // Get the input/select element and the corresponding label
         const input = group.querySelector('input, select');
         const label = group.querySelector('label');

         if (input && label) {
            // Add to formObject with id as key and prefixed label text as value
            formObject[input.id] = prefix + (label?.textContent?.trim() ?? '').replace('*', '');
         }
      });
   });

   return formObject;
}

// Example usage
const formObject = createFormObject();
console.log(formObject);


// ==================================================================
// Do the form action after receiving click event from the popup
// ==================================================================
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   fillUpForm(request.data);
   sendResponse({ status: "success", message: "Form filled up successfully" });
   //send the html to the background script
   chrome.runtime.sendMessage({ from: 'content', html: html, userId: '12345' }, (response) => {
      console.log('Message from background script', response);
      //fill up the form with the data come from background script
   });
});

// ==================================================================
// Fill up the form with the data from the background script
// ==================================================================
const fillUpForm = (data: jobProfileDataType) => {

   for (const [key, value] of Object.entries(data)) {
      const ele = <HTMLInputElement>document.getElementById(key);
      if (ele) {
         if (key === 'nid_no' || key === 'breg_no' || key === 'passport') {
            let checkElement = <HTMLSelectElement>document.getElementById(`${key.split('_')[0]}`); // taking the part before '_' as the id of the checkbox
            if (data[key] === '') {
               checkElement.value = '0';
            } else {
               checkElement.value = '1';
            }
         } // checks if this values are available in the form or not

         //conditionally filling up the form
         if (ele.type === 'select-one') {
            ele.value = setDynamicData(key, value);
            var event = new Event('change');
            ele.dispatchEvent(event);
         } else if (ele.type === 'checkbox') {
            if (value) { ele.click(); }
         }
         else {
            ele.value = value;
         }
      }
   }

}