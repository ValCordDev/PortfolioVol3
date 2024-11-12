import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { PiReadCvLogoFill } from "react-icons/pi";
import {motion} from 'framer-motion'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className={`${inter.className} flex justify-center bg-white min-h-screen`}>
      <div className="bg-[#232323] w-full h-full m-2 rounded-3xl">
        <Navbar />
        <main className="w-full h-[80vh] flex justify-center items-center">
          <div className="flex flex-row gap-10 justify-center items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2, delay: 0.25 }}
              className="flex justify-center flex-col text-center gap-5 w-[25vw]"
            >
              <h1 className="font-bold text-4xl">Heyo 👋</h1>
              <p className="font-light">Hei! Jeg heter Dev. Jeg jobber med mye i den digitale verden, som å blant annet drive med utvikling av nettsider og grafikk. Jeg utmerker med innen blant annet webutvikling, konseptutvikling, og å forfølge unike stiler innen webutvikling og grafisk design.</p>
              <div className="divider"></div>
              <button className="btn btn-outline border-white text-white"><PiReadCvLogoFill className="text-2xl"/>Jobbprofil + CV</button>
            </motion.div>
            <div className="indicator lg:ml-10 lg:mt-0 mt-10 ml-0">
              <span className="indicator-item badge badge-success"></span>
              <div className="grid w-64 h-64 bg-base-300 place-items-center rounded-xl">
                <Image src='/pfp.png' alt="Profile" width={256} height={256} className="rounded-xl"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
