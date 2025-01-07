'use client'

import React, { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/app/Navbar";
import Image from 'next/image';
import {motion, useInView} from 'motion/react';

import Footer from "@/app/Footer"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    const cards = [
        { title: "Oslo Utlån", description: "Norges nye utlånsmetode", tags: ["UX", "UI", "Branding"], image: "/MacAirMockup.jpg" },
        { title: "Titan Express - VTC", description: "Virtuell Logistikkselskap", tags: ["UX", "UI", "Branding"], image: "/TitanExpress.jpg" },
        { title: "Titan Express - Hub/Admin Panel", description: "Panel for sjåfører i Titan Express", tags: ["UX", "UI", "Backend"], image: "/Free_Tablet_Mockup_1.jpg" },
    ]

  return (
    <div className={`${inter.className} flex justify-center min-h-screen`}>
      <div className="bg-[#232323] w-full h-full">
        <Navbar />
        <div className="flex justify-center items-center min-h-[80vh] w-screen flex-col text-center gap-3">
            <h1 className="font-bold text-4xl">UX / UI</h1>
            <p className="font-light max-w-readable">Webutvikling og webdesign er blant hovedemnet mitt og der jeg presterer mest. Disse prosjektene rangerer fra skolerelaterte aktiviteter innenfor IT, og i tillegg større prosjekter som jeg har vært med på å produsere.</p>
        </div>


        <div className="flex justify-center items-center w-screen flex-col text-center p-24">
            <div className="grid grid-cols-2 gap-6">
                {
                    cards.map((card, idx) => {
                        return (
                            <div key={idx} className="bg-[#3D3D3D] rounded-md shadow-lg flex flex-col items-center text-white max-w-sm">
                                <div className="w-full">
                                    <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={400}
                                    height={200}
                                    className="rounded-t-md object-cover object-center"
                                    />
                                </div>
                                <div className="pb-6">
                                    <div className="text-left mt-4">
                                        <h2 className="font-bold text-xl">{card.title}</h2>
                                        <p className="text-sm italic">{card.description}</p>
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        {card.tags.map((tag, tagIdx) => (
                                            <span key={tagIdx} className="bg-gray-800 text-xs px-2 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
