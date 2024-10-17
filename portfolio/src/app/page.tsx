import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} w-screen flex justify-center`}>
      <nav className="bg-white/10 backdrop-blur-md navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dev Raj</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          
        </button>
      </div>
      </nav>
      <main>
        
      </main>
    </div>
  );
}
