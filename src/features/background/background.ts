chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.from === 'content') {
        // Function to fetch data for application
        const getApplicationData = async (payload:{id:string, html:string}) => {
            try {
                const response = await fetch(`${process.env.PROD_API_URL}/api/profile/job-data`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const { data } = await response.json();

                if (data) {
                    sendResponse({ success: true, data: data });
                } else {
                    sendResponse({ success: false, error: 'No data received' });
                }
            } catch (error) {
                sendResponse({ success: false, error: error.message });
            }
        }

        // Call the async function
        getApplicationData({ id: request.userId, html: request.html });

    }
    // Indicate that we will send a response asynchronously
    return true;
});
