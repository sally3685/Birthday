import BalloonComponent from '@/app/components/Balloon';
import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/Fire.module.css';
import Fire from '@/app/components/Fire';

export async function generateStaticParams() {
  const names = await fetch(`${process.env.NEXT_PUBLIC_URL}`).then((res) =>
    res.json()
  );

  return names.map((name: any) => ({
    slug: name.slug,
  }));
}

const Party = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <main className="w-full h-full gap-12 flex justify-center items-center flex-col ">
      <BalloonComponent />
      <div className="w-full z-10 flex flex-col sm:flex-row justify-center gap-8 items-center">
        <div className=" h-1/2  gap-2 flex justify-center items-center">
          <Image
            width={30}
            height={30}
            alt="H"
            src={'/H.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="A"
            src={'/A.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="P"
            src={'/P.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="P"
            src={'/P.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="Y"
            src={'/Y.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
        </div>
        <div className=" h-1/2 flex gap-2 justify-center items-center ">
          <Image
            width={30}
            height={30}
            alt="B"
            src={'/B.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="I"
            src={'/I.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="R"
            src={'/R.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="T"
            src={'/T.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="H"
            src={'/H.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="D"
            src={'/D.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="A"
            src={'/A.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
          <Image
            width={30}
            height={30}
            alt="Y"
            src={'/Y.svg'}
            className="char w-[40px] h-[40px]"
          ></Image>
        </div>
        <div className="flex gap-2">
          {slug
            .toUpperCase()
            .split('')
            .map((char, index) => (
              <Image
                className="char w-[40px] h-[40px]"
                key={index}
                width={30}
                height={30}
                alt={char}
                src={`/${char}.svg`}
              />
            ))}
        </div>
      </div>
      <p className="text-white text-center z-10" id="wish">
        Make a wish then click on the candle's fire{' '}
      </p>
      <div
        id="cake"
        className={` relative bg-gradient-to-r from-[#ffd1c9] to-[#ff89a4] ${styles.border} rounded-2xl w-[90%] max-w-[500px] h-3/4 max-h-[300px] flex justify-center p-8 gap-4 flex-col z-10 mt-20 items-center`}
      >
        <Image
          width={300}
          height={300}
          className="relative bottom-[30px] w-[300px] h-[300px]"
          alt="cake"
          src={'/cake.png'}
        ></Image>
        <Fire></Fire>
      </div>
    </main>
  );
};

export default Party;
