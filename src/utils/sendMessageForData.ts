import { toast } from "react-toastify";

export const sendMessageForData = (data: any, toastId: any) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {

        try {
            chrome.tabs.sendMessage(
                tab[0].id!,
                { from: 'popup', data: data.jobData, email: data.email },
                (response) => {
                    if (response?.status === 'success') {
                        toast.update(toastId, { render: 'Job profile filled successfully', type: 'success', autoClose: 2000, isLoading: false });
                    } else {
                        toast.update(toastId, { render: 'Something went wrong, please reload the page and try again', type: 'error', autoClose: 2000, isLoading: false });
                    }
                }
            )
        } catch (error) {
            toast.update(toastId, { render: error.message, type: 'error', autoClose: 2000, isLoading: false });
        }
    });
}