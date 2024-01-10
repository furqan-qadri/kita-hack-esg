import { useEffect, useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const GeneratingReport = () => {
    const [requestReport, setRequestReport] = useState(false);
    const router = useRouter();
    
    const handleRequestReportClick = () => {
        setRequestReport(true);
    };

    const handleCancelClick = () => {
        setRequestReport(false);
    };
    
    useEffect(() => {
        // Redirect after 5 seconds when requestReport is set to true
        if (requestReport) {
          const timeoutId = setTimeout(() => {
            // Replace '/your-redirect-path' with the actual path you want to redirect to
            router.push('/dashboard/previewreports');
          }, 3000);
    
          // Clean up the timeout when the component is unmounted or requestReport is set to false
          return () => clearTimeout(timeoutId);
        }
    }, [requestReport, router]);
      
    return (
        <>
            {!requestReport &&
            <div className='flex justify-around'>
                <Button onClick={handleRequestReportClick} className='flex flex-col items-center'>Request ESG report</Button>
            </div>
            }
            {requestReport &&
            <div className="space-y-4">
                <div className='flex justify-around'>
                        <Icons.Loader className="flex flex-col items-center animate-spin-slow" width="240" height="240" strokeWidth="1" viewBox="0 0 24 24" />
                </div>
                <div className="flex justify-around">
                    <h3 className="text-2xl items-center tracking-tight">Fetching report. This may take few minutes</h3>
                </div>
                <div className='flex justify-around'>
                    <Button onClick={handleCancelClick} variant="destructive" className='flex flex-col items-center'>Cancel</Button>
                </div>
            </div>
            }
            
        </>
        
    );
};
  
export default GeneratingReport;
  