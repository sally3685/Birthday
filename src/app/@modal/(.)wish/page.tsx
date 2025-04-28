'use client';
import React from 'react';
import Modal from '@/app/components/Modal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Page = () => {
  const pathName = usePathname();
  if (pathName.includes('wish')) {
    return (
      <Modal>
        <div className="flex justify-center items-center w-full h-full p-8 flex-col gap-8 ">
          <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#23041d]">
            {' '}
            May all your wishes come true. 😊💛
          </p>
          <Link
            href={'/'}
            className="bg-[#23041d] text-white px-2 py-2 rounded-lg "
          >
            Finish party
          </Link>
        </div>
      </Modal>
    );
  } else return null;
};

export default Page;
