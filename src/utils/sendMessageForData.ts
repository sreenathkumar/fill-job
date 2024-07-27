import { toast } from "react-toastify";

export const sendMessageForData = (data: any, toastId: any) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            toast.update(toastId, { render: 'No active tab found', type: 'error', autoClose: 2000, isLoading: false });
            return;
        }

        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(
            activeTabId!,
            { from: 'popup', data: data.jobData, email: data.email },
            (response) => {
                if (chrome.runtime.lastError) {
                    toast.update(toastId, { render: 'Something goes wrong. Please refresh the page and try again!', type: 'error', autoClose: 2000, isLoading: false });
                    return;
                }

                if (response?.status === 'success') {
                    toast.update(toastId, { render: 'Job profile filled successfully', type: 'success', autoClose: 2000, isLoading: false });
                } else {
                    toast.update(toastId, { render: 'Something went wrong, please reload the page and try again', type: 'error', autoClose: 2000, isLoading: false });
                }
            }
        );
    });
};
