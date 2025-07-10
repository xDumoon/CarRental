import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import {Link, useLocation, useNavigate} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

const location = useLocation()
const [open, setOpen] = useState(false) // vetor para mudar algumas propriedades da pagina quando estiver no mobile
const navigate = useNavigate() // constante para adicionar propriedade de navegaçao quando clicar no botão

  return (
  
  // 1 div para a logica e estilizaçao da barra superior com a logo do site
  // 2 div para a logica e a estilizaçao do bloco dos botões de navegaçao do site: home, car e my bookings
  // 3 div para a barra de pesquisa e dashboard  
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 
    py-4 text-gray-600 border-b border-borderColor relative transition-all 
    ${location.pathname === "/" && "bg-light"}`}>

        <Link to='/'>
             <img src={assets.logo} alt="logo" className='h-8' />
        </Link>

        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t
        border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4
        sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === "/" ? 
        "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
            {menuLinks.map((link, index) => (
                <Link key={index} to={link.path}>
                    {link.name}
                </Link>
            ))}

            <div className='hidden lg:flex items-center text-sm gap-2 border border-bordercolor px-3
            rounded-full max-w-56'>
              <input type="text" className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              placeholder="Search Products"/>
              <img src={assets.search_icon} alt="search" />
            </div>
              
            <div className='flex max-sm:flex-col items-start sm:items-center gap-6'> 
                  <button onClick={()=> navigate('/owner')} /*no clique do botão da dashboard, onclick vai receber `/owner` que é a página do próprio user */ 
                  className="cursor-pointer">Dashboard</button> 
                  <button onClick={()=> setShowLogin(true)} /* botao para abrir o login form quando for criado */
                  className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull
                  transition-all text-white rounded-lg">Login</button>
            </div> 
          </div>
              
          <button // button para o mobile, true= aparece o icon X  para fechar (menu esta aberto) e false= aparece icone do menu lateral
          className='sm:hidden cursor-pointer' aria-label='Menu' onClick={()=> setOpen(!open)}>
            <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
          </button>
    </div>  
  )
}

export default Navbar
