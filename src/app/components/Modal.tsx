import React from 'react';
import ButtonBack from './ButtonBack';
const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-20 bg-[#000000b4] min-h-screen bg-opacity-75 flex justify-center items-center w-full fixed top-0 ">
      <div className="m-4 bg-gradient-to-r from-[#ffd1c9] to-[#ff89a4] rounded-xl  lg:w-1/2 overflow-y-auto max-h-[90vh] h-[300px] w-[90%]  gap-[2rem] flex-col relative p-2">
        <ButtonBack></ButtonBack>
        {children}
      </div>
    </div>
  );
};

export default Modal;
