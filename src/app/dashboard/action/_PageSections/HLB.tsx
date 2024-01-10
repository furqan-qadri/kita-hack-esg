 {/* <Image src={Hong} alt="kj" /> */}
 import Hong from './hong_leong.png';
 import Image from 'next/image';
const HLB = () => {
  return (
    <div className="space-y-0.5">
      <h2 className=" text-2xl font-bold tracking-tight">Top HLB products to help you grow & comply wth ESG!</h2>
      {/* <p className="text-muted-foreground text-xl">Top actionable items based on your report </p> */}
      
<Image src={Hong} alt="kj" className=' h-24 w-64' /> 
      
    </div>
  );
};

export default HLB;