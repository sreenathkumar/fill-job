
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   fillUpForm(request.data);
   sendResponse({ data: "Message received" });
});

const fillUpForm = (data: jobProfileDataType) => {
   const fields: string[] = [];
   for (const [key, value] of Object.entries(data)) {
      const ele = <HTMLInputElement>document.getElementById(key);
      if (ele) {
         if (ele.type !== 'select-one') {
            ele.value = value;
         } else {
            console.log('do something with select');

         }
      }
   }

}