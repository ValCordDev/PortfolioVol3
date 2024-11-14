import React from 'react'
import Link from 'next/link';

import { FaFacebookSquare, FaHashtag } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-20 flex justify-between items-center bg-white/5 p-10">
        <div className='flex justify-center items-center gap-5'>
            <FaHashtag className='text-2xl' />
            <span className='text-sm font-light'>Copyright © 2024 - Alle rettigheter forbeholdt</span>
        </div>
        <div className='flex justify-center items-center gap-3 text-2xl'>
            <Link href='#'><FaFacebookSquare /></Link>
            <Link href='#'><FaXTwitter /></Link>
            <Link href='#'><FaInstagram /></Link>
        </div>
    </footer>
  )
}

export default Footer