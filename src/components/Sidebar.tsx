import { useState } from "react";
import MockProductCardPage from "./mockProductCard";

export function Sidebar() {
  // State to keep track of the selected button
  const [selected, setSelected] = useState('');

  // Function to handle button click
  const handleButtonClick = (cameraPosition: React.SetStateAction<string>) => {
    setSelected(cameraPosition);
  };

  // Class for non-selected buttons
  const buttonClass = "border border-white text-white bg-black font-bold py-2 px-4 rounded focus:outline-none";
  // Class for the selected button
  const selectedButtonClass = "border border-white text-white bg-red-500 font-bold py-2 px-4 rounded focus:outline-none";

  return (
    <section className='fixed inset-y-0 right-0 flex-none w-96 z-10'>
      <div className='bg-[#0e0e0e] text-gray-100 px-4 py-8 flex flex-col h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <div className='mb-4'>
          <h2 className="mb-4">Camera:</h2>
          <div className="flex justify-between mb-4">
            <button className={selected === 'FREE' ? selectedButtonClass : buttonClass} onClick={() => handleButtonClick('FREE')}>
              FREE
            </button>
            <button className={selected === 'HEAD' ? selectedButtonClass : buttonClass} onClick={() => handleButtonClick('HEAD')}>
              HEAD
            </button>
            <button className={selected === 'TOP' ? selectedButtonClass : buttonClass} onClick={() => handleButtonClick('TOP')}>
              TOP
            </button>
            <button className={selected === 'BOTTOM' ? selectedButtonClass : buttonClass} onClick={() => handleButtonClick('BOTTOM')}>
              BOTTOM
            </button>
          </div>
          <hr className="border-t border-gray-200 mb-4"/>
        </div>
        {/* This div will contain the scrollable content */}
        <div className='overflow-auto'>
          <MockProductCardPage />
          {/* Repeat or add more content as necessary to enable scrolling */}
        </div>
      </div>
    </section>
  );
}