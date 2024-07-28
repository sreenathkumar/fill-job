import { Button } from "@mui/joy";
import { SvgIcon } from "@mui/material";
import React from 'react'

function DownloadBtn({ image, item_name }: { image: string, item_name: string }) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = image;
        link.download = `${item_name}.jpg`; // Set the desired file name
        link.click();
    };
    return (
        <Button
            onClick={handleDownload}
            component="label"
            tabIndex={-1}
            variant="outlined"
            startDecorator={
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" /></svg>
                </SvgIcon>
            }
        >
            Download
        </Button>
    )
}

export default DownloadBtn