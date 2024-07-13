import { setDynamicData } from "../../utils/utilitiesFn";

//collect the html from the dom
const elements = document.querySelectorAll('.form-group input[id]');
const html = Array.from(elements).map((ele) => {
   return ele.outerHTML;
}
).join('\n')

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