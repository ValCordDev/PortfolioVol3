import React from 'react'

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md w-full flex items-center p-2 min-h-16 rounded-t-2xl">
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
  )
}

export default Navbar