import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className=" m-4 bg-gradient-to-r from-[#ffd1c9] to-[#ff89a4] rounded-xl  lg:w-1/2 overflow-y-auto max-h-[90vh] h-[300px] w-[90%]  gap-[2rem] flex-col relative p-2">
        <div className="flex justify-center items-center w-full h-full p-8 flex-col gap-8 ">
          <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#23041d]">
            {' '}
            May all your wishes come true. 😊💛
          </p>
          <Link
            href={`/`}
            className="bg-[#23041d] text-white px-2 py-2 rounded-lg "
          >
            Finish party
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
