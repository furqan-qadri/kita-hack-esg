'use client'

import { Separator } from '@/components/ui/Separator';
import ReportHeader from './_PageSections/ReportHeader';
import GeneratingReport from './_PageSections/GeneratingReport';
// import ReportFinishedHeader from '../previewreport/_PageSections/ReportFinishedHeader';
// import ReportQuestion from '../previewreport/_PageSections/ReportQuestion';
// import ModifyReport from '../previewreport/_PageSections/ModifyReport';
// import { Outline } from './_PageSections/Outline';
// import ApiAnswer from '../previewreport/_PageSections/ApiAnswer';

export default async function PdfUploadPage() {
  return (
    <>
    <div>
        <ReportHeader />
        <Separator className="my-4" />
        <GeneratingReport />
    </div>
    {/* <div>
        <ReportFinishedHeader />
        <Separator className="my-4" />
        <Separator className="my-4" />
        <ModifyReport/>
        <ReportQuestion/>
        <ApiAnswer/>
    </div> */}
    </>
  );
}