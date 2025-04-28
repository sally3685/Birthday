'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
const Input = () => {
  const [name, setName] = useState<string>('');
  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        name="name"
        id="name"
        className="rounded-lg px-2 py-2 text-[#23041d] bg-white "
      />
      <Link
        href={`/party/${name}`}
        className="bg-[#23041d] text-white px-2 py-2 rounded-lg "
      >
        Move to the party{' '}
      </Link>
    </>
  );
};

export default Input;
