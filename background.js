// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.status === 'complete') {
//         chrome.tabs.sendMessage(tabId, {
//             url: tab.url,
//             type: 'URL_CHANGE'
//         });
//         setTimeout(() => {
//             chrome.tabs.sendMessage(tabId, {
//                 url: tab.url,
//                 type: 'URL_CHANGE'
//             });
//         }, 5000);
//     }
// });
