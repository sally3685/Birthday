import Image from 'next/image';
import styles from '@/app/styles/Home.module.css';
import Input from '@/app/components/Input';
export default function Home() {
  return (
    <>
      <main className="w-full h-full flex justify-center items-center">
        <div
          className={`bg-gradient-to-r from-[#ffd1c9] to-[#ff89a4] rounded-2xl w-[90%] max-w-[500px] h-3/4 max-h-[300px] flex justify-center p-8 gap-4 flex-col`}
        >
          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#23041d]">
            Log in :
          </h1>
          <label
            htmlFor="name"
            className="text-lg sm:text-xl lg:text-2xl text-[#23041d]"
          >
            Enter your name :
          </label>
          <Input></Input>
        </div>
      </main>
    </>
  );
}
//border-radius: 35% 65% 49% 51% / 51% 36% 64% 49%;
//border-radius: 46% 54% 34% 66% / 56% 39% 61% 44%;
//bg 23041d
//r ffd1c9
//l ff89a4
