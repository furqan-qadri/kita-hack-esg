import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

const reportQuestion = () => {
    
    return (
        <>

    <div className="space-y-0.5 mt-16">
      <h2 className="text-xl font-bold tracking-tight mt-4">Have questions?</h2>
      <p className="text-muted-foreground">Chat directly with the files</p>

    </div>

        
    {/* <div className="flex items-center border border-gray-300 rounded p-3 mt-4">
    <input
        type="text"
        className="flex-1 outline-none border-none"
        placeholder="Ask any question about your generated report here"
    />
    <button className="bg-green-500 hover:bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 transform rotate-180">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
        
    </div> */}

             
        </>
        
    );
};

export default reportQuestion;