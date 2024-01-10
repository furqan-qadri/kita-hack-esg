'use client'

import { Separator } from '@/components/ui/Separator';
// import ReportHeader from './_PageSections/ReportHeader';
// import GeneratingReport from './_PageSections/GeneratingReport';
import ReportFinishedHeader from './_PageSections/ReportFinishedHeader';
import ReportQuestion from './_PageSections/ReportQuestion';
import ModifyReport from './_PageSections/ModifyReport';
import ApiAnswer from './_PageSections/ApiAnswer';
import { TableofContent } from './_PageSections/TableofContent';

export default async function PdfUploadPage() {
  return (
    <>
    {/* <div>
        <ReportHeader />
        <Separator className="my-4" />
        <GeneratingReport />
    </div> */}
    <div>
        <ReportFinishedHeader />
        <Separator className="my-4" />
        <TableofContent/>
        <Separator className="my-4" />
        <ModifyReport/>
        <ReportQuestion/>
        <ApiAnswer/>
    </div>
    </>
  );
}