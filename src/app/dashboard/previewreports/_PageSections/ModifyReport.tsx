import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

const ModifyReport = () => {
    const handleDownload = () => {
        // Replace 'ESG.ai.pdf' with the actual name of your PDF file
        const pdfUrl = '/Al-Ikhsan ESG Report.pdf';
    
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; 
        link.download = 'Al Ikhsan ESG Report.pdf'; // Change the file name
        document.body.appendChild(link);
    
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
      };

    return (
        <>
            <div className='flex justify-around'>
                <Button className='flex flex-col items-center'>Modify</Button>
                <Button onClick={handleDownload} className='flex flex-col items-center'>Download</Button>
                <Button className='flex flex-col items-center'>Share</Button>
            </div>
        </>
        
    );
};
  
export default ModifyReport;
  