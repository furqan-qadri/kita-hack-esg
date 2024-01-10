'use client'

import { Separator } from '@/components/ui/Separator';
import ActionHeader from './_PageSections/InsightHeader';
import { Outline } from '../report/_PageSections/Outline';
import BarChart from "./_PageSections/BarChart";
import LineChart from "./_PageSections/LineChart";
import GradientChart from './_PageSections/GradientChart';
import PieChart from './_PageSections/Piechart';
import RadarChart from './_PageSections/RadarChart';
import GolGol from './_PageSections/GolGol';
import GolGolGol from './_PageSections/GolGolGol';
import GolGolGolGol from './_PageSections/GolGolGolGol';
import Warning from './_PageSections/warning';

export default async function Insight() {
  return (
    <>
    <div>
        <Warning/>
        <ActionHeader />
        <Separator className="my-4" />
        <div className='flex justify-around'>
        <BarChart/>
        <div className='flex'>
        <GolGol/>
        <GolGolGol/>
        <GolGolGolGol/>
        </div>
        </div>
        <GradientChart/>
        <LineChart/>
        
        <Separator className="my-4" />
        <div className='flex justify-around'>
        <PieChart/>
        <br />
        <RadarChart/>
        </div>

    </div>
    {/* <div>
        <ReportFinishedHeader />
        <Separator className="my-4" />
        <Outline/>
        <Separator className="my-4" />
        <ModifyReport/>
    </div> */}
    </>
  );
}
