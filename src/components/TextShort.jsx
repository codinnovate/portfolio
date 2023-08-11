import { ChevronLeftOutlined, ChevronRight, DoneAll } from '@mui/icons-material';
import React, { useState } from 'react';

const TextShort = ({text1, text2, text3}) => {
  const [partToShow, setPartToShow] = useState(1);

  const handleShowMore = () => {
    setPartToShow(partToShow + 1);
    };
    
    const handleShowPrev = () => {
            setPartToShow(partToShow - 1);
    }

  return (
    <div>
      {partToShow === 1 && (
        <div className='flex flex-col select-none'>
            <h1
             className=''>
                      {text1}... </h1>
                  
                  <span className='mt-5'>
                      <h1 className='animate-bounce text-sm'>Click to Read More</h1>
                  </span>
                  <button
                        onClick={handleShowMore}
                        className='bg-[#e91e63] flex w-[5em] m-5 justify-center  p-3 ml-2 my-2 rounded-full hover:bg-white hover:text-[#e91e63] font-medium'>
                        <ChevronRight />
                  </button>
         </div> 
      )}
      {partToShow === 2 && (
              <div>
                  <h1 className=''
                  >.. {text2} ...
                  </h1>
                  
                  <div className='flex'>
                      
                  <button
                      onClick={handleShowPrev}
                      className='bg-[#e91e63] flex  justify-center p-3 w-[5em] m-5 ml-2 my-2 rounded-full hover:bg-white hover:text-[#e91e63] font-medium'>
                      <ChevronLeftOutlined />
                  </button>
                  <button
                      onClick={handleShowMore}
                      className='bg-[#e91e63] flex  justify-center p-3 w-[5em] m-5 ml-2 my-2 rounded-full hover:bg-white hover:text-[#e91e63] font-medium'>
                    <ChevronRight />
                      </button>
                      </div>
                 </div>
      )}
      {partToShow === 3 && (
        <div className='flex flex-col'>
                  <h1>...{text3}. <br/> <p className='text-[#e91e63] flex items-center font-bold'>Done
                       <DoneAll  className='ml-2'/>
                  </p></h1>
                   <span className='mt-5'>
                      <h1 className='animate-bounce text-sm'>Click to go back</h1>
                  </span>
                  <button
                      onClick={handleShowPrev}
                      className='bg-[#e91e63] flex  justify-between p-3 w-[5em] m-5 ml-2 my-2 rounded-full hover:bg-white hover:text-[#e91e63] font-medium'>
                    <ChevronLeftOutlined />
                </button>
        </div>
      )}
    </div>
  );
};

export default TextShort;
