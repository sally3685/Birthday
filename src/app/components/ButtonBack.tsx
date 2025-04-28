'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const ButtonBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="cursor-pointer w-[24px] h-[24px] text-[20px] rounded  right-[5px] top-[5px] absolute "
    >
      &#10008;
    </button>
  );
};

export default ButtonBack;
