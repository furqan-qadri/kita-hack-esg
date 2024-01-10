'use client'
import Image from 'next/image';
import { Separator } from '@/components/ui/Separator';
import ActionHeader from './_PageSections/ActionHeader';
import ActionText from './_PageSections/ActionText';
import { Outline } from '../report/_PageSections/Outline';
import HongTable from './_PageSections/HongTable';
import HLB from './_PageSections/HLB';
// import Hong from './hong_leong.png';

import treeImage from './tree.png'; 

export default async function PdfUploadPage() {
  return (
    <>
    <div>
        <ActionHeader />
        <Separator className="my-4" />
        <ActionText/>
        <Outline/>
        {/* <HLB/> */}
        {/* <Image src={Hong} alt="kj" /> */}
        {/* <HongTable/> */}


    </div>

    </>
  );
}
