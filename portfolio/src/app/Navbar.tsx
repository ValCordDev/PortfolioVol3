import React from 'react'

const Navbar = () => {

  const navigation = [
      { title: "Web", path: "web" },
      { title: "Utvikling", path: "utvikling" },
      { title: "Grafikk", path: "grafikk" },
      { title: "Media", path: "media" },
      { title: "Kontakt", path: "kontakt" },
  ]

  return (
    <nav className="backdrop-blur-md w-full flex items-center p-2 min-h-16 rounded-t-2xl">
        <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold">Dev Raj</a>
        </div>
        

        <div className="flex-none gap-2">
          {
            navigation.map((item, idx) => {
              return (
                <a key={idx} className='btn btn-ghost' href={item.path}>{ item.title }</a>
              )
            })
          }
          
        </div>
    </nav>
  )
}

export default Navbar

{/* {
  navigation.map((item, idx) => {
      return (
        <li key={idx} className="text-gray-100 hover:text-gray-300 duration-300 font-semibold py-2">
            <a href={item.path} className='transition-shadow hover:shadow-xl duration-200'>
                { item.title }
            </a>
        </li>
      )
  }) 
      
  <a className="btn btn-ghost">Web</a>
  <a className="btn btn-ghost">Utvikling</a>
  <a className="btn btn-ghost">Grafikk</a>
  <a className="btn btn-ghost">Medie</a>
  <a className="btn btn-ghost">Kontakt</a>
  
  */}