import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} w-screen flex justify-center bg-white min-h-screen`}>
      <div className="bg-[#232323] w-full m-2 rounded-3xl">
        <nav className="backdrop-blur-md w-full navbar rounded-t-2xl">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">Dev Raj</a>
          </div>
          <div className="flex-none gap-2">
            <a className="btn btn-ghost">Web</a>
            <a className="btn btn-ghost">Utvikling</a>
            <a className="btn btn-ghost">Grafikk</a>
            <a className="btn btn-ghost">Medie</a>
            <a className="btn btn-ghost">Kontakt</a>
          </div>
        </nav>
      </div>
      <main>
        
      </main>
    </div>
  );
}
