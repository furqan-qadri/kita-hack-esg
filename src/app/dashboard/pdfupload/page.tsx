'use client'

import { Separator } from '@/components/ui/Separator';
import PdfUploadHeader from './_PageSections/PdfUploadHeader';
import ECard from "./_PageSections/ECard"
import { SCard } from './_PageSections/SCard';
import { GCard } from './_PageSections/GCard';
import { OCard } from './_PageSections/OCard';
import { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/Button';
import { useRouter } from "next/navigation";

export default async function PdfUploadPage() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push('/dashboard/report');
  };

  return (
    <div>
      <Toaster/>
      <PdfUploadHeader />
      <Separator className="my-4" />
      <ECard/>
      <SCard/>
      <GCard/>
      <OCard/>
      <Separator className="my-4" />
      <div className='flex justify-around'>
        <Button onClick={handleRedirect} className='flex flex-col items-center'>
          Next
        </Button>
      </div>
    </div>
  );
}
