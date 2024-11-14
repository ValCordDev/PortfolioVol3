'use client'

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import {motion, useInView} from 'motion/react';
import Link from 'next/link';

import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { PiReadCvLogoFill } from "react-icons/pi";
import Footer from "./Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {once: true});

  return (
    <div className={`${inter.className} flex justify-center min-h-screen`}>
      <div className="bg-[#232323] w-full h-full">
        <Navbar />
        <main className="w-full h-[80vh] flex justify-center items-center">
          <div className="flex flex-row gap-10 justify-center items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="flex justify-center flex-col text-center gap-5 w-[25vw]"
            >
              <h1 className="font-bold text-4xl">Heyo 👋</h1>
              <p className="font-light">Hei! Jeg heter Dev. Jeg jobber med mye i den digitale verden, som å blant annet drive med utvikling av nettsider og grafikk. Jeg utmerker med innen blant annet webutvikling, konseptutvikling, og å forfølge unike stiler innen webutvikling og grafisk design.</p>
              <div className="divider"></div>
              <button className="btn btn-outline border-white text-white"><PiReadCvLogoFill className="text-2xl"/>Jobbprofil + CV</button>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.25 }}
              className="indicator lg:ml-10 lg:mt-0 mt-10 ml-0"
            >
              <span className="indicator-item badge badge-success"></span>
              <div className="grid w-64 h-64 bg-base-300 place-items-center rounded-xl">
                <Image src='/pfp.png' alt="Profile" width={256} height={256} className="rounded-xl"/>
              </div>
            </motion.div>
          </div>
        </main>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5 }}
          animate={isInView ? "visible" : "hidden"}
          className="px-96 py-40 flex justify-center items-center flex-col gap-10"
        >
          <h1 ref={ref} className="text-2xl font-bold">Teknologier</h1>
          <p ref={ref} className="text-sm text-center">Jeg er en relativt allsidig utvikler og innholdsprodusent. Denne fleksibiliteten gjør at jeg raskt kan lære meg flere teknologier og ny programvare samtidig som jeg kan jobbe flytende med kunder og andre. Noen teknologier jeg for tiden aktivt bruker inkluderer følgende:</p>

          {/*Progress bars*/}
          <div className="flex flex-col gap-5">
            {/* HTML */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="flex flex-row gap-4 items-center"
            >
              <div className="flex flex-row items-center gap-2 w-36">
                <FaHtml5 className="text-2xl" />
                <span className="text-sm">HTML</span>
              </div>
              <progress className="progress w-56" value={95} max="100"></progress>
            </motion.div>

            {/* CSS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="flex flex-row gap-4 items-center"
            >
              <div className="flex flex-row items-center gap-2 w-36">
                <FaCss3Alt className="text-2xl" />
                <span className="text-sm">CSS</span>
              </div>
              <progress className="progress w-56" value={80} max="100"></progress>
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="flex flex-row gap-4 items-center"
            >
              <div className="flex flex-row items-center gap-2 w-36">
                <RiTailwindCssFill className="text-2xl" />
                <span className="text-sm">Tailwind CSS</span>
              </div>
              <progress className="progress w-56" value={96} max="100"></progress>
            </motion.div>

            {/* ReactJS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="flex flex-row gap-4 items-center"
            >
              <div className="flex flex-row items-center gap-2 w-36">
                <FaReact className="text-2xl" />
                <span className="text-sm">ReactJS</span>
              </div>
              <progress className="progress w-56" value={70} max="100"></progress>
            </motion.div>

            {/* NextJS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="flex flex-row gap-4 items-center"
            >
              <div className="flex flex-row items-center gap-2 w-36">
                <RiNextjsFill className="text-2xl" />
                <span className="text-sm">NextJS</span>
              </div>
              <progress className="progress w-56" value={70} max="100"></progress>
            </motion.div>

            {/* PHP */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="flex flex-row gap-4 items-center"
            >
              <div className="flex flex-row items-center gap-2 w-36">
                <FaPhp className="text-2xl" />
                <span className="text-sm">PHP</span>
              </div>
              <progress className="progress w-56" value={50} max="100"></progress>
            </motion.div>

            {/* JavaScript */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="flex flex-row gap-4 items-center"
            >
              <div className="flex flex-row items-center gap-2 w-36">
                <SiJavascript className="text-2xl" />
                <span className="text-sm">JavaScript</span>
              </div>
              <progress className="progress w-56" value={80} max="100"></progress>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5 }}
          animate={isInView2 ? "visible" : "hidden"}
          className="pb-40"
          >
          <h1 ref={ref2} className='w-screen text-3xl font-bold text-center'>Arbeidshistorikk:</h1>
          <ul className="m-10 timeline timeline-vertical gap-0">
              <li ref={ref2}>
                  <div className="timeline-start">2019 - 2020</div>
                  <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end timeline-box bg-[#232323]">Kodeinstruktør for <Link href="https://www.oslo.kommune.no/byutvikling/omradesatsingene-i-oslo/delprogram-sysselsetting/koding-og-arbeid/" className='link'>Skoler i Oslo Kommune</Link></div>
                  <hr/>
              </li>
              <li ref={ref2}>
                  <hr />
                  <div className="timeline-start">2021 - Nå</div>
                  <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end timeline-box bg-[#232323]">Innholdsprodusent for <Link href="https://www.aktivigrorud.no/grow/" className='link'>GROW Medielab</Link></div>
                  <hr/>
              </li>
              <li ref={ref2}>
                  <hr/>
                  <div className="timeline-start">2022 - Nå</div>
                  <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end timeline-box bg-[#232323]">Elev på <Link href="https://elvebakken.vgs.no/" className='link'>Elvebakken Videregående Skole</Link> - Videreutvikling i <br /><Link href="https://elvebakken.vgs.no/fagtilbud/informasjonsteknolog-og-medieproduksjon/informasjonsteknologi-og-medieproduksjon-med-praksisrettet-studiekompetanse/" className='link'>IT og Medieproduksjon</Link></div>
                  <hr/>
              </li>
              <li ref={ref2}>
                  <hr/>
                  <div className="timeline-start">2023 - Nå</div>
                  <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end timeline-box bg-[#232323]">Videoprodusent for  <Link href="https://jungeltelegraf1.no/" className='link'>Jungeltelegraf1</Link></div>
              </li>
          </ul>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
